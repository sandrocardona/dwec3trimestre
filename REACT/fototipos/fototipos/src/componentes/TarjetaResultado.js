import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PUNTUAJE from './puntuacion';
import axios from 'axios';

//Tarjeta para mostrar el resultado final
const TarjetaResultado = (props) => {

    let resultado = props.puntuacion;
    let plantilla = props.plantilla;


    let respuesta = plantilla.find(
        f => 
            resultado >= f.rangoInicio && (resultado <= f.rangoFin || f.rangoFin === null)
        );

    if(respuesta){
        return(
            <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                className='imgfinal'
                alt="tipo de piel"
                src={respuesta.imagen}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {respuesta.tipo_piel}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Rango {respuesta.puntuacion}
                </CardSubtitle>
                <CardText>
                  {respuesta.descripcion}
                </CardText>
              </CardBody>
            </Card>
        )
    } else {
        return (<div>No hay resultado</div>);
    }

}

//Grafica

export default TarjetaResultado;