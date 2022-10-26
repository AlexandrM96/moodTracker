import React, {useEffect, useState} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import MainPage from "./components/MainPage/MainPage";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {increment} from './store/slice';
import {ApiArray} from "./interface";
import {RootState} from './store/store';

export default function App(): JSX.Element {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    const login: boolean = useSelector((state: RootState) => state.counter.login_page);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const baseUrl: string = `http://moodtracker.test`;

    const token: string | null = localStorage.getItem('tokenAuth');

    useEffect(() => {
        // !token && navigate("/", {replace: true});
        fetch(
            `${baseUrl}/api/general`
            , {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => response.json())
            .then((data: ApiArray) => {
                    !data.status ? setIsLogin(false) : setIsLogin(true);
                    !isLogin ? navigate("/") : navigate("/auth/login");
                    console.log(data)
                    dispatch(increment(data));
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [token])

    return (
        <div className="App">
            <Routes>
                <Route path='/'
                       element={(() => {
                           if (!login) {
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

