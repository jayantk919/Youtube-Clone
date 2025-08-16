import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet, useLocation } from "react-router";
import ScrollToTop from "../components/ScrollToTop"; 
import TopNav from "../components/TopNav";
import LeftNav from "../components/LeftNav";
import Watch from "../components/Watch";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <Outlet /> 
    </>
  );
};

const YTrouting = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  
      children: [
        {
          index: true,
          element: <LeftNav />,
        },
        {
          path: "watch/:id",
          element: <Watch />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default YTrouting;
