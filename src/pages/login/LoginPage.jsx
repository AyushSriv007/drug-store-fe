import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
//ßimport { setUser } from "../features/auth/authSlice";
import 'react-phone-input-2/lib/bootstrap.css'

const Login = () => {
    const [phone, setPhone] = useState(null);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [confirmationObj, setConfirmationObj] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [phoneCountryCode, setPhoneCountryCode] = useState(null);
    const [showUserForm, setShowUserForm] = useState(false);
    const [userForm, setUserForm] = useState({ name: "", email: "" });

    const navigate = useNavigate();

    const generateReCaptcha = () => {
        if (!window.recaptchaVerifier) {
            try {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                    size: "invisible",
                    callback: () => { },
                });

                window.recaptchaVerifier.render();
            } catch (err) {
                console.error("Recaptcha setup error:", err);
            }
        }
    };

    const sendOTP = () => {
        if (phone) {
            generateReCaptcha();

            signInWithPhoneNumber(auth, phoneCountryCode, window.recaptchaVerifier)
                .then((confirmationResult) => {
                    toast.success("OTP sent successfully!");
                    setConfirmationObj(confirmationResult);
                    setOtpSent(true);
                })
                .catch((error) => {
                    console.error("OTP send error:", error);
                    toast.error("Failed to send OTP");
                    window.recaptchaVerifier?.recaptcha?.reset?.();
                });
        } else {
            toast.error("Please enter your phone number!");
        }
    };

    const verifyOTP = async () => {
        if (otp?.length !== 6) {
            toast.error("Please enter a 6-digit OTP");
            return;
        }

        try {
            const result = await confirmationObj.confirm(otp);
            const idToken = await result.user.getIdToken();
            const phoneNumber = result.user.phoneNumber;

            const formData = new FormData();
            formData.append("phone", "9999999999");
            formData.append("country_code", "+91");

            const res = await fetch(`http://168.231.113.74/users/auth_user`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (data?.data?.is_new_user) {
                setShowUserForm(true);
                setPhone(phoneNumber);
            } else {
                toast.success("Welcome back!");
                navigate("/");
            }
        } catch (error) {
            console.error("OTP verification or API failed:", error);
            toast.error("Something went wrong during login");
        }
    };


    const submitNewUser = async (e) => {
        e.preventDefault();

        try {
            const idToken = await auth.currentUser.getIdToken();
            const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/create-user`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${idToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    phone,
                    name: userForm.name,
                    email: userForm.email,
                }),
            });

            const data = await res.json();

            if (data?.status === 200) {
                toast.success("User created successfully");
                navigate("/");
            } else {
                toast.error(data?.message || "Failed to create user");
            }
        } catch (error) {
            console.error("Create user failed:", error);
            toast.error("Something went wrong");
        }
    };

    const changePhoneNo = () => {
        setOtpSent(false);
        setPhone(null);
        setOtp("");
        setPhoneCountryCode("");
        setShowUserForm(false);
        setUserForm({ name: "", email: "" });
    };

    return (
        <main>
            <section className="my-lg-16 my-8">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="../assets/images/logo.svg" alt="logo" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-6 offset-lg-1 col-lg-4">
                            <h1 className="mb-1 h2 fw-bold">Sign in to Shoppers Hunt</h1>
                            <p>Welcome back! Enter your phone number to continue.</p>

                            {!showUserForm ? (
                                <>
                                    <div className="mb-3">
                                        <PhoneInput
                                            country="in"
                                            disabled={otpSent}
                                            value={phoneCountryCode}
                                            onChange={(phoneNumber, countryData) => {
                                                setPhone(phoneNumber?.substring(countryData.dialCode.length));
                                                setCountryCode(`+${countryData.dialCode}`);
                                                setPhoneCountryCode(`+${phoneNumber}`);
                                            }}
                                        />
                                        {otpSent && (
                                            <div className="text-muted text-end cursor-pointer" onClick={changePhoneNo}>
                                                <small>Change Phone No.?</small>
                                            </div>
                                        )}
                                    </div>

                                    {otpSent ? (
                                        <>
                                            <div className="my-4 px-4 otp-container">
                                                <OtpInput
                                                    value={otp}
                                                    shouldAutoFocus
                                                    onChange={setOtp}
                                                    isInputNum
                                                    className='form-control'
                                                    inputStyle={{
                                                        width: '3em',
                                                        margin: '2px',
                                                        textAlign: 'center'
                                                    }}
                                                    numInputs={6}
                                                    renderInput={(props) => <input {...props} />}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-primary w-100" type="button" onClick={verifyOTP}>
                                                    Verify OTP
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center">
                                            <button className="btn btn-primary w-100" type="button" onClick={sendOTP}>
                                                Send OTP
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <form onSubmit={submitNewUser}>
                                    <div className="mb-2">
                                        <input
                                            className="form-control"
                                            placeholder="Full Name"
                                            value={userForm.name}
                                            onChange={(e) => setUserForm((prev) => ({ ...prev, name: e.target.value }))}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            className="form-control"
                                            placeholder="Email"
                                            type="email"
                                            value={userForm.email}
                                            onChange={(e) => setUserForm((prev) => ({ ...prev, email: e.target.value }))}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-success w-100" type="submit">
                                        Submit
                                    </button>
                                </form>
                            )}

                            <div id="recaptcha-container" className="text-center my-3" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;
