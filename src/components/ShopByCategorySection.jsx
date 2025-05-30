import { Link } from 'react-router-dom';

const ShopByCategorySection = () => {
  return (
    <section className="shop__collection--section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Shop By Category</h2>
        </div>
        <div className="shop__collection--column5 swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection1.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection2.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection3.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection4.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection5.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link" to="/shop">
                  <img
                    className="shop__collection--img"
                    src="assets/img/collection/collection2.webp"
                    alt="icon-img"
                  />
                  <h3 className="shop__collection--title">Vitamins & Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
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
    </section>
  );
};

export default ShopByCategorySection;