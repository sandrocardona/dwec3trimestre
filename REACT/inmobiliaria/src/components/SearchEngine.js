import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';


const SearchEngine = (props) => {
  let data = props.data.propiedades;
  const [inputValue, setInputValue] = useState('');
  const [tipoVenta, setTipoVenta] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevenir comportamiento por defecto del formulario
    props.clicar(inputValue, tipoVenta, tipoPropiedad); // Llama a la función clicar pasando el valor del input
  };

  const handleTipoVentaChange = (event) => {
    setTipoVenta(event.target.value);
  };

  const handleTipoPropiedadChange = (event) => {
    setTipoPropiedad(event.target.value);
  };

  const reiniciarApp = () => {
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
          </select>
          {/* === tipo_propiedad === */}
          <select value={tipoPropiedad} onChange={handleTipoPropiedadChange}>
            <option key={"Piso1"} value={1}>Piso</option>
            <option key={"Casa2"} value={2}>Casa</option>
            <option key={"Chalet3"} value={3}>Chalet</option>
            <option key={"Atico4"} value={4}>Ático</option>
            <option key={"Otros0"} value={0}>Otros</option>
          </select>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type='text'
            placeholder='Buscar localidad'
          />
          <Button onClick={handleClick}>Buscar</Button>
          {" "}
          <Button color="primary" outline onClick={() => reiniciarApp()}>Limpiar filtro</Button>
        </form>
      </div>
    </>
  }

  export default SearchEngine;