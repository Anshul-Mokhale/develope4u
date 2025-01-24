// PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

interface PrivateRouteProps {
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const isAuthenticated = useSelector((state: RootState) => (state.auth as { isAuthenticated: boolean }).isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" />;
    }

    return <>{children || <Outlet />}</>;
};

export default PrivateRoute;
