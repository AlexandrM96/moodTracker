import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import './AverageTodayMood.css';

export default function AverageTodayMood(): JSX.Element {

    const avgTodayMood: number = useSelector((state: RootState) => state.counter.avg_today);

    return (
        <div id="average-today-mood" className="col-xl-2 me-5">
            <div className="main-page__container-data__title">Среднее настроение по офису на сегодня</div>
            <div className="main-page__container-data__block">
                {avgTodayMood}
            </div>
        </div>
    );
}
