import Logo from "./Logo";
import Wrapper from "../assets/wrappers/navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">
              <Logo />
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
