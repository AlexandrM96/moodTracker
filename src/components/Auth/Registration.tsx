import React from 'react';

import './Auth.css';

export default function Registration(): JSX.Element {
    const bootstrap = require('bootstrap');
    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-container-content">
                    <div className="auth-container-content-form">
                        <h1 className="content-form__title">Регистрация</h1>
                        <div className="my-5 content-form__form">
                            <div className="mb-3 form-group content-form__form-input">
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    id="registerName"
                                    placeholder="Имя"/>
                            </div>
                            <div className="mb-3 form-group content-form__form-input">
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="registerEmail"
                                    placeholder="Email"/>
                            </div>
                            <div className="mb-3 form-group content-form__form-input">
                                <input
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    id="registerUsername"
                                    placeholder="Имя"/>
                            </div>
                            <div className="mb-5 form-group content-form__form-input">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="registerPassword"
                                    placeholder="Пароль"/>
                            </div>
                            <button type="submit" className="btn btn-default content-form__form-button">Регистрация
                            </button>
                            <div className="mt-3 content-form__form-button-reg">
                                <a href="/">Я уже зарегестрирован</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}