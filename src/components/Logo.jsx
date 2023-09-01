/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Logo = ({ onClick }) => {
  return <img src={logo} alt="jobify" className="logo" onClick={onClick} />;
};
export default Logo;
