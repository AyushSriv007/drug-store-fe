import { useEffect } from 'react';

const BeforeAfterSection = () => {
  useEffect(() => {
    const slider = document.getElementById('slider');
    const divisor = document.getElementById('divisor');

    const moveDivisor = () => {
      if (divisor) {
        divisor.style.width = `${slider.value}%`;
      }
    };

    slider?.addEventListener('input', moveDivisor);

    return () => {
      slider?.removeEventListener('input', moveDivisor);
    };
  }, []);

  return (
    <div className="before__after--section">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Before & After</h2>
        </div>
        <div id="comparison">
          <figure>
            <div id="handle"></div>
            <div id="divisor"></div>
          </figure>
          <input type="range" min="0" max="100" defaultValue="50" id="slider" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
