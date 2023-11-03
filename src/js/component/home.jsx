import React, { useState, useEffect } from "react";
import style from "./Counter.module.css";

const Units = () => {
    const [unit, setUnit] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [shouldRestart, setShouldRestart] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setUnit((prevUnit) => (prevUnit + 1) % 10000);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        if (shouldRestart) {
            setUnit(0);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning, shouldRestart]);

    const handleStart = () => {
        setIsRunning(true);
        setShouldRestart(false);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleRestart = () => {
        setShouldRestart(true);
        setIsRunning(true);
    };

    return (
        <div>
            <h1 className={style.counterTitle}>El Más Hermoso Contador Hecho Con React ♥</h1>
            <h1 className={style.counterUnit}>{String(unit).padStart(4, '0')}</h1>

            <button className={`${style.buttonStart}`} onClick={handleStart}>Iniciar</button>
            <button className={`${style.buttonStop}`} onClick={handleStop}>Detener</button>
            <button className={`${style.buttonRestart}`} onClick={handleRestart}>Reiniciar</button>
        </div>
    );
};

export default Units;



