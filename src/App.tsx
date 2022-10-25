import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import MainPage from "./components/MainPage/MainPage";
import {useDispatch} from "react-redux";
import {increment} from './store/slice';
import {ApiArray} from "./interface";

export default function App(): JSX.Element {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const baseUrl: string = `http://moodtracker.test`;

    const token: string | null = localStorage.getItem('tokenAuth');

    useEffect(() => {
        fetch(
            `${baseUrl}/api/general`
            , {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => response.json())
            .then((data) => {
                    !data.status ? setIsLogin(false) : setIsLogin(true);
                    !isLogin ? navigate("/") : navigate("/auth/login");
                    dispatch(increment(data));
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path='/'
                       element={(() => {
                           if (!isLogin) {
                               return <Navigate to={`/auth/login`}/>
                           } else {
                               return <MainPage/>
                           }
                       })()}
                />
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/auth/registration" element={<Registration/>}/>
            </Routes>
        </div>
    );
}

