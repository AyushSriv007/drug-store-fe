import { useGetBrandsQuery } from '../../brands/brandsApi';

const SidebarCategories = () => {
  const { data, isLoading } = useGetBrandsQuery();
  const brands = data?.data || [];
  return (
    <div className="col-xl-3 col-lg-4 shop-col-width-lg-4">
      <div className="shop__sidebar--widget widget__area d-none d-lg-block">

        {/* Categories Widget */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Categories</h2>
          <ul className="widget__categories--menu">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src={`assets/img/product/small-product/product${index}.webp`}
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    {['Fairness cream', 'Skin Silver', 'Night Serum', 'Cream Oil', 'Skin Cleaner'][index - 1]}
                  </span>
                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor"></path>
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  {[2, 3, 4, 5].map((subIndex) => (
                    <li key={subIndex} className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href="shop.html">
                        <img
                          className="widget__categories--sub__menu--img"
                          src={`assets/img/product/small-product/product${subIndex}.webp`}
                          alt="categories-img"
                        />
                        <span className="widget__categories--sub__menu--text">
                          {['Massage Cream', 'Matte Walnut', 'Bamboo Scrub', 'Castor Oil'][subIndex - 2]}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Dietary Needs */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Dietary Needs</h2>
          <ul className="widget__form--check">
            {['Bath & Body', 'Hair Care', 'Make Up', 'Health Care', 'Styling Products'].map((item, i) => (
              <li className="widget__form--check__list" key={i}>
                <label className="widget__form--check__label" htmlFor={`check${i + 1}`}>{item}</label>
                <input className="widget__form--check__input" id={`check${i + 1}`} type="checkbox" />
                <span className="widget__form--checkmark"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter By Price */}
        <div className="single__widget price__filter widget__bg">
          <h2 className="widget__title h3">Filter By Price</h2>
          <form className="price__filter--form">
            <div className="price__filter--form__inner mb-15 d-flex align-items-center">
              <div className="price__filter--group">
                <label className="price__filter--label" htmlFor="Filter-Price-GTE2">From</label>
                <div className="price__filter--input border-radius-5 d-flex align-items-center">
                  <span className="price__filter--currency">$</span>
                  <input className="price__filter--input__field border-0" id="Filter-Price-GTE2" type="number" placeholder="0" min="0" max="250.00" />
                </div>
              </div>
              <div className="price__divider"><span>-</span></div>
              <div className="price__filter--group">
                <label className="price__filter--label" htmlFor="Filter-Price-LTE2">To</label>
                <div className="price__filter--input border-radius-5 d-flex align-items-center">
                  <span className="price__filter--currency">$</span>
                  <input className="price__filter--input__field border-0" id="Filter-Price-LTE2" type="number" placeholder="250.00" min="0" max="250.00" />
                </div>
              </div>
            </div>
            <button className="primary__btn price__filter--btn" type="submit">Filter</button>
          </form>
        </div>

        {/* Brands */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Brands</h2>
          <ul className="widget__tagcloud">
            {isLoading ? (
              <li className="widget__tagcloud--list">Loading...</li>
            ) : (
              brands?.map((brand, i) => (
                <li className="widget__tagcloud--list" key={i}>
                  <a className="widget__tagcloud--link" href="shop.html">{brand}</a>
                </li>
              ))
            )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SidebarCategories;
