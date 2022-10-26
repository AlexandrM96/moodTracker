import React, {useState} from 'react';
// import {ApiUserRegistration} from "../../api/api";
import {Link, useNavigate} from "react-router-dom";
import './Auth.css';

export default function Registration(): JSX.Element {

    const [registration, setRegistration] = useState(() => {
        return {
            login: "",
            eMail: "",
            password: "",
            password_confirmation: ""
        }
    });

    const navigate = useNavigate();

    const baseUrl = `http://moodtracker.test`;

    const changeInputRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        setRegistration(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    const registrationUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const name: string = registration.login;
        const password: string = registration.password;
        const eMail: string = registration.eMail;
        const passwordConfirmation: string = registration.password_confirmation;
        ApiUserRegistration(name, eMail, password, passwordConfirmation);
    };

    const ApiUserRegistration = (login: string, email: string, password: string, passwordConfirmation: string) => {

        fetch(
            `${baseUrl}/jwt/register`
            , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": login,
                    "email": email,
                    "password": password,
                    "password_confirmation": passwordConfirmation
                })
            }).then((response) => response.json())
            .then((data) => {
                    if (!data.message) {
                        //ошибка
                        console.log(data);
                    } else {
                        console.log(data.code);
                        ApiUserRegistrationActivate(data.code);
                    }
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const ApiUserRegistrationActivate = (code: string) => {

        fetch(
            `${baseUrl}/jwt/activate`
            , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "code": code,
                })
            }).then((response) => response.json())
            .then((data) => {
                    if (!data.message) {
                        console.log('dddd', data);
                        localStorage.setItem('tokenAuth', data.data.token);
                        navigate("/");
                    } else {
                        console.log(data);
                    }
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });
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
                                <div className="mb-3 form-group content-form__form-input">
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
                                <div className="mb-5 form-group content-form__form-input">
                                    <input
                                        name="password_confirmation"
                                        type="password"
                                        className="form-control"
                                        id="registerPasswordConfirmation"
                                        placeholder="Повторите пароль"
                                        value={registration.password_confirmation}
                                        onChange={changeInputRegistration}
                                    />
                                </div>
                                <button onClick={registrationUser}
                                        className="btn btn-default content-form__form-button">
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