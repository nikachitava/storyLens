import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";
import { ModalContextProvider } from "./context/ModalContext.tsx";
import Profile from "./pages/Profile.tsx";
import MyPost from "./pages/MyPost.tsx";
import PageNotFound from "./components/PageNotFound.tsx";
import ProtectedRoute from "./utils/ProtectedRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<ModalContextProvider>
				<AuthContextProvider>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<Home />} />
							<Route path="profile" element={<Profile />} />
							<Route
								path="mypost/:postID"
								element={<ProtectedRoute element={MyPost} />}
							/>
							<Route path="*" element={<PageNotFound />} />
						</Route>
					</Routes>
				</AuthContextProvider>
			</ModalContextProvider>
		</Router>
	</React.StrictMode>
);
