import React from 'react';
import './UserTodayMood.css';

export default function UserTodayMood(): JSX.Element {

    return (
        <div className="col-xl-2 me-5">
            <div className="d-flex">
                <div>
                    <div className="main-page__container-data__title">Ваше настроение сегодня</div>
                    <div className="main-page__container-data__block">
                        {/*{{user_mood}} */}
                    </div>
                    <button className="py-2 my-3 ms-4 px-4 main-page__data-element__button two"
                            data-request="Mood::onRewind"
                            data-request-update="'evaluation': '#evaluation', 'average-today-mood': '#average-today-mood', 'graphics': '#graphics', 'down-bar': '#down-bar'">
                        я передумал
                    </button>
                </div>
                <div className="{{ message|raw is not empty ? 'my-5 p-5  main-page__container-data__par' : '' }}">
                    {/*{{message | raw}}*/}
                </div>
            </div>
        </div>
    );
}
