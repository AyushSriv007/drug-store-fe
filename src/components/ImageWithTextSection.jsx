import { Link } from 'react-router-dom';

const ImageWithTextSection = () => {
  return (
    <section className="image__width--text__section position-relative">
      <div className="container">
        <div className="image__width--text__inner d-flex position-relative">
          <div className="image__width--text__thumbnail position-relative">
            <img src="assets/img/banner/banner1.webp" alt="image" />
            <div className="image__width--text">
              <h2 className="image__width--text__title">Face Your Skin With Us</h2>
              <p className="image__width--text__desc">
                Kidlues ispum maruwes cnsectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="image__width--text__footer">
                <Link className="image__width--text__link" to="/shop">
                  Shop Now
                  <svg
                    width="9"
                    height="12"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7.96317 7.96317L1 14.9263"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
                <a
                  className="image__width--text__link glightbox"
                  href="https://vimeo.com/115041822"
                  data-gallery="video"
                >
                  Play Video
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9.75"
                      fill="#F7EEDD"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path d="M15 10L7.5 14.3301L7.5 5.66987L15 10Z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="image__width--text__thumbnail thumbnail2">
            <img src="assets/img/banner/banner2.png" alt="image" />
          </div>
        </div>
      </div>
      <img
        className="section__shape--img"
        src="assets/img/other/shape-img1.webp"
        alt="shape-img"
      />
      <img
        className="section__shape--img two"
        src="assets/img/other/shape-img2.webp"
        alt="shape-img"
      />
    </section>
  );
};

export default ImageWithTextSection;
