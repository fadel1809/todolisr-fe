/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import Links from "../utils/Links";
import { useEffect, useState } from "react";
const NavLinks = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isBig = screenWidth > 750;
  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            className={
              isBig
                ? "flex nav-link pt-3 text-sm text-merah-logo hover:text-hover-tema focus:text-hover-tema  transition ease-in delay-50  hover:scale-110 focus:-translate-y-1  duration-200 "
                : "flex nav-link pt-5 pl-2 text-2xl text-merah-logo hover:text-hover-tema focus:text-hover-tema  transition ease-in-out delay-50  hover:scale-110 focus:-translate-y-1  duration-200 "
            }
            key={text}
            to={path}
          >
            <span className="icon "> {icon} </span> {isBig ? text : ""}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
