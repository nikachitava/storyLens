import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	element: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	element: Component,
}) => {
	const { currentUser } = useContext(AuthContext);

	return currentUser ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
