import React, {useState} from 'react';
import './Auth.css';
import {ApiUserLogin} from "../../api/api";
import {Link} from "react-router-dom";

export default function Login(): JSX.Element {

    const [login, setLogin] = useState(() => {
        return {
            login: "",
            password: ""
        }
    });

    const changeInputLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    const loginUser = () => {
        const name: string = login.login;
        const password: string = login.password;
        ApiUserLogin(name, password);
    };

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