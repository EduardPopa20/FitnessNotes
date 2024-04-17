import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

import { CircularProgress } from "@mui/material";

import AlertLayout from "./AlertLayout";
import { useAuth } from "../hooks/useAuth";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export const AuthSessionContext = createContext<any>(undefined);

function AuthLayout({ children }: { children: ReactNode }) {
    const [session, setSession] = useState({});
    const navigate = useNavigate();

    const user = localStorage.getItem("user") as any | null;
    const token = localStorage.getItem("token");
    useEffect(() => {
        (async () => {
            if (!token || user.exp <= new Date()) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
            }
            else {
                const { Name, Email, Role, Weight, Height } = JSON.parse(user);
                setSession({
                    name: Name,
                    email: Email,
                    role: Role,
                    weight: Weight,
                    height: Height
                })
            }
        })()
    }, []);

    return (
        <AuthSessionContext.Provider value={session}>
            <AlertLayout>
                <div className="app-container">
                    <Navbar />
                    <div className="main-content">
                        <Sidebar />
                        <div className="page-content">
                            {session ? children : <CircularProgress />}
                        </div>
                    </div>
                    <footer>Footer content goes here</footer>
                </div>
            </AlertLayout>
        </AuthSessionContext.Provider >
    );
}

export default AuthLayout;
