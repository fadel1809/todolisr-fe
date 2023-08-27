import Logo from "./Logo";
import Wrapper from "../assets/wrappers/navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <nav className="bg-white py-1 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">
              <Logo />
            </div>
            <ul className="flex space-x-4">
              <li>
                <button className="bg-merah-logo hover:bg-hover-tema text-white py-1 px-6 rounded-full">
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default Navbar;
