
import React, { Component, useState } from 'react';

const Filtro = (props) => {
    const [habitaciones, setHabitaciones] = useState(4);
    const [garaje, setGaraje] = useState('no');
    const [piscina, setPiscina] = useState(4);
    const [precioMinimo, setPrecioMinimo] = useState(8);
    const [precioMaximo, setPrecioMaximo] = useState(8);

    let ventaAux = props.tipoSales;

    const handleHabitacionesChange = (event) => {
        setHabitaciones(event.target.value);
        handleFiltros();
    };

    const handleGaraje = (event) => {
        setGaraje(event.target.checked ? 'si' : 'no');
        handleFiltros();
    };

    const handlePiscinaChange = (event) => {
        setPiscina(event.target.value);
        handleFiltros();
    };

    const handlePrecioMinimo = (event) => {
        setPrecioMinimo(event.target.value);
        handleFiltros();
    };

    const handlePrecioMaximo = (event) => {
        setPrecioMaximo(event.target.value);
        handleFiltros();
    };

    const handleFiltros = () => {
      props.filtroExtra(habitaciones, garaje, piscina, precioMinimo, precioMaximo);
    }
    

    return (<>
          <div className='filter-options'>
            {/* garaje */}
            <p>
              <input
                id='garaje'
                name="garaje" type="checkbox"
                onChange={handleGaraje}
                checked={garaje === 'si'}
               />
              <label htmlFor="garaje">Garaje</label>
            </p>
          {/* habitaciones */}
          <p>
            <input
              id="habitaciones1"
              name="habitaciones"
              type="radio"
              value={1}
              onChange={handleHabitacionesChange}
            />
            <label htmlFor="habitaciones1">1 habitación</label>
            <br />
            <input
              id="habitaciones2"
              name="habitaciones"
              type="radio"
              value={2}
              onChange={handleHabitacionesChange}
            />
            <label htmlFor="habitaciones2">2 habitaciones</label>
            <br />
            <input
              id="habitaciones3"
              name="habitaciones"
              type="radio"
              value={3}
              onChange={handleHabitacionesChange}
            />
            <label htmlFor="habitaciones3">3 o más</label>
            <br />
            <input
              id="habitaciones4"
              name="habitaciones"
              type="radio"
              value={4}
              onChange={handleHabitacionesChange}
            />
            <label htmlFor="habitaciones3">cualquiera</label>
          </p>
            {/* piscina */}
            <p>
                {/* no */}
                <input
                    name="piscina"
                    type="radio"
                    id=''
                    onChange={handlePiscinaChange}
                    value={1}
                />
                <label htmlFor="piscina">no</label>
                <br></br>
                {/* comunitaria */}
                <input
                    name="piscina"
                    type="radio"
                    id=''
                    onChange={handlePiscinaChange}
                    value={2} 
                />
                <label htmlFor="piscina">comunitaria</label>
                <br></br>
                {/* privada */}
                <input
                    name="piscina"  
                    type="radio"
                    id=''
                    onChange={handlePiscinaChange}
                    value={3}
                />
                <label htmlFor="piscina">privada</label>
                <br></br>
                {/* cualquiera */}
                <input
                    name="piscina"
                    type="radio"
                    id=''
                    onChange={handlePiscinaChange}
                    value={4}
                />
                <label htmlFor="piscina">cualquiera</label>
            </p>
            {/* precio */}
            <p>
            <select value={precioMinimo} onChange={handlePrecioMinimo}>
              <option value={8}>sin mínimo</option>
              <option value={1}>250</option>
              <option value={2}>500</option>
              <option value={3}>100.000</option>
              <option value={4}>250.000</option>
              <option value={5}>500.000</option>
          </select>
          <br></br>
          <select value={precioMaximo} onChange={handlePrecioMaximo}>
              <option value={8}>sin máximo</option>
              <option value={1}>500</option>
              <option value={2}>1000</option>
              <option value={3}>250.000</option>
              <option value={4}>500.000</option>
              <option value={5}>1.000.000</option>
          </select>
            </p>
          </div>
    </>)
}

export default Filtro;