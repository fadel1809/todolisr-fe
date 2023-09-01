/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Wrapper } from "../assets/wrappers/userButton";
const UserButton = () => {
  const user = { name: "fadel" };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Wrapper>
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex px-9 py-2 bg-merah-logo text-white text-sm rounded-full shadow-md hover:bg-hover-tema "
        >
          <IconContext.Provider value={{ className: "user-circle" }}>
            <FaUserCircle />
          </IconContext.Provider>
          <p className="user-name">{user.name} </p>
          <IconContext.Provider value={{ className: "panah-bawah" }}>
            <FaCaretDown />
          </IconContext.Provider>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-0 px-2  hover:bg-gray-100">
              <li>
                <button
                  type="button"
                  href="#"
                  className="block px-2 py-2 text-gray-800  hover:bg-gray-100 justify-end"
                >
                  <p className="text-merah-logo">Logout User</p>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default UserButton;
