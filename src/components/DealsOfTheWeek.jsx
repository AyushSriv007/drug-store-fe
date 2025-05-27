import { Link } from 'react-router-dom';

const DealsOfTheWeek = () => {
  return (
    <section className="product__section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Deals of the week!</h2>
        </div>
        <div className="product__section--border position-relative">
          <div
            className="product__section--countdown d-flex justify-content-center"
            data-countdown="Sep 30, 2025 00:00:00"
          ></div>
          <div className="product__section--inner product__swiper--column4 padding swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <article className="product__card">
                  <div className="product__card--thumbnail">
                    <Link
                      className="product__card--thumbnail__link display-block"
                      to="/product-details"
                    >
                      <img
                        className="product__card--thumbnail__img product__primary--img"
                        src="assets/img/product/main-product/product7.webp"
                        alt="product-img"
                      />
                      <img
                        className="product__card--thumbnail__img product__secondary--img"
                        src="assets/img/product/main-product/product8.webp"
                        alt="product-img"
                      />
                    </Link>
                    <span className="product__badge">-14%</span>
                    <ul className="product__card--action">
                      <li className="product__card--action__list">
                        <a
                          className="product__card--action__btn"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#examplemodal"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="product__card--action__btn--svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="visually-hidden">Quick View</span>
                        </a>
                      </li>
                      <li className="product__card--action__list">
                        <Link
                          className="product__card--action__btn"
                          title="Compare"
                          to="/compare"
                        >
                          {/* SVG omitted for brevity */}
                          <span className="visually-hidden">Compare</span>
                        </Link>
                      </li>
                      <li className="product__card--action__list">
                        <Link
                          className="product__card--action__btn"
                          title="Wishlist"
                          to="/wishlist"
                        >
                          {/* SVG omitted for brevity */}
                          <span className="visually-hidden">Wishlist</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="product__add--to__card">
                      <Link
                        className="product__card--btn"
                        title="Add To Cart"
                        to="/cart"
                      >
                        Add to Cart
                        {/* SVG omitted for brevity */}
                      </Link>
                    </div>
                  </div>
                  <div className="product__card--content text-center">
                    <ul className="rating product__card--rating d-flex justify-content-center">
                      <li className="rating__list">
                        <span className="rating__icon">★</span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">★</span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">★</span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">★</span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">★</span>
                      </li>
                      <li>
                        <span className="rating__review--text">(126) Review</span>
                      </li>
                    </ul>
                    <h3 className="product__card--title">
                      <Link to="/product-details">Z 7-8mm Freshwater Button is</Link>
                    </h3>
                    <div className="product__card--price">
                      <span className="current__price">$239.52</span>
                      <span className="old__price">$362.00</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="swiper__nav--btn swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" -chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            <div className="swiper__nav--btn swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" -chevron-left"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheWeek;
