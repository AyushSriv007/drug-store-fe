import React from 'react';

const Footer = () => {
  return (
    <footer className="footer__section footer__bg">
      <div className="container">
        <div className="main__footer section--padding">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="footer__widget">
                <h2 className="footer__widget--title d-none d-sm-u-block">
                  About Us
                  <button className="footer__widget--button" aria-label="footer widget button"></button>
                  <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                  </svg>
                </h2>
                <div className="footer__widget--inner">
                  <div className="footer__logo">
                    <a className="footer__logo--link" href="/">
                      <img className="footer__logo--img" src="assets/img/logo/logo.png" alt="logo-img" />
                    </a>
                  </div>
                  <p className="footer__widget--desc">
                    Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional
                  </p>
                  <ul className="footer__widget--info">
                    <li className="footer__widget--info_list">
                      <span className="footer__widget--info__text">Brooklyn, New York, United States</span>
                    </li>
                    <li className="footer__widget--info_list">
                      <a className="footer__widget--info__text" href="tel:+1234567898">(+123) 456-7898</a>
                    </li>
                    <li className="footer__widget--info_list">
                      <a className="footer__widget--info__text" href="mailto:example@example.com">example@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer__widget">
                <h2 className="footer__widget--title">
                  Our Offer
                  <button className="footer__widget--button" aria-label="footer widget button"></button>
                  <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                  </svg>
                </h2>
                <ul className="footer__widget--menu footer__widget--inner">
                  <li><a className="footer__widget--menu__text" href="/contact">Contact Us</a></li>
                  <li><a className="footer__widget--menu__text" href="/about">About Us</a></li>
                  <li><a className="footer__widget--menu__text" href="/wishlist">Wishlist</a></li>
                  <li><a className="footer__widget--menu__text" href="/privacy-policy">Privacy Policy</a></li>
                  <li><a className="footer__widget--menu__text" href="/faq">Frequently</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-5">
              <div className="footer__widget">
                <h2 className="footer__widget--title">
                  Quick Links
                  <button className="footer__widget--button" aria-label="footer widget button"></button>
                  <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                  </svg>
                </h2>
                <ul className="footer__widget--menu footer__widget--inner">
                  <li><a className="footer__widget--menu__text" href="/my-account">My Account</a></li>
                  <li><a className="footer__widget--menu__text" href="/cart">Shopping Cart</a></li>
                  <li><a className="footer__widget--menu__text" href="/login">Login</a></li>
                  <li><a className="footer__widget--menu__text" href="/register">Register</a></li>
                  <li><a className="footer__widget--menu__text" href="/checkout">Checkout</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="footer__widget">
                <h2 className="footer__widget--title">
                  Newsletter
                  <button className="footer__widget--button" aria-label="footer widget button"></button>
                  <svg className="footer__widget--title__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394" viewBox="0 0 10.355 6.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                  </svg>
                </h2>
                <div className="footer__widget--inner">
                  <p className="footer__widget--desc">Subscribe to our weekly Newsletter and receive updates via email.</p>
                  <form className="newsletter__subscribe--form" action="#">
                    <input className="newsletter__subscribe--input" placeholder=" Enter Your Email" type="text" />
                    <button className="newsletter__subscribe--button" type="submit">Subscribe</button>
                  </form>
                  <ul className="social__share footer__social d-flex">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom--inenr d-flex justify-content-between align-items-center">
            <p className="copyright__content mb-0">
              <span className="text__secondary">© 2022</span> Powered by <a className="copyright__content--link" target="_blank" href="https://themeforest.net/search/hooktheme" rel="noopener noreferrer">Hooktheme</a>. All Rights Reserved.
            </p>
            <div className="footer__payment">
              <img src="assets/img/icon/payment-img.webp" alt="payment-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
