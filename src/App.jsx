import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./laout.scss";
import Homepage from "./routes/homepage/Homepage";
import Layout from "./routes/layout/Layout";
import Listpage from "./routes/listpage/Listpage";
import Singlepage from "./routes/singlepage/Singlepage";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <Singlepage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
