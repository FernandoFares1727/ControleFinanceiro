
import './style.css'

const formDescriptionValue = (props) => {

    const label = props.id === "description"
                ? "Descrição"
                : "Valor"

    return(
        <div>
        <label htmlFor={props.id}>{label}</label>
        <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={(event) => props.onChanged(event.target.value)}
        />
        </div>
    )
}

export default formDescriptionValue