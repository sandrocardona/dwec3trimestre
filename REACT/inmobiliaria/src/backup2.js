import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';


const SearchEngine = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [tipoVenta, setTipoVenta] = useState(1);
  const [tipoPropiedad, setTipoPropiedad] = useState(1);
  const [habitaciones, setHabitaciones] = useState('');

  const handleClick = (event) => {
    event.preventDefault(); // Prevenir comportamiento por defecto del formulario
    props.clicar(inputValue, tipoVenta, tipoPropiedad); // Llama a la función clicar pasando los valores
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTipoVentaChange = (event) => {
    setTipoVenta(event.target.value);
  };

  const handleHabitacionesChange = (event) => {
    setHabitaciones(event.target.value);
  };

  const handleTipoPropiedadChange = (event) => {
    setTipoPropiedad(event.target.value);
  };

  const reiniciarApp = () => { //Botón Limpiar filtro
    window.location.reload(); // Esto recarga la página
  };

    return <>
      <div className='search-engine'>
        <h2>{props.slogan}</h2>
        <form>
          {/* === tipo_venta === */}
          <select value={tipoVenta} onChange={handleTipoVentaChange}>
            <option key={"Comprar1"} value={1}>Comprar</option>
            <option key={"Alquilar2"} value={2}>Alquilar</option>
            <option key={"Compartir3"} value={3}>Compartir</option>
            <option key={"TodosVenta"} value={8}>Todos</option>
          </select>
          {/* === tipo_propiedad === */}
          <select value={tipoPropiedad} onChange={handleTipoPropiedadChange}>
            <option key={"Piso1"} value={1}>Piso</option>
            <option key={"Casa2"} value={2}>Casa</option>
            <option key={"Chalet3"} value={3}>Chalet</option>
            <option key={"Atico4"} value={4}>Ático</option>
            <option key={"Otros0"} value={0}>Otros</option>
            <option key={"TodosPropiedad"} value={8}>Todos</option>
          </select>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type='text'
            placeholder='Buscar localidad'
          />
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
          <Button color="primary" outline onClick={() => reiniciarApp()}>Limpiar filtro</Button>
          {" "}
          <Button onClick={handleClick}>Buscar</Button>
          

        </form>
      </div>
    </>
  }

  export default SearchEngine;