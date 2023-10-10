import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Registration from "../pages/registration/Registration";
import LogIn from "../pages/login/LogIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToy from "../pages/AllToy/AllToy";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "./../pages/addToy/AddToy";
import MyToys from "./../pages/myToys/MyToys";
import UpdateToyData from "./../pages/MyToys/UpdateToyData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/alltoys",
        element: <AllToy></AllToy>,
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateToyData></UpdateToyData>,
      },
    ],
  },
]);

export default router;
