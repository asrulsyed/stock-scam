import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { setAuthToken } from "./Middlewares/setAuthTokens";
import FormInput from "./pages/FormInput";
import ConfirmAlert from "./pages/ConfirmAlert";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./components/Contact";
import BlogLayout from "./Layout/BlogLayout";
import TempleBlog from "./components/Blogs/TempleBlog";
import BlogList from "./components/Blogs/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <BlogLayout />,
        children: [
          {
            path: "/blogs",
            element: <BlogList />
          },
          {
            path: "/blogs/:blogId",
            element: <TempleBlog />
          }
        ]
      },
      {
        path: "/formInput",
        element: <FormInput />
      },
      {
        path: "/confirmAlert",
        element: <ConfirmAlert />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/service",
        element: <TermsOfService />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      // {
      //   path:"/confirmAlert1",
      //   element: <ConfirmAlert1 />
      // },
    ],
  },
]);

const App: FC = () => {

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <RouterProvider router={router} />
  );
};

export default App;
