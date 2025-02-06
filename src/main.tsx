import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Accueil from "./Page/Accueil/Accueil.tsx";
import Galery from "./Page/Galery/Galery.tsx";
import HeaderHome from "./componants/HeaderHome/HeaderHome.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/galery",
				element: <Galery />,
			},
			{
				path: "/HeaderHome",
				element: <HeaderHome />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
