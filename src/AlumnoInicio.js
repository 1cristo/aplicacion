import React, { useState } from 'react';

function AlumnoInicio() {
    const [selectedOption, setSelectedOption] = useState('math');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

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
        </div>
    );
}

export default AlumnoInicio;