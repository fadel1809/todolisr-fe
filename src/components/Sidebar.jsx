/* eslint-disable no-unused-vars */
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/sidebar";
import { useState, useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const Sidebar = () => {
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
  return (
    <Wrapper>
      <div
        className={
          screenWidth > 750
            ? "container sidebar-container bg-gray-100"
            : "container sidebar-container bg-gray-100 w-10"
        }
      >
        <div
          className={
            screenWidth > 750 ? "content pt-5 px-5 " : "content pt-0 px-0"
          }
        >
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
