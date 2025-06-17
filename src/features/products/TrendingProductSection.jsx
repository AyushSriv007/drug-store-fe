import { Link } from 'react-router-dom';
import { useGetTrendingProductsQuery } from './productsApi';

const TrendingProductSection = () => {
  const { data, isLoading, isError } = useGetTrendingProductsQuery({ trending: 1 });

  const products = data?.data || [];

  if (isLoading) return null;
  if (isError) return <p className="text-danger text-center">Failed to load trending products.</p>;

  return (
    <section className="product__section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">TRENDING PRODUCT</h2>
        </div>

        <div className="product__section--inner">
          <div className="row mb--n30">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
                <article className="product__card">
                  <div className="product__card--thumbnail">
                    <Link to={`/product-details/${product.id}`} className="product__card--thumbnail__link display-block">
                      <img
                        className="product__card--thumbnail__img product__primary--img"
                        src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list?.[0]?.file_name}`}
                        alt={product.name}
                      />
                      {product.image_list?.[1] && (
                        <img
                          className="product__card--thumbnail__img product__secondary--img"
                          src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list[1].file_name}`}
                          alt={product.name}
                        />
                      )}
                    </Link>

                    {product.discounted_percentage > 0 && (
                      <span className="product__badge">-{product.discounted_percentage}%</span>
                    )}

                    <ul className="product__card--action">
                      <li className="product__card--action__list">
                        <a
                          className="product__card--action__btn"
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#examplemodal"
                          href="#!"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M15.7 14.5L11.77 10.56C12.78 9.4 13.33 7.94 13.33 6.43C13.33 2.88 10.34 0 6.66 0C2.99 0 0 2.88 0 6.43C0 9.97 2.99 12.85 6.66 12.85C8.04 12.85 9.36 12.45 10.48 11.69L14.44 15.66C14.61 15.83 14.83 15.92 15.07 15.92C15.29 15.92 15.51 15.84 15.67 15.68C16.02 15.36 16.03 14.83 15.7 14.5ZM6.66 1.68C9.38 1.68 11.59 3.81 11.59 6.43C11.59 9.05 9.38 11.18 6.66 11.18C3.95 11.18 1.74 9.05 1.74 6.43C1.74 3.81 3.95 1.68 6.66 1.68Z" fill="currentColor" />
                          </svg>
                          <span className="visually-hidden">Quick View</span>
                        </a>
                      </li>
                      <li className="product__card--action__list">
                        <a className="product__card--action__btn" title="Compare" href="/compare">
                          <svg width="17" height="17" viewBox="0 0 14 13" fill="none">
                            <path d="M6.89 6.09C6.89 6.48 7.16 6.75 7.55 6.75H10.15C10.72 6.75 11.02 6.07 10.58 5.66L9.84 4.89L12.91 1.83C13.04 1.69 13.04 1.47 12.91 1.36L12.28 0.73C12.17 0.6 11.95 0.6 11.81 0.73L8.75 3.8L7.99 3.06C7.57 2.62 6.89 2.92 6.89 3.5V6.09Z" fill="currentColor" />
                          </svg>
                          <span className="visually-hidden">Compare</span>
                        </a>
                      </li>
                      <li className="product__card--action__list">
                        <a className="product__card--action__btn" title="Wishlist" href="/wishlist">
                          <svg width="18" height="18" viewBox="0 0 16 13" fill="none">
                            <path d="M13.54 1.53C11.95 0.19 9.52 0.38 8.01 1.94C6.48 0.38 4.05 0.19 2.46 1.53C0.41 3.25 0.71 6.07 2.19 7.57L6.98 12.46C7.25 12.74 7.6 12.9 8.01 12.9C8.4 12.9 8.75 12.74 9.03 12.46L13.84 7.57C15.29 6.07 15.59 3.25 13.54 1.53Z" fill="currentColor" />
                          </svg>
                          <span className="visually-hidden">Wishlist</span>
                        </a>
                      </li>
                    </ul>

                    <div className="product__add--to__card">
                      <Link className="product__card--btn" to="/cart">Add to Cart</Link>
                    </div>
                  </div>

                  <div className="product__card--content text-center">
                    <ul className="rating product__card--rating d-flex justify-content-center">
                        <li className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__icon">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                            </svg>
                          </span>
                        </li>
                        <li>
                          <span className="rating__review--text">(126) Review</span>
                        </li>
                      </ul>
                    <h3 className="product__card--title">
                      <Link to={`/product-details/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="product__card--price">
                      <span className="current__price">₹{product.discounted_price}</span>
                      {product.discounted_price !== product.price && (
                        <span className="old__price">₹{product.price}</span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="product__load--more text-center mt-4">
            <Link className="load__more--btn primary__btn" to="/shop">Load More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductSection;
