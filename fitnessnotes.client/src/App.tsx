import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme"

import { AuthContext } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Homepage from "./pages/Homepage/Homepage";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import './scss/App.scss';

import CustomNomenclatorPage from "./pages/AdminNomenclators/CustomNomenclatorPage";

function App() {
    useEffect(() => {
        sessionStorage.setItem("user", "admin");
    }, [])
    const { user, login, logout, setUser } = useAuth();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <ThemeProvider theme={theme}>
                <div className="app-container">
                    <Navbar />
                    <div className="main-content">
                        <Sidebar />
                        <div className="page-content">
                            <Routes>
                                <Route
                                    path="/login"
                                    element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />} />
                                <Route
                                    path="/homepage"
                                    element={<Homepage />} />
                                <Route
                                    path="/roles"
                                    element={<CustomNomenclatorPage key={"roles"} name="Roles" />} />
                                <Route
                                    path="/food-units"
                                    element={<CustomNomenclatorPage key={"food-measurement-units"} name="FoodMeasurementUnits" />} />
                                <Route
                                    path="/default-exercises"
                                    element={<CustomNomenclatorPage key={"default-exercises"} name="DefaultExercises" />} />
                            </Routes>
                        </div>
                    </div>
                    <footer>Footer content goes here</footer>
                </div>
            </ThemeProvider>
        </AuthContext.Provider>
    );

}

export default App;