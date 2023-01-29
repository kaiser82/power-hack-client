// const { createBrowserRouter } = require("react-router-dom")

import { createBrowserRouter } from "react-router-dom"
import Home from "../../Home/Home/Home"
import Main from "../../Layout/Main"
import Billing from "../../Pages/Billing/Billing"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/SignUp/SignUp"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/billing',
                element: <Billing></Billing>
            },
        ]
    }
])

export default router;