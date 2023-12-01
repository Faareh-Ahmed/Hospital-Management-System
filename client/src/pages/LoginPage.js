import React from 'react';
import Login from '../components/Login';

// Original LoginPage component
export default function LoginPage() {
    return (
        <>
            <Login />

        </>
    );
}

// Updated LoginPage component with role prop
export function LoginPageWithRole({ role }) {
    return (
        <>
            <Login role={role} />
        </>
    );
}
