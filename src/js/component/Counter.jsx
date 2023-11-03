import React from "react";
import Units from './Counter.jsx'
import style from './Counter.module.css';

const Counter = () => {
    return (
        <div className={style.generalBox}>
            <div className={style.centerBox}>
                <div>
                    <h1>Counter App component</h1>
                </div>
            </div>
            <Units />
        </div>
    );
};

export default Counter