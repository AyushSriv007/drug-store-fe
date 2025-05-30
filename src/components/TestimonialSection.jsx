import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="testimonial__section testimonial__bg section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">What Clients Are Saying</h2>
        </div>
        <div className="testimonial__section--inner testimonial__swiper--activation swiper">
          <div className="swiper-wrapper">
            {/* Repeat testimonial slides as needed */}
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      {Array(5).fill().map((_, idx) => (
                        <li key={idx} className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      {Array(5).fill().map((_, idx) => (
                        <li key={idx} className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      {Array(5).fill().map((_, idx) => (
                        <li key={idx} className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      {Array(5).fill().map((_, idx) => (
                        <li key={idx} className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>

            {/* Duplicate the above block for each testimonial, changing names/images accordingly */}
          </div>
          <div className="testimonial__pagination swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
