import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './Hero.scss';
import heroImg from '../../assets/image.png';

const Hero = () => {
  // refs
  const imgRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

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
        opacity: 0,
        y: '10%',
      },
      {
        duration: 1,
        opacity: 1,
        y: '0%',
      }
    );
  }, []);

  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1 ref={titleRef} className='hero-title'>
          I'm Maqsud, a MERN stack developer based in Tashkent.{' '}
          <span className='underline'>Available</span> for freeance &
          collaborations.
        </h1>
        <img ref={imgRef} className='hero-img' src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
