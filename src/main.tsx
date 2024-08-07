import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";
import Profile from "./pages/Profile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<ModalContextProvider>
				<AuthContextProvider>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<Home />} />
							<Route path="profile" element={<Profile />} />
						</Route>
					</Routes>
				</AuthContextProvider>
			</ModalContextProvider>
		</Router>
	</React.StrictMode>
);
