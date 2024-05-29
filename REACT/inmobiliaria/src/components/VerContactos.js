import { Button } from "reactstrap";
import { GETCONTACTOS } from "./url";
import axios from "axios";

const VerContactos = (props) => {
    return(
    <Button
        onClick={props.openContactos}
    >
    Ver contactos
    </Button>
    )
}

export default VerContactos;