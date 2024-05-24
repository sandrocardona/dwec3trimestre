//aquí estaran los atajos a propiedades

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';


const Atajo = (props) => {
    const [tipoFiltro, setTipoFiltro] = useState('');

    const clicado = (filtro) =>{
        props.filtro(filtro);
    }

    const handleClick = (event) => {
        event.preventDefault();
        let valor = event.target.value;
        let nuevoFiltro = valor;

        setTipoFiltro(nuevoFiltro);
        clicado(nuevoFiltro);
    }

    return  <>
                <div className="divAtajo">
                    <form>
                        <Button onClick={handleClick} color='primary' outline value={1}>Viviendas</Button> {/* id_tipo == 1 para viviendas */}
                        <Button onClick={handleClick} color='primary' outline value={2}>Garajes</Button> {/* id_tipo == 2 garaje */}
                        <Button onClick={handleClick} color='primary' outline value={3}>Trasteros</Button> {/* id_tipo == 3 trastero  */}
                        <Button onClick={handleClick} color='primary' outline value={4}>Terrenos</Button> {/* id_tipo == 4 terrenos */}
                        <Button onClick={handleClick} color='primary' outline value={5}>Con piscina</Button> {/* .piscina == comunitaria || privada */}
                        <Button onClick={handleClick} color='primary' outline value={6}>Segunda Mano</Button> {/* .estado == segunda mano */}
                    </form>
                </div>
            </>
}

export default Atajo;