import logo from '../../assets/logo.svg';
import './Nav.scss';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();
  const shapeRef4 = useRef();

  // nav links
  const linkRef1 = useRef();

  // useEffect(() => {
  //   const tl = gsap.timeline({});
  //   console.log(linkRef1.current);
  //   tl.to('link-1', {
  //     left: '20rem',
  //     delay: 1,
  //     background: 'red',
  //   });
  // }, [open]);

  // useEffect(() => {
  //   const tl = gsap.timeline({});
  //   console.log('enter')
  //
  //   if (open === true) {
  //     console.log('shange')
  //
  //   tl.to(shapeRef.current, {
  //     width: '25rem',
  //   })
  //   }
  // }, [])

  const animateMenu = () => {
    const tl = gsap.timeline({});

    tl.to(shapeRef1.current, {
      width: open ? '0vw' : '25vw',
      opacity: open ? 0 : 1,
    });
    tl.to(
      shapeRef2.current,
      {
        width: open ? '0vw' : '25vw',
        opacity: open ? 0 : 1,
      },
      '<0%'
    );
    tl.to(
      shapeRef3.current,
      {
        width: open ? '0vw' : '25vw',
        opacity: open ? 0 : 1,
      },
      '<0%'
    );
    tl.to(
      shapeRef4.current,
      {
        width: open ? '0vw' : '25vw',
        opacity: open ? 0 : 1,
      },
      '<0%'
    );

    tl.to(
      '#link-1',
      {
        x: 0,
      },
      '<100%'
    );
    tl.to(
      '#link-2',
      {
        x: 0,
      },
      '<25%'
    );
    tl.to(
      '#link-3',
      {
        x: 0,
      },
      '<25%'
    );
    tl.to(
      '#link-4',
      {
        x: 0,
      },
      '<25%'
    );
  };

  return (
    <>
      <div className='nav'>
        <img className='nav__logo' src={logo} alt='logo' />
        <span
          className='nav__btn'
          onClick={() => {
            setOpen((value) => !value);
            animateMenu();
          }}
        >
          MENU
        </span>

        <div ref={shapeRef1} className='nav__shape nav__shape-1'></div>
        <div ref={shapeRef2} className='nav__shape nav__shape-2'></div>
        <div ref={shapeRef3} className='nav__shape nav__shape-3'></div>
        <div ref={shapeRef4} className='nav__shape nav__shape-4'></div>
      </div>

      <ul className={`nav-list ${!open && 'nav--closed'}`}>
        <li id='link-1'>
          <a className='nav-link' href='#a'>
            Home
          </a>{' '}
        </li>
        <li id='link-2'>
          <a className='nav-link' href='#a'>
            About
          </a>{' '}
        </li>
        <li id='link-3'>
          <a className='nav-link' href='#a'>
            Portfolio
          </a>{' '}
        </li>
        <li id='link-4'>
          <a className='nav-link' href='#a'>
            Contact
          </a>{' '}
        </li>
      </ul>
    </>
  );
};

export default Nav;
