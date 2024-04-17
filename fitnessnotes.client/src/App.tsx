import { Routes, Route } from "react-router-dom"

import { ThemeProvider } from "@emotion/react";
import theme from "./theme"

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Homepage from "./pages/Homepage/Homepage";

import './scss/App.scss';

import CustomNomenclatorPage from "./pages/AdminNomenclators/CustomNomenclatorPage";
import AuthLayout from "./layouts/AuthLayout";
import UserProfile from "./pages/UserProfile/UserProfile";
import Training from "./pages/Training/Training";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />} />
                <Route
                    path="/register"
                    element={<Register />} />

                <Route
                    path="/"
                    element={<AuthLayout><Homepage /></AuthLayout>} />
                <Route
                    path="/profile"
                    element={<AuthLayout><UserProfile /></AuthLayout>}
                />
                <Route
                    path="/roles"
                    element={<AuthLayout><CustomNomenclatorPage key={"roles"} name="Roles" /></AuthLayout>} />
                <Route
                    path="/training"
                    element={<AuthLayout><Training /></AuthLayout>} />
                <Route
                    path="/food-units"
                    element={<AuthLayout><CustomNomenclatorPage key={"food-measurement-units"} name="FoodMeasurementUnits" /></AuthLayout>} />
                <Route
                    path="/default-exercises"
                    element={<AuthLayout><CustomNomenclatorPage key={"default-exercises"} name="DefaultExercises" /></AuthLayout>} />
            </Routes>
        </ThemeProvider >
    );

}

export default App;