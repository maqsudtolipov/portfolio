import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './Hero.scss';
import heroImg from '../../assets/image.png';

const Hero = () => {
  // refs
  const imgRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1.5,
    });
    const cursor = document.querySelector('.cursor');

    // animate image
    tl.fromTo(
      imgRef.current,
      {
        opacity: 0,
        y: '0%',
      },
      {
        duration: 1,
        opacity: 1,
        y: '-50%',
      }
    );

    // animate text
    tl.fromTo(
      titleRef.current,
      {
        y: '50%',
        skewY: 10,
        opacity: 0,
      },
      {
        y: '0%',
        skewY: 0,
        opacity: 1,
      }, 
      '<50%'
    );

    // cursor animate
    titleRef.current.addEventListener('mouseover', () =>
      cursor.classList.add('c-title')
    );
    titleRef.current.addEventListener('mouseout', () =>
      cursor.classList.remove('c-title')
    );
  }, []);

  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1 ref={titleRef} className='hero-title'>
          FULL STACK DEV spends his days building tools that help make the Internet a better place for everyone 🌍
        </h1>
        <img ref={imgRef} className='hero-img' src={heroImg} alt='' />
      </div>
    </div>
  );
};

export default Hero;
