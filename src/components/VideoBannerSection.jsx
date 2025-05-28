import { Link } from 'react-router-dom';

const VideoBannerSection = () => {
  return (
    <section className="video__banner--section position-relative section--padding pb-0">
      <img className="video__banner--section__thumbnail" style={{width: '100%'}} src="assets/img/banner/banner-fullwidth10.png" alt="img" />
      <div className="video__banner--wrapper">
        <div className="container">
          <div className="video__banner--inner d-flex align-items-end">
            <div className="video__banner--box position-relative">
              <img className="video__banner--box__thumbnail" src="assets/img/banner/banner3.webp" alt="banner-img" />
              <div className="bideo__play">
                <a
                  className="bideo__play--icon glightbox"
                  href="https://vimeo.com/115041822"
                  data-gallery="video"
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 9.13398C17.1667 9.51888 17.1667 10.4811 16.5 10.866L1.5 19.5263C0.833335 19.9112 9.70611e-07 19.4301 1.00426e-06 18.6603L1.76136e-06 1.33975C1.79501e-06 0.569945 0.833335 0.0888201 1.5 0.47372L16.5 9.13398Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="visually-hidden">Video Play</span>
                </a>
              </div>
            </div>
            <div className="video__banner--content">
              <h2 className="video__banner--content__title">
                Beauty products that really work
              </h2>
              <p className="video__banner--content__desc">
                Our formulations have proven efficacy, contain organic ingredients only and are 100% cruelty free
              </p>
              <Link className="video__banner--content__btn primary__btn" to="/shop.html">
                SKINCARE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBannerSection;
