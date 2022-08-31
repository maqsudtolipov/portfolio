import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Heading.scss';
gsap.registerPlugin(ScrollTrigger);

const Heading = (props) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'center bottom-=100px',
        markers: true,
      },
    });
    tl.fromTo(
      titleRef.current,
      {
        y: 100,
        duration: 1000,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className='heading'>
      <p ref={titleRef} className='heading-title'>
        {props.children}
      </p>
    </div>
  );
};

export default Heading;
