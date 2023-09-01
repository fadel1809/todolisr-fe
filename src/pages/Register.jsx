/* eslint-disable react/no-unescaped-entities */
import { Logo } from "../components";
import { Form, Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/register";
const Register = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <body className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-xl w-96">
          <Logo
            onClick={() => {
              navigate("/");
            }}
          />
          <h1 className="text-2xl text-text-landing font-semibold mb-4">
            Register
          </h1>
          <Form method="post">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md shadow hover:shadow-lg focus:outline-merah-logo"
                placeholder="enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md shadow hover:shadow-lg focus:outline-merah-logo"
                placeholder="enter your last name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md shadow hover:shadow-lg focus:outline-merah-logo"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md shadow hover:shadow-lg focus:outline-merah-logo"
                placeholder="enter your password"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-merah-logo text-white p-2 rounded-md hover:bg-hover-tema"
              >
                Submit
              </button>
              <p className="text-sm text-gray-600 mt-1">
                already have account?{" "}
                <Link
                  className="text-merah-logo hover:text-hover-tema register-btn"
                  to="/login"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
          </Form>
        </div>
      </body>
    </Wrapper>
  );
};
export default Register;
