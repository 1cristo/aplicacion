import React, { useState, useEffect } from 'react';

function Informacion() {
    const [selectedOption, setSelectedOption] = useState('math');
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const handleSaveClick = () => {
        setTimerRunning(true);
    }

    

    useEffect(() => {
        let intervalId;

        if (timerRunning) {
            intervalId = setInterval(() => {
                setTimeElapsed(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timerRunning]);

    return (
        <div>
            <h1>Seleccione una opción:</h1>
            <div>
                <input type="radio" id="math" name="option" value="math" checked={selectedOption === 'math'} onChange={handleOptionChange} />
                <label htmlFor="math">Matemáticas</label>
            </div>
            <div>
                <input type="radio" id="spanish" name="option" value="spanish" checked={selectedOption === 'spanish'} onChange={handleOptionChange} />
                <label htmlFor="spanish">Español</label>
            </div>
            <div>
                <input type="radio" id="history" name="option" value="history" checked={selectedOption === 'history'} onChange={handleOptionChange} />
                <label htmlFor="history">Historia</label>
            </div>
            <button onClick={handleSaveClick}>Guardar selección</button>
            {timerRunning && <div className="timer">{timeElapsed} segundos transcurridos</div>}
        </div>
    );
}
export default Informacion;