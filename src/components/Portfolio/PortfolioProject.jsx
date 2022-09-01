import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './PortfolioProject.scss';
gsap.registerPlugin(ScrollTrigger);

const PortfolioProject = (props) => {
  // refs
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef === null) return;
    const cursor = document.querySelector('.cursor');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        toggleActions: 'play none none none',
        start: 'top bottom-=100px',
        end: 'bottom top+=100px',
        scrub: true,
      },
    });
    // anmate image

    if (props.id % 2 === 0) {
      tl.fromTo(
        imgRef.current,
        {
          x: -100,
          duration: 1,
          opacity: 0.5,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    } else {
      tl.fromTo(
        imgRef.current,
        {
          x: 100,
          duration: 1,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    }

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
      <img
        ref={imgRef}
        className='portfolio-project__img'
        src={props.img}
        alt=''
      />{' '}
      <div className='portfolio-project__content'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>{' '}
      </div>
    </div>
  );
};

export default PortfolioProject;
