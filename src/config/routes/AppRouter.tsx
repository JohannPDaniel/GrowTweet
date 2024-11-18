import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Login";
import { Explorer } from "../../pages/Explorer";
import { HomePage } from "../../pages/HomePage";
import { ProfilePage } from "../../pages/ProfilePage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/homepage',
		element: <HomePage />,
	},
	{
		path: '/explorer',
		element: <Explorer />,
	},
	{
		path: '/profilepage',
		element: <ProfilePage />,
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