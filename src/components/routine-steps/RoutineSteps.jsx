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
    if (type === '10') navigate('/collections/10-step-korean-skin-care-routine-sets');
  };

  return (
    <div className={`routine-section-container ${hoverType === '5' ? 'hover-5' : hoverType === '10' ? 'hover-10' : ''}`}>
      <div className="routine-headline">
        Get started with our curated Korean Skincare Routine Sets!
      </div>

      <div className="routine-steps-images-container">
        <BottlesSVG className="step-bottles-container" />
      </div>

      <div className="routine-steps-links-container">
        <span
          className="routine-step-link"
          onMouseEnter={() => handleMouseEnter('5')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('5')}
        >
          5 Step
        </span>
        <span
          className="routine-step-link"
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
