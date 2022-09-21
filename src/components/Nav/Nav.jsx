import logo from '../../assets/logo.svg'
import './Nav.scss'
import {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();
  const shapeRef4 = useRef();

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
    })
    tl.to(shapeRef2.current, {
      width: open ? '0vw' : '25vw',
       opacity: open ? 0 : 1,
    }, '<0%')
    tl.to(shapeRef3.current, {
      width: open ? '0vw' : '25vw',
       opacity: open ? 0 : 1,
    }, '<0%')
    tl.to(shapeRef4.current, {
      width: open ? '0vw' : '25vw',
       opacity: open ? 0 : 1,
    }, '<0%')
  }

  return <div className='nav'>
    <img className='nav__logo' src={logo} alt="logo" />
    <span className='nav__btn' onClick={() => {
      setOpen(value => !value);
      animateMenu();
    }}>MENU</span>

    <div ref={shapeRef1} className='nav__shape nav__shape-1'></div>
    <div ref={shapeRef2} className='nav__shape nav__shape-2'></div>
    <div ref={shapeRef3} className='nav__shape nav__shape-3'></div>
    <div ref={shapeRef4} className='nav__shape nav__shape-4'></div>
    {open &&
    <>

    </>}
  </div>
}

export default Nav;