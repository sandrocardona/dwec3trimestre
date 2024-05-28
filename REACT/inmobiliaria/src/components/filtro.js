import React, { useState, useEffect } from 'react';

const Filtro = (props) => {
    const [habitaciones, setHabitaciones] = useState(8);
    const [garaje, setGaraje] = useState('no');
    const [piscina, setPiscina] = useState(4);
    const [precioMinimo, setPrecioMinimo] = useState(8);
    const [precioMaximo, setPrecioMaximo] = useState(8);

    useEffect(() => {
        handleFiltros();
    }, [habitaciones, garaje, piscina, precioMinimo, precioMaximo]);

    const handleHabitacionesChange = (event) => {
        setHabitaciones(Number(event.target.value));
    };

    const handleGaraje = (event) => {
        setGaraje(event.target.checked ? 'si' : 'no');
    };

    const handlePiscinaChange = (event) => {
        setPiscina(Number(event.target.value));
    };

    const handlePrecioMinimo = (event) => {
        setPrecioMinimo(Number(event.target.value));
    };

    const handlePrecioMaximo = (event) => {
        setPrecioMaximo(Number(event.target.value));
    };

    const handleFiltros = () => {
        props.filtroExtra(habitaciones, garaje, piscina, precioMinimo, precioMaximo);
    };

    return (
        <div className='filter-options'>
            {/* Garaje */}
            <p>
                <input
                    id='garaje'
                    name="garaje"
                    type="checkbox"
                    onChange={handleGaraje}
                    checked={garaje === 'si'}
                />
                <label htmlFor="garaje">Garaje</label>
            </p>
            {/* Habitaciones */}
            <p>
                <input
                    id="habitaciones1"
                    name="habitaciones"
                    type="radio"
                    value={1}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 1}
                />
                <label htmlFor="habitaciones1">1 habitación</label>
                <br />
                <input
                    id="habitaciones2"
                    name="habitaciones"
                    type="radio"
                    value={2}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 2}
                />
                <label htmlFor="habitaciones2">2 habitaciones</label>
                <br />
                <input
                    id="habitaciones3"
                    name="habitaciones"
                    type="radio"
                    value={3}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 3}
                />
                <label htmlFor="habitaciones3">3 o más</label>
                <br />
                <input
                    id="habitaciones4"
                    name="habitaciones"
                    type="radio"
                    value={8}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 8}
                />
                <label htmlFor="habitaciones4">Cualquiera</label>
            </p>
            {/* Piscina */}
            <p>
                <input
                    id="piscina1"
                    name="piscina"
                    type="radio"
                    value={1}
                    onChange={handlePiscinaChange}
                    checked={piscina === 1}
                />
                <label htmlFor="piscina1">No</label>
                <br />
                <input
                    id="piscina2"
                    name="piscina"
                    type="radio"
                    value={2}
                    onChange={handlePiscinaChange}
                    checked={piscina === 2}
                />
                <label htmlFor="piscina2">Comunitaria</label>
                <br />
                <input
                    id="piscina3"
                    name="piscina"
                    type="radio"
                    value={3}
                    onChange={handlePiscinaChange}
                    checked={piscina === 3}
                />
                <label htmlFor="piscina3">Privada</label>
                <br />
                <input
                    id="piscina4"
                    name="piscina"
                    type="radio"
                    value={4}
                    onChange={handlePiscinaChange}
                    checked={piscina === 4}
                />
                <label htmlFor="piscina4">Cualquiera</label>
            </p>
            {/* Precio */}
            <p>
                <label htmlFor="precioMinimo"></label>
                <select id="precioMinimo" value={precioMinimo} onChange={handlePrecioMinimo}>
                    <option value={8}>Sin mínimo</option>
                    <option value={1}>250</option>
                    <option value={2}>500</option>
                    <option value={3}>100,000</option>
                    <option value={4}>250,000</option>
                    <option value={5}>500,000</option>
                </select>
                <br />
                <label htmlFor="precioMaximo"></label>
                <select id="precioMaximo" value={precioMaximo} onChange={handlePrecioMaximo}>
                    <option value={8}>Sin máximo</option>
                    <option value={1}>500</option>
                    <option value={2}>1,000</option>
                    <option value={3}>250,000</option>
                    <option value={4}>500,000</option>
                    <option value={5}>1,000,000</option>
                </select>
            </p>
        </div>
    );
};

export default Filtro;