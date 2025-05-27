import React from 'react';

const ShopByCategory = () => {
  const categories = [
    { title: 'Necklaces', image: 'assets/img/collection/collection7.webp' },
    { title: 'Bracelets', image: 'assets/img/collection/collection8.webp' },
    { title: 'Earrings', image: 'assets/img/collection/collection9.webp' },
    { title: 'Wedding-bridal', image: 'assets/img/collection/collection10.webp' },
    { title: 'Shop Earrings', image: 'assets/img/collection/collection11.webp' },
    { title: 'Necklaces', image: 'assets/img/collection/collection7.webp' },
  ];

  return (
    <section className="shop__collection--section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Shop By Category</h2>
        </div>

        <div className="shop__collection--column5 swiper">
          <div className="swiper-wrapper">
            {categories.map((cat, idx) => (
              <div className="swiper-slide" key={idx}>
                <div className="shop__collection--card text-center">
                  <a className="shop__collection--link" href="shop.html">
                    <img
                      className="shop__collection--img"
                      src={cat.image}
                      alt="icon-img"
                    />
                    <h3 className="shop__collection--title mb-0">{cat.title}</h3>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper__nav--btn swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="swiper__nav--btn swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
