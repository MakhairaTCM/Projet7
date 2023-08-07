
import React, { useState } from 'react';
import './collapse.scss';
import chevron from "../../assets/images/Vector.svg"


const Collapse = ({ content, header }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive((prevIsActive) => !prevIsActive);
};

  return (
    <div className={`accordion ${isActive ? 'active' : ''}`}>
      <div className="accordion-item-header" onClick={toggleAccordion}>
        {header}
        <img src={chevron} alt="" />
      </div>
      
      <div className="accordion-item-body" style={{ maxHeight: isActive ? '1000px' : 0 }}>
        <div className="accordion-item-body-content">{content}</div>
      </div>
      
    </div>
    
  );
};

export default Collapse;
