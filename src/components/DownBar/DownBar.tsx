import React from 'react';
import './DownBar.css';

export default function DownBar(): JSX.Element {

    return (
        <div className="down-bar">
            {/*{% if user %}*/}
            {/*<div class=" p-3 main-page__container-data">*/}
            {/*    {% for mood, user in users_mood %}*/}
            {/*    <button class="me-2 main-page__container-data-element__button-two">*/}
            {/*        {{ mood }}*/}
            {/*    </button>*/}
            {/*    {{ user }}*/}
            {/*    {% endfor %}*/}
            {/*</div>*/}
            {/*{% else %}*/}
            {/*Войдите, чтобы увидеть, у кого какое сегодня настроение*/}
            {/*{% endif %}*/}
        </div>
    );
}
