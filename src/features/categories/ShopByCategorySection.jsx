import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from './categoriesApi';
import Preloader from '../../components/Preloader';
import { useEffect } from 'react';

const ShopByCategorySection = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  //  if (isLoading) {
  //   return (
  //     <Preloader />
  //   );
  // }
  // if (isError) return <p>Failed to load categories</p>;

    // useEffect(() => {        
    //       window.initializeThemeScripts();
    // }, []);

  const categories = data?.data || [];

  return (
    <section className="shop__collection--section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Shop By Category</h2>
        </div>

        <div className="shop__collection--column5 swiper">
          <div className="swiper-wrapper">
            {categories.map((category) => (
              <div className="swiper-slide" key={category.id}>
                <div className="shop__collection--card text-center">
                  <Link className="shop__collection--link" to={`/shop/category/${category.id}`}>
                    <img
                      className="shop__collection--img"
                      src={`${process.env.REACT_APP_API_BASE_URL}${category.icon_image}`}
                      alt={category.name}
                    />
                    <h3 className="shop__collection--title">{category.name}</h3>
                    <span className="shop__collection--subtitle">{category.item_count} Items</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper__nav--btn swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          <div className="swiper__nav--btn swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
