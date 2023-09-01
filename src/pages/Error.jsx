import { Link } from "react-router-dom";
import error from "../assets/images/error.svg";
import { Wrapper } from "../assets/wrappers/error";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={error} alt="error" className="error max-w-full h-auto" />
        <p className="text-text-landing text">
          Maaf, halaman yang di cari tidak ada :(
        </p>
        <Link
          to="/"
          className="bg-merah-logo hover:bg-hover-tema text-white py-2 px-6 rounded-full mt-5"
        >
          Go home
        </Link>
      </div>
    </Wrapper>
  );
};
export default Error;
