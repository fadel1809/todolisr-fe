/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  LandingLayout,
  Error,
  LandingPage,
  Login,
  Register,
  DashboardLayout,
  Tomorrow,
  Upcoming,
  Today,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Today />,
          },
          {
            path: "tomorrow",
            element: <Tomorrow />,
          },
          {
            path: "upcoming-events",
            element: <Upcoming />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
