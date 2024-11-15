import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Login";
import { Explorer } from "../../pages/Explorer";
import { HomePage } from "../../pages/HomePage";

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/explorer',
		element: <Explorer />,
	},
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <h1>Page Not Found (404)</h1>,
		errorElement: <h1>Page Not Found (404)</h1>,
	},
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;