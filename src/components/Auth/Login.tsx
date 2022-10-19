import React from 'react';
import './Auth.css';

export default function Login(): JSX.Element {
    return (
        <div className="auth">
            <div className="auth-container">
                <div className="auth-container-content">
                    <div className="auth-container-content-form">
                        <h1 className="content-form__title">Вход</h1>
                        <div className="my-5 content-form__form">

                            <div className="mb-3 form-group content-form__form-input">
                                <input
                                    name="login"
                                    type="text"
                                    className="form-control"
                                    id="userSigninLogin"
                                    placeholder="Имя"
                                />
                            </div>
                            <div className="mb-5 form-group content-form__form-input">
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="userSigninPassword"
                                    placeholder="Пароль"
                                />
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    {/*<label><input name="remember" type="checkbox" value="1">Оставаться в системе</label>*/}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-default content-form__form-button">Войти</button>
                            <div className="mt-3 content-form__form-button-reg">
                                <a href="{{ 'registration'|page() }}">Регистрация</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}