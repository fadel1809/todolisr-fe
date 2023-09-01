/* eslint-disable no-unused-vars */
import Logo from "./Logo";
import { Wrapper } from "../assets/wrappers/NavbarLogin";
import UserButton from "./UserButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <nav className="bg-white py-1 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">
              <Logo />
            </div>
            <UserButton />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
