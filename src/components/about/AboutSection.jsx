import React from 'react';

const AboutSection = () => {
  return (
    <section className="about__Section section--padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about__thumbnail padding__left position-relative">
              <img src="assets/img/other/about.webp" alt="img" />
              <div className="about__experience--text text-center">
                <span className="about__experience--years">
                  <span className="about__experience--years__inner">15</span>+
                </span>
                <span className="about__experience--title">YEARS EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about__content padding__left">
              <h3 className="about__content--subtitle">About</h3>
              <h2 className="about__content--title">Curated by color</h2>
              <p className="about__content--desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <a className="about__conten--btn primary__btn" href="about.html">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
