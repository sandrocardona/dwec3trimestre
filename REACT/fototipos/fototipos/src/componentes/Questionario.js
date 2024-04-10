import React from "react";
import FOTOTIPO from "./fototipos";
import { Button } from 'reactstrap';


const Questionario = (props) => {
    return(
        <div>
            {FOTOTIPO.map(e => (
                <>
                <p key = {e.orden}>{e.orden}{". "}{e.texto}</p>
                <ul>
                {e.respuestas.map(r => (
                <li key={e.orden + " " + r.puntos}>
                    <Button puntos={r.puntos} onClick={() => props.clickar(r.puntos)} color="info" outline>{r.valor}</Button>
                </li>
                ))}
                </ul>
                </>
            ))}
        </div>
    );
};

export default Questionario;