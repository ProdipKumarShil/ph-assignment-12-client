import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/HomeLayout/Home/Home";
import HomePage from "../Layout/HomeLayout/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import TrainerPage from "../pages/TrainerPage/TrainerPage";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout/DashboardLayout";
import DashboardProfile from "../pages/DashboardProfile/DashboardProfile";
import ManagePeople from "../pages/ManagePeople/ManagePeople";
import EnrolledClass from "../pages/EnrolledClass/EnrolledClass";
import ErrorPage from "../shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/signin',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/classes',
        element: <ClassesPage></ClassesPage>
      },
      {
        path: '/trainer',
        element: <TrainerPage></TrainerPage>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/profile',
        element: <DashboardProfile></DashboardProfile>
      },
      {
        path: '/dashboard/enrolled',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: '/dashboard/manage',
        element: <ManagePeople></ManagePeople>
      }
    ]
  }
])

export default router