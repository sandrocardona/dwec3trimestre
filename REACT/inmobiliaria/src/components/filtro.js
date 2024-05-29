import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Filtro = (props) => {
    const [habitaciones, setHabitaciones] = useState(8);
    const [garaje, setGaraje] = useState(8);
    const [piscina, setPiscina] = useState(8);
    const [precioMinimo, setPrecioMinimo] = useState(0);
    const [precioMaximo, setPrecioMaximo] = useState(Infinity);

    useEffect(() => {
        handleFiltros();
    }, [habitaciones, garaje, piscina, precioMinimo, precioMaximo]);

    const handleHabitacionesChange = (event) => {
        setHabitaciones(Number(event.target.value));
    };

    const handleGaraje = (event) => {
        setGaraje(Number(event.target.value));
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
                {/* si */}
                <input
                    id='garaje1'
                    name="garaje"
                    type="radio"
                    value={1}
                    onChange={handleGaraje}
                    checked={garaje === 1}
                />&nbsp;&nbsp;
                <label htmlFor="garaje">Con Garaje</label>
                <br />
                {/* no */}
                <input
                    id='garaje2'
                    name="garaje"
                    type="radio"
                    value={2}
                    onChange={handleGaraje}
                    checked={garaje === 2}
                />&nbsp;&nbsp;
                <label htmlFor="garaje">Sin garaje</label>
                <br />
                {/* cualquiera */}
                <input
                    id='garaje8'
                    name="garaje"
                    type="radio"
                    value={8}
                    onChange={handleGaraje}
                    checked={garaje === 8}
                />&nbsp;&nbsp;
                <label htmlFor="garaje">Cualquiera</label>
                <br />
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
                />&nbsp;&nbsp;
                <label htmlFor="habitaciones1">1 habitación</label>
                <br />
                <input
                    id="habitaciones2"
                    name="habitaciones"
                    type="radio"
                    value={2}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 2}
                />&nbsp;&nbsp;
                <label htmlFor="habitaciones2">2 habitaciones</label>
                <br />
                <input
                    id="habitaciones3"
                    name="habitaciones"
                    type="radio"
                    value={3}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 3}
                />&nbsp;&nbsp;
                <label htmlFor="habitaciones3">3 o más</label>
                <br />
                <input
                    id="habitaciones8"
                    name="habitaciones"
                    type="radio"
                    value={8}
                    onChange={handleHabitacionesChange}
                    checked={habitaciones === 8}
                />&nbsp;&nbsp;
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
                />&nbsp;&nbsp;
                <label htmlFor="piscina1">No</label>
                <br />
                <input
                    id="piscina2"
                    name="piscina"
                    type="radio"
                    value={2}
                    onChange={handlePiscinaChange}
                    checked={piscina === 2}
                />&nbsp;&nbsp;
                <label htmlFor="piscina2">Comunitaria</label>
                <br />
                <input
                    id="piscina3"
                    name="piscina"
                    type="radio"
                    value={3}
                    onChange={handlePiscinaChange}
                    checked={piscina === 3}
                />&nbsp;&nbsp;
                <label htmlFor="piscina3">Privada</label>
                <br />
                <input
                    id="piscina4"
                    name="piscina"
                    type="radio"
                    value={8}
                    onChange={handlePiscinaChange}
                    checked={piscina === 8}
                />&nbsp;&nbsp;
                <label htmlFor="piscina8">Cualquiera</label>
            </p>
            {/* Precio */}
            <p>
                <label htmlFor="precioMinimo"></label>
                <select id="precioMinimo" value={precioMinimo} onChange={handlePrecioMinimo}>
                    <option value={0}>Sin mínimo</option>
                    <option value={250}>250</option>
                    <option value={500}>500</option>
                    <option value={100000}>100.000</option>
                    <option value={300000}>300.000</option>
                    <option value={500000}>500.000</option>
                </select>
                <br />
                <label htmlFor="precioMaximo"></label>
                <select id="precioMaximo" value={precioMaximo} onChange={handlePrecioMaximo}>
                    <option value={Infinity}>Sin máximo</option>
                    <option value={500}>500</option>
                    <option value={1000}>1.000</option>
                    <option value={300000}>300.000</option>
                    <option value={500000}>500.000</option>
                    <option value={1000000}>1.000.000</option>
                </select>
            </p>
        </div>
    );
};

export default Filtro;