
import './style.css'

const formCheck = (props) => {

    return(          
    <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id={props.type}
          value={props.type}
          checked={props.checked}
          onChange={() => props.onChanged(props.type)}
        />
        <label className="form-check-label" htmlFor={props.type}>
          {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
        </label>
    </div>)
}

export default formCheck