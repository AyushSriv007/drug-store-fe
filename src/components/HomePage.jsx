import React from 'react';
import { Link } from 'react-router-dom';
import ShopByCategorySection from './ShopByCategorySection';
import ImageWithTextSection from './ImageWithTextSection';
import TrendingProductSection from './TrendingProductSection';
import VideoBannerSection from './VideoBannerSection';
import BeforeAfterSection from './BeforeAfterSection';
import DealsOfTheWeek from './DealsOfTheWeek';
import BannerFullwidthSection from './BannerFullwidthSection';
import SkinAdviceSection from './SkinAdviceSection';
import BannerSection from './BannerSection';
import TestimonialSection from './TestimonialSection';
import FeatureSection from './FeatureSection';
const HomePage = () => {
  return (
    <main className="main__content_wrapper">
    {/* Start slider section */}
    <section className="hero__slider--section">
      <div className="hero__slider--activation swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">
                        Beauty is Whatever <br /> Brings Perfect
                      </h2>
                      <p className="slider__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat.
                      </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018..." fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider1-layer.png" alt="slider-img" />
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">
                        Beauty is Whatever <br /> Brings Perfect
                      </h2>
                      <p className="slider__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat.
                      </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018..." fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider2-layer.png" alt="slider-img" />
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">
                        Beauty is Whatever <br /> Brings Perfect
                      </h2>
                      <p className="slider__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat.
                      </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018..." fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider3-layer.png" alt="slider-img" />
              </div>
            </div>
          </div>

        </div>
        <div className="slider__pagination swiper-pagination"></div>
      </div>
    </section>
    <ShopByCategorySection />
    <ImageWithTextSection />
    <TrendingProductSection />
    <VideoBannerSection />
    <BeforeAfterSection />
    <DealsOfTheWeek />
    <BannerFullwidthSection />
    <SkinAdviceSection />
    <BannerSection />
    <TestimonialSection />
    <FeatureSection />
  </main>
  );
};

export default HomePage;
