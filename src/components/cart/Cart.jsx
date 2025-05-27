import React from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import FeatureSection from '../FeatureSection';
import BrandSection from '../about/BrandSection';

const Cart = () => {
    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection />
            <section className="cart__section section--padding">
                <div className="container-fluid">
                    <div className="cart__section--inner">
                        <form action="#">
                            <h2 className="cart__title mb-35">Shopping Cart</h2>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="cart__table">
                                        <table className="cart__table--inner">
                                            <thead className="cart__table--header">
                                                <tr className="cart__table--header__items">
                                                    <th className="cart__table--header__list">Product</th>
                                                    <th className="cart__table--header__list">Price</th>
                                                    <th className="cart__table--header__list">Quantity</th>
                                                    <th className="cart__table--header__list">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody className="cart__table--body">
                                                {[1, 2, 3, 4].map((item, index) => (
                                                    <tr className="cart__table--body__items" key={index}>
                                                        <td className="cart__table--body__list">
                                                            <div className="cart__product d-flex align-items-center">
                                                                <button className="cart__remove--btn" aria-label="search button" type="button">
                                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                                                                        <path d="M 4.707 3.293 L 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707 19.293 3.293 12 10.586 4.707 3.293 z" />
                                                                    </svg>
                                                                </button>
                                                                <div className="cart__thumbnail">
                                                                    <a href="/product-details">
                                                                        <img className="border-radius-5" src={`assets/img/product/small-product/product${item}.webp`} alt="cart-product" />
                                                                    </a>
                                                                </div>
                                                                <div className="cart__content">
                                                                    <h3 className="cart__content--title h4">
                                                                        <a href="/product-details">Product Name {item}</a>
                                                                    </h3>
                                                                    <span className="cart__content--variant">COLOR: Blue</span>
                                                                    <span className="cart__content--variant">WEIGHT: 2 Kg</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart__table--body__list">
                                                            <span className="cart__price">£65.00</span>
                                                        </td>
                                                        <td className="cart__table--body__list">
                                                            <div className="quantity__box">
                                                                <button type="button" className="quantity__value quickview__value--quantity decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                                                <label>
                                                                    <input type="number" className="quantity__number quickview__value--number" value="1" readOnly data-counter />
                                                                </label>
                                                                <button type="button" className="quantity__value quickview__value--quantity increase" aria-label="quantity value" value="Increase Value">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart__table--body__list">
                                                            <span className="cart__price end">£130.00</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="continue__shopping d-flex justify-content-between">
                                            <a className="continue__shopping--link" href="/shop">Continue shopping</a>
                                            <button className="continue__shopping--clear" type="submit">Clear Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cart__summary border-radius-10">
                                        <div className="coupon__code mb-30">
                                            <h3 className="coupon__code--title">Coupon</h3>
                                            <p className="coupon__code--desc">Enter your coupon code if you have one.</p>
                                            <div className="coupon__code--field d-flex">
                                                <label>
                                                    <input className="coupon__code--field__input border-radius-5" placeholder="Coupon code" type="text" />
                                                </label>
                                                <button className="coupon__code--field__btn primary__btn" type="submit">Apply Coupon</button>
                                            </div>
                                        </div>
                                        <div className="cart__note mb-20">
                                            <h3 className="cart__note--title">Note</h3>
                                            <p className="cart__note--desc">Add special instructions for your seller...</p>
                                            <textarea className="cart__note--textarea border-radius-5"></textarea>
                                        </div>
                                        <div className="cart__summary--total mb-20">
                                            <table className="cart__summary--total__table">
                                                <tbody>
                                                    <tr className="cart__summary--total__list">
                                                        <td className="cart__summary--total__title text-left">SUBTOTAL</td>
                                                        <td className="cart__summary--amount text-right">$860.00</td>
                                                    </tr>
                                                    <tr className="cart__summary--total__list">
                                                        <td className="cart__summary--total__title text-left">GRAND TOTAL</td>
                                                        <td className="cart__summary--amount text-right">$860.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart__summary--footer">
                                            <p className="cart__summary--footer__desc">Shipping & taxes calculated at checkout</p>
                                            <ul className="d-flex justify-content-between">
                                                <li>
                                                    <button className="cart__summary--footer__btn primary__btn cart" type="submit">Update Cart</button>
                                                </li>
                                                <li>
                                                    <a className="cart__summary--footer__btn primary__btn checkout" href="/checkout">Check Out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <BrandSection />
            <FeatureSection />
        </main>
    );
};

export default Cart;