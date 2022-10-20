import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import './Graphics.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Graphics(): JSX.Element {

    const [flagGraphics, setFlagGraphics] = useState<string>('month');

    const mounth: number[] = useSelector((state: RootState) => state.counter.avg_month);

    const week: number[] = useSelector((state: RootState) => state.counter.avg_week);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
            pointRadius: 0,
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 10,
                    grid: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        },
    };

    const labels: string[] = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '31'
    ];

    const data = {
        labels,
        datasets: [
            {
                // label: 'Dataset 2',
                data: flagGraphics === 'month' ? mounth : week,
                borderColor: '#369AFC',
                backgroundColor: '#369AFC',
            },
        ],
    };

    return (
        <div className=" d-flex ps-5 ms-5 grafik">
            <div className="graphics-aside__title">Настроение 1-10</div>
            <div>
                <div className='d-flex justify-content-between'>
                    <div className="graphics-title">График настроения</div>
                    <div className="graphics-container-buttons">
                        <button onClick={() => setFlagGraphics('week')} className='mx-2'>Неделя</button>
                        <button onClick={() => setFlagGraphics('month')} className='mx-2'>Месяц</button>
                    </div>
                </div>
                <div className='graphics-container'>
                    <Line height={257} width={745} options={options} data={data}/>
                </div>
            </div>
        </div>
    );
}
