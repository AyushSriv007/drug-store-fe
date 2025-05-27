import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header__section">
      <div className="header__topbar bg__primary">
        <div className="container">
          <div className="header__topbar--inner text-center">
            <p className="header__info--text text-white">FREE SHIPPING FOR ORDERS OVER $59 !</p>
          </div>
        </div>
      </div>

      <div className="main__header position__relative header__sticky">
        <div className="container">
          <div className="main__header--inner d-flex justify-content-between align-items-center">
            <div className="offcanvas__header--menu__open">
              <button className="offcanvas__header--menu__open--btn" data-offcanvas>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512">
                  <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352" />
                </svg>
                <span className="visually-hidden">Offcanvas Menu Open</span>
              </button>
            </div>
            <div className="main__logo">
              <h1 className="main__logo--title">
                <Link className="main__logo--link" to="/">
                  <img className="main__logo--img" src="/assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </h1>
            </div>

            <div className="header__menu d-none d-lg-block">
              <nav className="header__menu--navigation">
                <ul className="header__menu--wrapper d-flex">
                  <li className="header__menu--items">
                    <Link className="header__menu--link active" to="/">
                      Home
                      <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                        <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7" />
                      </svg>
                    </Link>
                    <ul className="header__sub--menu">
                      <li className="header__sub--menu__items"><Link to="/">Home - Beauty Cosmetic</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-2">Home - Cosmetic Spa</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-3">Home - Jewelry Store</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-4">Home - Modern Jewelry</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-5">Home - Look book</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-6">Home - Beauty Jewelers</Link></li>
                      <li className="header__sub--menu__items"><Link to="/index-7">Home - Parallax</Link></li>
                    </ul>
                  </li>

                  <li className="header__menu--items mega__menu--items">
                    <Link className="header__menu--link" to="/shop">
                      Shop
                      <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                        <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7" />
                      </svg>
                    </Link>
                    <div className="header__mega--menu__wrapper">
                      <ul className="header__mega--menu d-flex">
                        <li className="header__sub--menu__items"><Link to="/index-3">Shop 1</Link></li>
                      </ul>
                    </div>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link" to="/shop">Accesories</Link>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link" to="#">
                      Pages
                      <svg className="menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12" height="7.41" viewBox="0 0 12 7.41">
                        <path d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z" transform="translate(-6 -8.59)" fill="currentColor" opacity="0.7" />
                      </svg>
                    </Link>
                    <ul className="header__sub--menu">
                      <li className="header__sub--menu__items"><Link to="/about">About Us</Link></li>
                      <li className="header__sub--menu__items"><Link to="/contact">Contact Us</Link></li>
                      <li className="header__sub--menu__items"><Link to="/cart">Cart Page</Link></li>
                      <li className="header__sub--menu__items"><Link to="/portfolio">Portfolio Page</Link></li>
                      <li className="header__sub--menu__items"><Link to="/wishlist">Wishlist Page</Link></li>
                      <li className="header__sub--menu__items"><Link to="/privacy-policy">Privacy Policy</Link></li>
                      <li className="header__sub--menu__items"><Link to="/login">Login Page</Link></li>
                      <li className="header__sub--menu__items"><Link to="/404">Error Page</Link></li>
                    </ul>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__account">
              <ul className="header__account--wrapper d-flex align-items-center">
                <li className="header__account--items header__account--search__items d-none d-lg-block">
                  <a className="header__account--btn search__open--btn" href="#" onClick={(e) => e.preventDefault()} data-offcanvas>
                    <span className="header__account--btn__icon">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16L11 11M12.6667 6.83333C12.6667 7.59938 12.5158 8.35792 12.2226 9.06565C11.9295 9.77339 11.4998 10.4164 10.9581 10.9581C10.4164 11.4998 9.77339 11.9295 9.06565 12.2226C8.35792 12.5158 7.59938 12.6667 6.83333 12.6667C6.06729 12.6667 5.30875 12.5158 4.60101 12.2226C3.89328 11.9295 3.25022 11.4998 2.70854 10.9581C2.16687 10.4164 1.73719 9.77339 1.44404 9.06565C1.15088 8.35792 1 7.59938 1 6.83333C1 5.28624 1.61458 3.80251 2.70854 2.70854C3.80251 1.61458 5.28624 1 6.83333 1C8.38043 1 9.86416 1.61458 10.9581 2.70854C12.0521 3.80251 12.6667 5.28624 12.6667 6.83333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="visually-hidden">Search</span>
                  </a>
                </li>

                <li className="header__account--items">
                  <Link className="header__account--btn d-sm-2-none" to="/wishlist">
                    <span className="header__account--btn__icon">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.09836 2.28681C1.75014 2.69477 1.47391 3.1791 1.28545 3.71213C1.097 4.24516 1 4.81646 1 5.39341C1 5.97036 1.097 6.54167 1.28545 7.0747C1.47391 7.60773 1.75014 8.09206 2.09836 8.50002L8.50001 16L14.9016 8.50002C15.6049 7.6761 16 6.55862 16 5.39341C16 4.22821 15.6049 3.11073 14.9016 2.28681C14.1984 1.46289 13.2446 1.00001 12.25 1.00001C11.2554 1.00001 10.3016 1.46289 9.59833 2.28681L8.50001 3.57358L7.40168 2.28681C7.05346 1.87884 6.64006 1.55522 6.18509 1.33443C5.73011 1.11364 5.24248 1 4.75002 1C4.25756 1 3.76992 1.11364 3.31495 1.33443C2.85998 1.55522 2.44658 1.87884 2.09836 2.28681V2.28681Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="visually-hidden">Wishlist</span>
                  </Link>
                </li>

                <li className="header__account--items">
                  <Link className="header__account--btn d-sm-2-none" to="/my-account">
                    <span className="header__account--btn__icon">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16V14.3333C16 13.4493 15.6049 12.6014 14.9016 11.9763C14.1984 11.3512 13.2446 11 12.25 11H4.75C3.75544 11 2.80161 11.3512 2.09835 11.9763C1.39509 12.6014 1 13.4493 1 14.3333V16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.5 7.66667C10.5711 7.66667 12.25 6.17428 12.25 4.33333C12.25 2.49238 10.5711 1 8.5 1C6.42893 1 4.75 2.49238 4.75 4.33333C4.75 6.17428 6.42893 7.66667 8.5 7.66667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="visually-hidden">My Account</span>
                  </Link>
                </li>

                <li className="header__account--items header__minicart--items">
                  <a className="header__account--btn minicart__open--btn" href="javascript:void(0)" data-offcanvas>
                    <span className="header__account--btn__icon">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 7.66667V4.33333C12.25 3.44928 11.8549 2.60143 11.1517 1.97631C10.4484 1.35119 9.49456 1 8.5 1C7.50544 1 6.55161 1.35119 5.84835 1.97631C5.14509 2.60143 4.75 3.44928 4.75 4.33333V7.66667M1.9375 6H15.0625L16 16H1L1.9375 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="items__count">2</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="predictive__search--box">
        <div className="predictive__search--box__inner">
          <h2 className="predictive__search--title">Search Products</h2>
          <form className="predictive__search--form" action="#">
            <label>
              <input
                className="predictive__search--input"
                placeholder="Search Here"
                type="text"
              />
            </label>
            <button
              className="predictive__search--button text-white"
              aria-label="search button"
              type="submit"
            >
              <svg
                className="product__items--action__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="30.51"
                height="25.443"
                viewBox="0 0 512 512"
              >
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </button>
          </form>
        </div>
        <button
          className="predictive__search--close__btn"
          aria-label="search close"
          data-offcanvas
        >
          <svg
            className="predictive__search--close__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="40.51"
            height="30.443"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
      </div>

    </header>
  );
};

export default Header;
