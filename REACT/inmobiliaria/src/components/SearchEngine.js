import React, { Component } from 'react';
import { Button } from 'reactstrap';

const SearchEngine = (props) => {
    const {slogan, data} = props;
    return <>
      <div className='search-engine'>
        <h2>{props.slogan}</h2>
        <form>
          {/* Aquí irá bucle para traer tipo_venta */}
          <select>
{/*             {data.map(dato => (
              <option key={dato.id} value={dato.tipo_venta}>{dato.tipo_venta}</option>
            ))} */}
          </select>
          {/* Aquí irá bucle para traer tipo_propiedad */}
          <select>
{/*             {data.map(dato => (
              <option key={dato.id} value={dato.tipo_propiedad}>{dato.tipo_propiedad}</option>
            ))} */}
          </select>
          <input type='text' placeholder='Buscar localidad'></input>
          <Button>Buscar</Button>
        </form>
      </div>
    </>
  }

  export default SearchEngine;