import Data from "./Data";
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Button } from 'reactstrap';

const MainBoard = (props) => {

    let propiedades = Data();
    console.log(propiedades);
  
    return <>
      <div className='MainBoard'>
        {
        propiedades != "" ?
        propiedades.propiedades.map(dato => (
          <Card
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
              {dato.metros + "m2 - " + dato.precio + "€"}
              </CardSubtitle>
              <CardText
                style={{
                  height: '15rem'
                }}
              >
                {dato.informacion}
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