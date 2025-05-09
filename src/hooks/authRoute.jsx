import { Navigate } from "react-router-dom"
import { useAuth } from "./authContext"
import Loading from "../Component/loading/Loading";

const AuthRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <Loading/>

    if (!user) {
        return <Navigate to={'/signin'} replace/>
    }

    return children
};

export default AuthRoute