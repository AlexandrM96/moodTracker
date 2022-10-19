import React from 'react';
import './Evaluation.css';
import MoodButton from "../MoodButton/MoodButton";

export default function Evaluation(): JSX.Element {

    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="evaluation">
            <div className="my-5 pt-2 col-xl-8">
                <h1 className="my-5">Выберите настроение</h1>
                <div className='d-flex'>
                    {array && array.map(number =>
                        <div className='me-2' key={number}>
                            <MoodButton children={number}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
