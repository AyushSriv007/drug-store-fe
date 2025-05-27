import { Link } from 'react-router-dom';

const TrendingProductSection = () => {
  return (
    <section className="product__section section--padding ">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">TRENDING PRODUCT</h2>
        </div>
        <div className="product__section--inner">
          <div className="row mb--n30">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
              <article className="product__card">
                <div className="product__card--thumbnail">
                  <Link className="product__card--thumbnail__link display-block" to="/product-details">
                    <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product1.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product2.webp" alt="product-img" />
                  </Link>
                  <span className="product__badge">-14%</span>
                  <ul className="product__card--action">
                    <li className="product__card--action__list">
                      <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                        <svg className="product__card--action__btn--svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Quick View</span>
                      </a>
                    </li>
                    <li className="product__card--action__list">
                      <Link className="product__card--action__btn" title="Compare" to="/compare">
                        <svg className="product__card--action__btn--svg" width="17" height="17" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Compare</span>
                      </Link>
                    </li>
                    <li className="product__card--action__list">
                      <Link className="product__card--action__btn" title="Wishlist" to="/wishlist">
                        <svg className="product__card--action__btn--svg" width="18" height="18" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375...Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Wishlist</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="product__add--to__card">
                    <Link className="product__card--btn" title="Add To Card" to="/cart">
                      Add to Cart
                      <svg width="17" height="15" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562...Z" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="product__card--content text-center">
                  <ul className="rating product__card--rating d-flex justify-content-center">
                    {[...Array(5)].map((_, idx) => (
                      <li className="rating__list" key={idx}>
                        <span className="rating__icon">
                          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125...Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                    ))}
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
          <div className="product__load--more text-center">
            <Link className="load__more--btn primary__btn" to="/shop">Load More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductSection;
