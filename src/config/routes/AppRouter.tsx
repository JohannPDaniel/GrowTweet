import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Login";
import { Explorer } from "../../pages/Explorer";
import { HomePage } from "../../pages/HomePage";
import { ProfilePage } from "../../pages/ProfilePage";
import { SignUp } from "../../pages/SignUp";

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/',
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