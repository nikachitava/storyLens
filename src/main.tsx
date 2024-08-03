import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);
