import React, {useState} from 'react';
// import {ApiUserLogin} from "../../api/api";
import {Link, useNavigate} from "react-router-dom";
import './Auth.css';

export default function Login(): JSX.Element {

    const [login, setLogin] = useState(() => {
        return {
            login: "",
            password: ""
        }
    });

    const navigate = useNavigate();

    const baseUrl = `http://moodtracker.test`;

    const changeInputLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    const loginUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const name: string = login.login;
        const password: string = login.password;
        ApiUserLogin(name, password);
    };

    const ApiUserLogin = (login: string, password: string) => {

        fetch(
            `${baseUrl}/jwt/login`
            , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": login,
                    "password": password,
                })
            }).then((response) => response.json())
            .then((data) => {
                    if (!data.message) {
                        console.log(data.data);
                        localStorage.setItem('tokenAuth', data.data.token);
                        navigate("/");
                    } else {
                        //ошибка
                        console.log(data)
                    }
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-container-content">
                    <div className="auth-container-content-form">
                        <h1 className="content-form__title">Вход</h1>
                        <div className="my-5 content-form__form">
                            <form>
                                <div className="mb-3 form-group content-form__form-input">
                                    <input
                                        name="login"
                                        type="text"
                                        className="form-control"
                                        value={login.login}
                                        onChange={changeInputLogin}
                                        placeholder="Имя"
                                    />
                                </div>
                                <div className="mb-4 form-group content-form__form-input">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Пароль"
                                        name="password"
                                        value={login.password}
                                        onChange={changeInputLogin}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        {/*<label><input name="remember" type="checkbox" value="1">Оставаться в системе</label>*/}
                                    </div>
                                </div>
                                <button onClick={loginUser}
                                        type="submit"
                                        className="btn btn-default content-form__form-button">
                                    Войти
                                </button>
                            </form>
                            <div className="mt-3 content-form__form-button-reg">
                                <Link to='/auth/registration'>Регистрация</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}