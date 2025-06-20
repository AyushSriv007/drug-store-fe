import React from 'react';

const FeatureSection = () => {
  return (
    <section className="feature__section section--padding">
      <div className="container">
        <div className="feature__inner d-flex justify-content-between">
          <div className="feature__items d-flex align-items-center">
            <div className="feature__icon">
              <img src="/assets/img/other/feature1.webp" alt="img" />
            </div>
            <div className="feature__content">
              <h2 className="feature__content--title h3">Free Shipping</h2>
              <p className="feature__content--desc">Free shipping over $100</p>
            </div>
          </div>
          <div className="feature__items d-flex align-items-center">
            <div className="feature__icon">
              <img src="/assets/img/other/feature2.webp" alt="img" />
            </div>
            <div className="feature__content">
              <h2 className="feature__content--title h3">Support 24/7</h2>
              <p className="feature__content--desc">Contact us 24 hours a day</p>
            </div>
          </div>
          <div className="feature__items d-flex align-items-center">
            <div className="feature__icon">
              <img src="/assets/img/other/feature3.webp" alt="img" />
            </div>
            <div className="feature__content">
              <h2 className="feature__content--title h3">100% Money Back</h2>
              <p className="feature__content--desc">You have 30 days to Return</p>
            </div>
          </div>
          <div className="feature__items d-flex align-items-center">
            <div className="feature__icon">
              <img src="/assets/img/other/feature4.webp" alt="img" />
            </div>
            <div className="feature__content">
              <h2 className="feature__content--title h3">Payment Secure</h2>
              <p className="feature__content--desc">We ensure secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
