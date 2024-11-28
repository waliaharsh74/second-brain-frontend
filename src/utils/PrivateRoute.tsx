import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = () => {
    const token = localStorage.getItem('secondBrainToken');
    return token ? true : false;
};

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{element}</>;
};

export default PrivateRoute;
