import React from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import FeatureSection from '../FeatureSection';

const Checkout = () => {
    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection />
            <div className="checkout__page--area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="main checkout__mian">
                                <form>
                                    {/* Contact Information */}
                                    <div className="checkout__content--step section__contact--information">
                                        <div className="checkout__section--header d-flex align-items-center justify-content-between mb-25">
                                            <h2 className="checkout__header--title h3">Contact information</h2>
                                            <p className="layout__flex--item">
                                                Already have an account? <a className="layout__flex--item__link" href="/login">Log in</a>
                                            </p>
                                        </div>
                                        <div className="customer__information">
                                            <div className="checkout__email--phone mb-12">
                                                <input className="checkout__input--field border-radius-5" placeholder="Email or mobile phone number" type="text" />
                                            </div>
                                            <div className="checkout__checkbox">
                                                <input className="checkout__checkbox--input" id="check1" type="checkbox" />
                                                <span className="checkout__checkbox--checkmark"></span>
                                                <label className="checkout__checkbox--label" htmlFor="check1">Email me with news and offers</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Billing Details */}
                                    <div className="checkout__content--step section__shipping--address">
                                        <div className="checkout__section--header mb-25">
                                            <h2 className="checkout__header--title h3">Billing Details</h2>
                                        </div>
                                        <div className="section__shipping--address__content">
                                            <div className="row">
                                                {["First", "Last"].map((label, index) => (
                                                    <div key={label} className="col-lg-6 col-md-6 col-sm-6 mb-20">
                                                        <div className="checkout__input--list">
                                                            <label className="checkout__input--label mb-10" htmlFor={`input${index + 1}`}>{label} Name <span className="checkout__input--label__star">*</span></label>
                                                            <input className="checkout__input--field border-radius-5" placeholder={`${label} name`} id={`input${index + 1}`} type="text" />
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="col-12 mb-20">
                                                    <div className="checkout__input--list">
                                                        <label className="checkout__input--label mb-10" htmlFor="input3">Company Name <span className="checkout__input--label__star">*</span></label>
                                                        <input className="checkout__input--field border-radius-5" placeholder="Company (optional)" id="input3" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <div className="checkout__input--list">
                                                        <label className="checkout__input--label mb-10" htmlFor="input4">Address <span className="checkout__input--label__star">*</span></label>
                                                        <input className="checkout__input--field border-radius-5" placeholder="Address1" id="input4" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <input className="checkout__input--field border-radius-5" placeholder="Apartment, suite, etc. (optional)" type="text" />
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label className="checkout__input--label mb-10" htmlFor="input5">Town/City <span className="checkout__input--label__star">*</span></label>
                                                    <input className="checkout__input--field border-radius-5" placeholder="City" id="input5" type="text" />
                                                </div>
                                                <div className="col-lg-6 mb-20">
                                                    <label className="checkout__input--label mb-10" htmlFor="country">Country/region <span className="checkout__input--label__star">*</span></label>
                                                    <select className="checkout__input--select__field border-radius-5" id="country">
                                                        <option value="1">India</option>
                                                        <option value="2">United States</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-20">
                                                    <label className="checkout__input--label mb-10" htmlFor="input6">Postal Code <span className="checkout__input--label__star">*</span></label>
                                                    <input className="checkout__input--field border-radius-5" placeholder="Postal code" id="input6" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Shipping to different address - omitted for brevity */}

                                        <div className="checkout__checkbox">
                                            <input className="checkout__checkbox--input" id="checkbox2" type="checkbox" />
                                            <span className="checkout__checkbox--checkmark"></span>
                                            <label className="checkout__checkbox--label" htmlFor="checkbox2">Save this information for next time</label>
                                        </div>
                                    </div>

                                    <div className="order-notes mb-20">
                                        <label className="checkout__input--label mb-10" htmlFor="order">Order Notes <span className="checkout__input--label__star">*</span></label>
                                        <textarea className="checkout__notes--textarea__field border-radius-5" id="order" placeholder="Notes about your order, e.g. special notes for delivery." spellCheck="false"></textarea>
                                    </div>

                                    <div className="checkout__content--step__footer d-flex align-items-center">
                                        <a className="continue__shipping--btn primary__btn border-radius-5" href="/">Continue To Shipping</a>
                                        <a className="previous__link--content" href="/cart">Return to cart</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <aside className="checkout__sidebar sidebar border-radius-10">
                                <h2 className="checkout__order--summary__title text-center mb-15">Your Order Summary</h2>

                                {/* Order Items Table - For brevity, use one map with sample data */}
                                <div className="cart__table checkout__product--table">
                                    <table className="cart__table--inner">
                                        <tbody className="cart__table--body">
                                            {[1, 2, 3].map(i => (
                                                <tr key={i} className="cart__table--body__items">
                                                    <td className="cart__table--body__list">
                                                        <div className="product__image two d-flex align-items-center">
                                                            <div className="product__thumbnail border-radius-5">
                                                                <a className="display-block" href="/product-details">
                                                                    <img className="display-block border-radius-5" src={`/assets/img/product/small-product/product${i}.webp`} alt="cart-product" />
                                                                </a>
                                                                <span className="product__thumbnail--quantity">1</span>
                                                            </div>
                                                            <div className="product__description">
                                                                <h4 className="product__description--name"><a href="/product-details">Product {i}</a></h4>
                                                                <span className="product__description--variant">COLOR: Blue</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart__table--body__list">
                                                        <span className="cart__price">£{65 + i * 5}.00</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="checkout__discount--code">
                                    <form className="d-flex">
                                        <input className="checkout__discount--code__input--field border-radius-5" placeholder="Gift card or discount code" type="text" />
                                        <button className="checkout__discount--code__btn primary__btn border-radius-5" type="submit">Apply</button>
                                    </form>
                                </div>

                                <div className="checkout__total">
                                    <table className="checkout__total--table">
                                        <tbody className="checkout__total--body">
                                            <tr className="checkout__total--items">
                                                <td className="checkout__total--title text-left">Subtotal</td>
                                                <td className="checkout__total--amount text-right">$860.00</td>
                                            </tr>
                                            <tr className="checkout__total--items">
                                                <td className="checkout__total--title text-left">Shipping</td>
                                                <td className="checkout__total--calculated__text text-right">Calculated at next step</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="checkout__total--footer">
                                            <tr className="checkout__total--footer__items">
                                                <td className="checkout__total--footer__title checkout__total--footer__list text-left">Total</td>
                                                <td className="checkout__total--footer__amount checkout__total--footer__list text-right">$860.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="payment__history mb-30">
                                    <h3 className="payment__history--title mb-20">Payment</h3>
                                    <ul className="payment__history--inner d-flex">
                                        {['Credit Card', 'Bank Transfer', 'Paypal'].map(method => (
                                            <li key={method} className="payment__history--list">
                                                <button className="payment__history--link primary__btn" type="submit">{method}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="checkout__now--btn primary__btn" type="submit">Checkout Now</button>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <FeatureSection />
        </main>
    );
};

export default Checkout;