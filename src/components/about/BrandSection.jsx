import React from "react";

const BrandSection = () => {
  const logos = [
    "brand-logo1.webp",
    "brand-logo2.webp",
    "brand-logo3.webp",
    "brand-logo4.webp",
    "brand-logo5.webp",
    "brand-logo6.webp",
    "brand-logo7.webp"
  ];

  return (
    <div className="brand__section brand__section-two section--padding">
      <div className="container">
        <div className="brand__section--inner brand__logo--activation swiper">
          <div className="swiper-wrapper">
            {logos.map((logo, idx) => (
              <div className="swiper-slide" key={idx}>
                <div className="brang__logo--items">
                  <img
                    className="brang__logo--img"
                    src={`assets/img/logo/${logo}`}
                    alt="brand-logo"
                  />
                </div>
              </div>
            ))}
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
              className="-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
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
              className="-chevron-left"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
