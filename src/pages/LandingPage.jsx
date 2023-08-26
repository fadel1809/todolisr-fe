/* eslint-disable no-unused-vars */
import { Navbar } from "../components";

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}

      <div className="container mt-5 mx-auto grid grid-cols-2 grid-flow-col">
        <div className="bg-white py-20 ">
          <h1 className="text-4xl font-semibold mb-4">
            Organize your tasks with Todoist
          </h1>
          <p className="text-lg mb-8">
            Get things done efficiently and stay organized.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
        <div></div>
      </div>

      {/* Feature Section */}
      {/* ... */}

      {/* Testimonials Section */}
      {/* ... */}

      {/* CTA Section */}
      {/* ... */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          &copy; 2023 Todoist. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
