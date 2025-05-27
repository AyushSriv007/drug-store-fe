import React from 'react';
import { Link } from 'react-router-dom';

const BannerFullwidthSection = () => {
  return (
    <section className="banner__fullwidth--section position-relative">
      <img
        className="banner__fullwidth--bg__thumbnail"
        src="assets/img/banner/banner-fullwidth2.webp"
        alt="img"
      />
      <div className="banner__fullwidth--inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="banner__fullwidth--thumbnail">
                <img src="assets/img/banner/banner6.webp" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner__fullwidth--content">
                <h3 className="banner__fullwidth--content__subtitle">SPECIAL OFFER</h3>
                <h2 className="banner__fullwidth--content__title">Set For A Good Time</h2>
                <p className="banner__fullwidth--content__desc">
                  We are committed to offering the finest selection of clean and natural skin care products
                  created by the world’s leading brands that are pioneers in innovation, science, technology,
                  and sustainability.
                </p>
                <Link className="banner__fullwidth--content__btn primary__btn" to="#">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFullwidthSection;
