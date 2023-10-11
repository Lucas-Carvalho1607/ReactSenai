
export default function CampoTexto (props) {

    return (
        <div className="container">
            <label> {props.etiqueta} </label>
            <input type= {props.tipo} placeholder={`Digite seu ${props.etiqueta}`} />

        </div>
    );
}