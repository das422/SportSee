import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../pages/Root/Root";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/notFound/NotFound";
import Profile from "../../pages/profile/Profile";

export   const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },

]);
