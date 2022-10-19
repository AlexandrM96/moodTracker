import React from 'react';
import './AverageTodayMood.css';

export default function AverageTodayMood(): JSX.Element {

    return (
        <div id="average-today-mood" className="col-xl-2 me-5">
            <div className="main-page__container-data__title">Среднее настроение по офису на сегодня</div>
            <div className="main-page__container-data__block">
                {/*{% if avg_today_mood %}*/}
                {/*{{avg_today_mood}}*/}
                {/*{% else %}*/}
                {/*0*/}
                {/*{% endif %}*/}
                1
            </div>
        </div>
    );
}
