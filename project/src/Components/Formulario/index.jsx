
import CampoTexto from "../CampoTexto"
export default function Formulario () {

    return (
        <form>
            <h1>FORMULÁRIO</h1>

            <CampoTexto tipo="text" etiqueta="Nome"/>
            <CampoTexto tipo="email" etiqueta="E-mail"/>
            <CampoTexto tipo="password" etiqueta="Senha"/>
            <CampoTexto/>

        </form>
    )
}