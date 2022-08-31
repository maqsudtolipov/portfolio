import { useRef } from 'react';

import './Cursor.scss';

const Cursor = () => {
  const cursorRef = useRef();
  document.addEventListener('mousemove', (e) => {
    cursorRef.current.style.top = e.pageY + 'px';
    cursorRef.current.style.left = e.pageX + 'px';
  });

  return <div ref={cursorRef} className='cursor'></div>;
};

export default Cursor;
