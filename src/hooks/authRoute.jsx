import { Navigate } from "react-router-dom"
import { useAuth } from "./authContext"

const AuthRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>

    if (!user) {
        return <Navigate to={'/signin'} replace/>
    }

    return children
};

export default AuthRoute