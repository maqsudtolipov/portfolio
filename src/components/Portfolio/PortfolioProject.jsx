import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './PortfolioProject.scss';

const PortfolioProject = (props) => {
  // refs
  const imgRef = useRef();

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // animate cursor
    imgRef.current.addEventListener('mouseover', () => {
      cursor.innerHTML = 'View project';
      cursor.classList.add('c-project');

    });
    imgRef.current.addEventListener('mouseout', () => {
      cursor.innerHTML = '';
      cursor.classList.remove('c-project');
    });
  }, []);

  return (
    <div className='portfolio-project'>
      <p>{props.title}</p>
      <img ref={imgRef} className='portfolio-project__img' src={props.img} alt='' />
    </div>
  );
};

export default PortfolioProject;