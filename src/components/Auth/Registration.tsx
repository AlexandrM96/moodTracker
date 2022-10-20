import React, {useState} from 'react';
import {ApiUserRegistration} from "../../api/api";
import {Link} from "react-router-dom";
import './Auth.css';

export default function Registration(): JSX.Element {

    const [registration, setRegistration] = useState(() => {
        return {
            login: "",
            eMail: "",
            password: ""
        }
    });

    const changeInputRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setRegistration(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    const registrationUser = () => {
        const name: string = registration.login;
        const password: string = registration.password;
        const eMail: string = registration.eMail;
        ApiUserRegistration(name, eMail, password);
    };

    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-container-content">
                    <div className="auth-container-content-form">
                        <h1 className="content-form__title">Регистрация</h1>
                        <div className="my-5 content-form__form">
                            <form>
                                <div className="mb-3 form-group content-form__form-input">
                                    <input
                                        name="login"
                                        type="text"
                                        className="form-control"
                                        id="registerName"
                                        placeholder="Имя"
                                        value={registration.login}
                                        onChange={changeInputRegistration}
                                    />
                                </div>
                                <div className="mb-3 form-group content-form__form-input">
                                    <input
                                        name="eMail"
                                        type="email"
                                        className="form-control"
                                        id="registerEmail"
                                        placeholder="Email"
                                        value={registration.eMail}
                                        onChange={changeInputRegistration}
                                    />
                                </div>
                                <div className="mb-5 form-group content-form__form-input">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="registerPassword"
                                        placeholder="Пароль"
                                        value={registration.password}
                                        onChange={changeInputRegistration}
                                    />
                                </div>
                                <button onClick={registrationUser}
                                        type="submit" className="btn btn-default content-form__form-button">
                                    Регистрация
                                </button>
                            </form>
                            <div className="mt-3 content-form__form-button-reg">
                                <Link to="/auth/login">Я уже зарегестрирован</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}