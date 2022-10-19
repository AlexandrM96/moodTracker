import React, {JSXElementConstructor} from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import MainPage from "./components/MainPage/MainPage";
import './App.css';

export default function App(): JSX.Element {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/auth/registration" element={<Registration/>}/>
            </Routes>
        </div>
    );
}

