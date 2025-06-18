import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutineSection.css';
import BottlesSVG from './BottlesSVG';

const RoutineSection = () => {
  const [hoverType, setHoverType] = useState('');
  const navigate = useNavigate();

  const handleMouseEnter = (type) => setHoverType(type);
  const handleMouseLeave = () => setHoverType('');
  const handleClick = (type) => {
    if (type === '5') navigate('/collections/5-step-korean-skincare-sets');
    else if (type === '10') navigate('/collections/10-step-korean-skin-care-routine-sets');
  };

  return (
    <div className={`routine-section-container ${hoverType ? `hover-${hoverType}` : ''}`}>
      <div className="routine-headline">
        Get started with our curated Korean Skincare Routine Sets!
      </div>

      <div className="routine-steps-images-container">
        <div
          className="bottles-hover-area"
          onMouseEnter={() => handleMouseEnter('5')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('5')}
        />
        <div
          className="bottles-hover-area right"
          onMouseEnter={() => handleMouseEnter('10')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('10')}
        />
        <BottlesSVG />
      </div>

      <div className="routine-steps-links-container">
        <span
          className=" banner__fullwidth--content__btn primary__btn routine-step-link"
          onMouseEnter={() => handleMouseEnter('5')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('5')}
        >
          5 Step
        </span>
        <span
          className="banner__fullwidth--content__btn primary__btn routine-step-link"
          onMouseEnter={() => handleMouseEnter('10')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('10')}
        >
          10 Step
        </span>
      </div>
    </div>
  );
};

export default RoutineSection;
