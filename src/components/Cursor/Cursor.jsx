import { useRef, useEffect } from 'react';

import './Cursor.scss';

const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      cursorRef.current.style.top = e.clientY + 'px';
      cursorRef.current.style.left = e.clientX + 'px';
    });
  }, []);

  return <div ref={cursorRef} className='cursor'></div>;
};

export default Cursor;
