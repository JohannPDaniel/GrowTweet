// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Login";
import { Explorer } from "../../pages/Explorer";

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Explorer />,
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