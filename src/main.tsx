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
import ReadPost from "./pages/ReadPost.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryClient}>
				<ModalContextProvider>
					<AuthContextProvider>
						<Routes>
							<Route path="/" element={<Root />}>
								<Route index element={<Home />} />
								<Route path="profile" element={<Profile />} />
								<Route
									path="mypost/:postID"
									element={
										<ProtectedRoute element={MyPost} />
									}
								/>
								<Route
									path="post/:postID"
									element={<ReadPost />}
								/>
								<Route path="*" element={<PageNotFound />} />
							</Route>
						</Routes>
					</AuthContextProvider>
				</ModalContextProvider>
			</QueryClientProvider>
		</Router>
	</React.StrictMode>
);
