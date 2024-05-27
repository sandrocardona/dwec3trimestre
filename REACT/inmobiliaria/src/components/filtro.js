//El filtro varía según sea compra o alquiler
//Filtrar por
/* 
    garaje: si/no
    piscina: no/privada/comunitaria
    habitaciones: 1, 2, 3 o más
    precio: mínimo - máximo

    Los valores de precio varían según sea compra o alquiler
    Añadir además un valor "Sin límite" al máximo

    
*/
import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';



const Filtro = () => {

    const handleHabitacionesChange = (event) => {
        setHabitaciones(event.target.value);
    };
    
    const [habitaciones, setHabitaciones] = useState('');

    return (<>
          <div className='filter-options'>
            {/* garaje */}
            <p>
              <input name="garaje" type="checkbox"></input>
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
                <input name="piscina" type="radio"></input>
                <label htmlFor="piscina">no</label>
                <br></br>
                <input name="piscina" type="radio"></input>
                <label htmlFor="piscina">comunitaria</label>
                <br></br>
                <input name="piscina" type="radio"></input>
                <label htmlFor="piscina">privada</label>
                <br></br>
                <input name="piscina" type="radio"></input>
                <label htmlFor="piscina">cualquiera</label>
            </p>
            {/* precio */}
            <p>
            <select>
              <option>sin mínimo</option>
              <option >100.000</option>
              <option >250.000</option>
              <option >500.000</option>
          </select>
          <br></br>
          <select>
              <option>sin máximo</option>
              <option >250.000</option>
              <option >500.000</option>
              <option >1.000.000</option>
          </select>
            </p>
          </div>
    </>)
}

export default Filtro;