import { useState } from 'react';

import arrow from '../../assets/arrow.svg';
import './Accordion.scss';

const Accordion = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion ${active ? 'active' : ''}`}>
      <div className='accordion-header' onClick={() => setActive(!active)}>
        <span className='accordion-num'>_1</span>
        <span className='accordion-title'>What I do?</span>
        <div className='accordion-icon'>
          <img src={arrow} />
        </div>
      </div>
      <div className='accordion-content'>
        <p>
          I'm a product designer working on various projects on a wide range of
          clients. My skillset lies on creating branding packages & websites to
          deliver the full online experience for new and also veteran
          businesses.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
