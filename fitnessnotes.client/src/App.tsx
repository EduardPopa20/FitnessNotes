import { Routes, Route, Link } from "react-router-dom"

import routes from "./pages/routes/routes";

import Login from "./pages/Login/Login";

import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    );
}

export default App;