import { useState } from "react";
import FeatureSection from '../../components/FeatureSection';
import PhoneInput from 'react-phone-input-2';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-phone-input-2/lib/bootstrap.css'
import { auth } from "../../firebase/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OTPInput from "react-otp-input";
import BreadcrumbSection from "../../components/common/breadcrumb/BreadcrumbSection";
import { useLoginUserMutation } from "../../features/auth/authApi";

const Login2 = () => {
    const [phone, setPhone] = useState(null);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [confirmationObj, setConfirmationObj] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [phoneCountryCode, setPhoneCountryCode] = useState(null);
    const [showUserForm, setShowUserForm] = useState(false);
    const [userForm, setUserForm] = useState({ name: "", email: "" });
    const [loginUser] = useLoginUserMutation();

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

    // const verifyOTP = async () => {
    //     if (otp?.length !== 6) {
    //         toast.error("Please enter a 6-digit OTP");
    //         return;
    //     }

    //     try {
    //         const result = await confirmationObj.confirm(otp);
    //         const idToken = await result.user.getIdToken();
    //         const phoneNumber = result.user.phoneNumber;

    //         const formData = new FormData();
    //         formData.append("phone", "9999999999");
    //         formData.append("country_code", "+91");

    //         const res = await fetch(`http://168.231.113.74/users/auth_user`, {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${idToken}`,
    //             },
    //             body: formData,
    //         });

    //         const data = await res.json();

    //         if (data?.data?.is_new_user) {
    //             setShowUserForm(true);
    //             setPhone(phoneNumber);
    //         } else {
    //             toast.success("Welcome back!");
    //             navigate("/");
    //         }
    //     } catch (error) {
    //         console.error("OTP verification or API failed:", error);
    //         toast.error("Something went wrong during login");
    //     }
    // };

const verifyOTP = async () => {
    if (otp?.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    try {
      const result = await confirmationObj.confirm(otp);
      const phoneNumber = result.user.phoneNumber;
      const idToken = await result.user.getIdToken();

      const { data } = await loginUser({ phone, country_code: countryCode });

      if (data?.data?.is_new_user) {
        navigate("/complete-profile", {
          state: {
            phone,
            countryCode,
            token: idToken,
          },
        });
      } else {
        toast.success("Welcome back!");
        navigate("/");
      }
    } catch (error) {
      console.error("OTP verification or login API failed:", error);
      toast.error("Something went wrong during login");
    }
  };

    // const submitNewUser = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const idToken = await auth.currentUser.getIdToken();
    //         const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/create-user`, {
    //             method: "POST",
    //             headers: {
    //                 Authorization: `Bearer ${idToken}`,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 phone,
    //                 name: userForm.name,
    //                 email: userForm.email,
    //             }),
    //         });

    //         const data = await res.json();

    //         if (data?.status === 200) {
    //             toast.success("User created successfully");
    //             navigate("/");
    //         } else {
    //             toast.error(data?.message || "Failed to create user");
    //         }
    //     } catch (error) {
    //         console.error("Create user failed:", error);
    //         toast.error("Something went wrong");
    //     }
    // };

    // const changePhoneNo = () => {
    //     setOtpSent(false);
    //     setPhone(null);
    //     setOtp("");
    //     setPhoneCountryCode("");
    //     setShowUserForm(false);
    //     setUserForm({ name: "", email: "" });
    // };

    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection
                items={[
                    { label: 'Home', path: '/' },
                    { label: 'Login' }
                ]}
            />
            <div className="login__section section--padding"
                style={{
                    backgroundImage: `url('/assets/img/banner/herbal4.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(1px)',
                }}
            >
                <div className="container">
                    <form action="#">
                        <div className="login__section--inner">
                            <div className="row row-cols-md-2 row-cols-1 justify-content-center">
                                <div className="col">
                                    <div className="account__login"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.3)',
                                            backdropFilter: 'blur(12px)',
                                            WebkitBackdropFilter: 'blur(12px)',
                                            //borderRadius: '16px',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                        }}
                                    >
                                        <div className="account__login--header mb-25">
                                            <h2 className="account__login--header__title mb-15">Sign in to Drug Store</h2>
                                            <p className="account__login--header__desc">
                                                Enter your phone number to get started.
                                            </p>
                                        </div>
                                        <div className="account__login--inner">
                                            <label className="mb-15">
                                                <PhoneInput
                                                    country="in"
                                                    disabled={otpSent}
                                                    value={phoneCountryCode}
                                                    onChange={(phoneNumber, countryData) => {
                                                        setPhone(phoneNumber?.substring(countryData.dialCode.length));
                                                        setCountryCode(`+${countryData.dialCode}`);
                                                        setPhoneCountryCode(`+${phoneNumber}`);
                                                    }}
                                                    inputStyle={{ width: '100%' }}
                                                />
                                            </label>
                                            {otpSent ? (
                                                <>
                                                    <div className="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                                                        <div className="account__login--remember position__relative">
                                                        </div>
                                                        <button className="account__login--forgot" type="submit">
                                                            Change Phone No.?
                                                        </button>
                                                    </div>
                                                    <label className="mb-15">
                                                        <div className="d-flex justify-content-center">
                                                            <OTPInput
                                                                value={otp}
                                                                shouldAutoFocus
                                                                onChange={setOtp}
                                                                isInputNum
                                                                className='form-control'
                                                                inputStyle={{
                                                                    width: '5rem',
                                                                    height: '5rem',
                                                                    margin: '0 1rem',
                                                                    fontSize: '2rem',
                                                                    borderRadius: '4px',
                                                                    border: '1px solid rgba(0,0,0,.3)'
                                                                }}

                                                                numInputs={6}
                                                                renderInput={(props) => <input {...props} />}
                                                            />
                                                        </div>
                                                    </label>
                                                    <button className="account__login--btn primary__btn" type="button" onClick={verifyOTP}>
                                                        Verify OTP
                                                    </button>
                                                </>
                                            ) : (
                                                <button className="account__login--btn primary__btn" type="button" onClick={sendOTP}>
                                                    Send OTP
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div id="recaptcha-container" className="text-center my-3" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FeatureSection />
        </main>
    );
};

export default Login2;