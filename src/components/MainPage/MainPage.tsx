import React from 'react';
import Evaluation from "../Eveluation/Evaluation";
import AverageTodayMood from "../AverageTodayMood/AverageTodayMood";
import Graphics from "../Graphics/Graphics";
import DownBar from "../DownBar/DownBar";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import './MainPage.css';

export default function MainPage(): JSX.Element {

    const userName: string = useSelector((state: RootState) => state.counter.user.name);

    const navigate = useNavigate();

    const date: string = new Date().toLocaleDateString();

    const outUser = () => {
        localStorage.setItem('tokenAuth', '');
        navigate('/auth/login');
    }

    return (
        <div className=" py-4 main-page">
            <div className="container">
                <div className="row p-4 main-page__container">
                    <div className="d-flex justify-content-between">
                        <div className="col-xl-2 px-2 d-flex align-items-center main-page__container-data">
                            <div className="main-page__data-element__one">
                                Сегодня
                            </div>
                            <div className="mx-2 p-1 main-page__data-element__two">
                                {date}
                            </div>
                        </div>
                        <div className="col-xl-2 d-flex align-items-center">
                            <div className='py-2 px-4 main-page__data-element__name me-2'>
                                {userName}
                            </div>
                            <button onClick={outUser} className="py-2 px-4 main-page__data-element__button">
                                Выйти
                            </button>
                        </div>
                    </div>
                    <div id="evaluation">
                        {/*{% if user %}*/}
                        {/*{% if not already_checked %}*/}
                        {/*{% partial 'evaluation' %}*/}
                        <Evaluation/>
                        {/*{% else %}*/}
                        {/*{% partial 'user-today-mood' %}*/}
                        {/*{% endif %}*/}
                        {/*{% endif %}*/}
                    </div>
                    <div className="d-flex p-4 main-page__container-data">
                        <AverageTodayMood/>
                        <Graphics/>
                    </div>
                    <div className=" d-flex mt-5 p-4 main-page__container-data">
                        <DownBar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

