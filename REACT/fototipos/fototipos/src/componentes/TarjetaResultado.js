import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PUNTUAJE from './puntuacion';



const TarjetaResultado = (props) => {

    let resultado = props.puntuacion;
    let plantilla = props.plantilla;


    let respuesta = plantilla.find(
        f => 
            resultado >= f.rangoInicio && (resultado < f.rangoFin || f.rangoFin === null)
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
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
        )
    } else {
        return (<div>No hay resultado</div>);
    }

}

export default TarjetaResultado;