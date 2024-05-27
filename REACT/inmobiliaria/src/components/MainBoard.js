import { useState } from "react";
import Data from "./Data";
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Button } from 'reactstrap';

const MainBoard = (props) => {


  const handleClick = (id) => {
    props.openVer(id);
  }

    return <>
      <div className='MainBoard'>
        {
        props.propiedades != "" && props.propiedades.propiedades.length > 0 ?
        props.propiedades.propiedades.map(dato => (
          <Card
            key={dato.id_propiedad}
            style={{
              width: '18rem',
              margin: '0.5rem',
            }}
          >
            <img
              alt={dato.titulo}
              src="https://picsum.photos/300/200"
            />
            <CardBody>
              <CardTitle
                tag="h5"
                style={{
                  height: '3rem',
                }}
               >
                {dato.titulo}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
              {dato.id_venta === 1 ? "En venta " : dato.id_venta === 2 ? "Se alquila " : "Compartir "}
              <br />
              {dato.metros + "m2 - " + dato.precio + "€"}
              </CardSubtitle>
              <CardText
                style={{
                  height: '15rem'
                }}
              >
                {dato.informacion}
                <br />
                {
                dato.piscina != "no" ?
                "Piscina: " + dato.piscina
                : ""
                }
              </CardText>
              <Button onClick={() => handleClick(dato.id_propiedad)} outline>
                Ver Propiedad
              </Button>
            </CardBody>
          </Card>
        )) : <><h2>No hay propiedades</h2></>
        }
      </div>
    </>
  }

  export default MainBoard;