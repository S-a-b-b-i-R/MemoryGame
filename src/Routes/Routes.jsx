import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                // element: <Home />,
            },
            {
                path: "/login",
                // element: <Login />,
            },
        ],
    },
]);

export default Routes;
