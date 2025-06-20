import { useEffect, useState } from 'react';
import { useGetBrandsQuery } from '../../brands/brandsApi';
import { useGetCategoriesQuery } from '../../categories/categoriesApi';
import { fetchBaseQueryPublic } from '../../../services/fetchBaseQueryPublic';

const SidebarCategories = () => {
  const { data, isLoading } = useGetBrandsQuery();
  const { data: categoryRes } = useGetCategoriesQuery();
  const [subCategoryMap, setSubCategoryMap] = useState({});
  const categories = categoryRes?.data || [];
  const brands = data?.data || [];

  useEffect(() => {
    const fetchSubCategories = async () => {
      const query = fetchBaseQueryPublic;
      const map = {};

      await Promise.all(
        categories.map(async (cat) => {
          const result = await query(
            {
              url: 'master/get_sub_categories',
              params: { category_id: cat.id },
            },
            {},
            {}
          );
          map[cat.id] = result?.data?.data || [];
        })
      );

      setSubCategoryMap(map);
    };

    if (categories.length > 0) fetchSubCategories();
  }, [categories]);

  if (isLoading) return <div>Loading Categories...</div>;

  return (
    <div className="col-xl-3 col-lg-4 shop-col-width-lg-4">
      <div className="shop__sidebar--widget widget__area d-none d-lg-block">

        {/* Categories Widget */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Categories</h2>
          <ul className="widget__categories--menu">
            {categories.map((cat) => (
              <li key={cat.id} className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src={cat.icon_image_url}
                    alt={`${cat.name}-img`}
                  />
                  <span className="widget__categories--menu__text">{cat.name}</span>
                  <svg className="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                    <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z" transform="translate(-6 -8.59)" fill="currentColor" />
                  </svg>
                </label>

                <ul className="widget__categories--sub__menu">
                  {(subCategoryMap[cat.id] || []).map((sub) => (
                    <li key={sub.id} className="widget__categories--sub__menu--list">
                      <a className="widget__categories--sub__menu--link d-flex align-items-center" href={`/shop?sub_category=${sub.id}`}>
                        <img
                          className="widget__categories--sub__menu--img"
                          src={sub.icon_image_url}
                          alt={`${sub.name}-img`}
                        />
                        <span className="widget__categories--sub__menu--text">{sub.name}</span>
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
