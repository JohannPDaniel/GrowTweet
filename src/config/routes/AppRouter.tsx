// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <h1>Page Not Found (404)</h1>
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;