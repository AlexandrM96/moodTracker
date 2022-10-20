import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {increment} from './store/slice';
import {ApiArray} from "./interface";
import './App.css';

export default function App(): JSX.Element {

    const dispatch = useDispatch();

    async function api() {
        const baseUrl: string = `http://moodtracker.test`;
        const response = await fetch(`${baseUrl}/api`);
        const item: ApiArray = await response.json();
        console.log(item)
        dispatch(increment(item));
    }

    api();

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

