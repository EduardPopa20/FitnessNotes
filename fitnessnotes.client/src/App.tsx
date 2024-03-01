import { Routes, Route } from "react-router-dom"

import { ThemeProvider } from "@emotion/react";
import theme from "./theme"


import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import './scss/App.scss';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;