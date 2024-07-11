/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import LoadingSpinner from "../../components/shared/loadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
	// const { user, isLoading } = useContext(AuthContext);
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(false)
	const user = null;

	if (isLoading) {
		// return <LoadingSpinner />;
		return <div>
			loading...
		</div>
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
