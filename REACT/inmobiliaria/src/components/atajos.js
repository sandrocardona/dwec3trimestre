//aquí estaran los atajos a propiedades

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';


const Atajo = (props) => {
    let data = props.data.propiedades; /* lista completa de propiedades */

    const handleClick = (event) =>{
        
    }

    return  <>
                <div className="divAtajo">
                    <form>
                        <Button onClick={handleClick} color='primary' outline>Viviendas</Button> {/* id_tipo == 1 para viviendas */}
                        <Button onClick={handleClick} color='primary' outline>Garajes</Button> {/* id_tipo == 2 garaje */}
                        <Button onClick={handleClick} color='primary' outline>Trasteros</Button> {/* id_tipo == 3 trastero  */}
                        <Button onClick={handleClick} color='primary' outline>Terrenos</Button> {/* id_tipo == 4 terrenos */}
                        <Button onClick={handleClick} color='primary' outline>Con piscina</Button> {/* .piscina == comunitaria || privada */}
                        <Button onClick={handleClick} color='primary' outline>Segunda Mano</Button> {/* .estado == segunda mano */}
                    </form>
                </div>
            </>
}

export default Atajo;