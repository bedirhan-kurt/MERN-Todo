// src/auth/PrivateRoute.tsx
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Loading...
            </h4>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}
