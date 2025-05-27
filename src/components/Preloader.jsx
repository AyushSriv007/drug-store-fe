import React from 'react';
const Preloader = () => {
  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {'LOADING'.split('').map((char, index) => (
              <span key={index} data-text-preloader={char} className="letters-loading">
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default Preloader;
