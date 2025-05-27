import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <section className="banner__section section--padding pt-0">
      <div className="container">
        <div className="row mb--n30">
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="banner__box border-radius-5 position-relative">
              <Link className="display-block" to="/shop">
                <img
                  className="banner__box--thumbnail border-radius-5"
                  src="assets/img/banner/banner7.webp"
                  alt="banner-img"
                />
                <div className="banner__box--content">
                  <h2 className="banner__box--content__title">Beauty Box</h2>
                  <p className="banner__box--content__desc">
                    Freshwater pearl necklace and earrings
                  </p>
                  <span className="banner__box--content__btn primary__btn">EXPLORE</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="banner__box border-radius-5 position-relative">
              <Link className="display-block" to="/shop">
                <img
                  className="banner__box--thumbnail border-radius-5"
                  src="assets/img/banner/banner8.webp"
                  alt="banner-img"
                />
                <div className="banner__box--content">
                  <h2 className="banner__box--content__title">Organic Serium</h2>
                  <p className="banner__box--content__desc">
                    Freshwater pearl necklace and
                  </p>
                  <span className="banner__box--content__btn primary__btn style2">EXPLORE</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
