import logo from "../../assets/logo.svg";
import "./Nav.scss";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();
  const shapeRef4 = useRef();

  const navTl = useRef(null);

  useEffect(() => {
    navTl.current = gsap.timeline({
      paused: true,
    });

    navTl.current.to(".nav-list", {
      display: "flex",
    });

    navTl.current.to(shapeRef1.current, {
      width: "25vw",
      opacity: 1,
    });
    navTl.current.to(
      shapeRef2.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%",
    );
    navTl.current.to(
      shapeRef3.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%",
    );
    navTl.current.to(
      shapeRef4.current,
      {
        width: "25vw",
        opacity: 1,
      },
      "<0%",
    );

    navTl.current.to(
      "#link-1",
      {
        x: 0,
        opacity: 1,
      },
      "<100%",
    );
    navTl.current.to(
      "#link-2",
      {
        x: 0,
        opacity: 1,
      },
      "<25%",
    );
    navTl.current.to(
      "#link-3",
      {
        x: 0,
        opacity: 1,
      },
      "<25%",
    );
    navTl.current.to(
      "#link-4",
      {
        x: 0,
        opacity: 1,
      },
      "<25%",
    );
  }, []);

  return (
    <>
      <div className="nav">
        <img className="nav__logo" src={logo} alt="logo" />

        <p className="nav-btn">
          {open ? (
            <span
              onClick={() => {
                navTl.current.reverse();
                setOpen((open) => false);
              }}
            >
              close
            </span>
          ) : (
            <span
              className="nav__btn"
              onClick={() => {
                navTl.current.play();
                setOpen((open) => true);
              }}
            >
              open
            </span>
          )}
        </p>

        <div ref={shapeRef1} className="nav__shape nav__shape-1"></div>
        <div ref={shapeRef2} className="nav__shape nav__shape-2"></div>
        <div ref={shapeRef3} className="nav__shape nav__shape-3"></div>
        <div ref={shapeRef4} className="nav__shape nav__shape-4"></div>
      </div>

      <ul className="nav-list">
        <li id="link-1">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li id="link-2">
          <NavLink className="nav-link" to="/aa">
            About
          </NavLink>
        </li>
        <li id="link-3">
          <a className="nav-link" href="#a">
            Portfolio
          </a>{" "}
        </li>
        <li id="link-4">
          <a className="nav-link" href="#a">
            Contact
          </a>{" "}
        </li>
      </ul>
    </>
  );
};

export default Nav;
