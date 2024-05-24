import Data from "./Data";
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Button } from 'reactstrap';

const MainBoard = (props) => {

    return <>
      <div className='MainBoard'>
        {
        props.propiedades != "" ?
        props.propiedades.propiedades.map(dato => (
          <Card
            key={dato.id_propiedad}
            style={{
              width: '18rem',
              margin: '0.5rem',
              border: 'solid black 1px'
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
              <Button outline>
                Ver Propiedad
              </Button>
            </CardBody>
          </Card>
        )) : ""
        }
      </div>
    </>
  }

  export default MainBoard;