
import './style.css'

const global = (props) => {
    return (
    <div className="global">
        <div className='global-title'>
            <p>{props.title}</p>
            <img src={props.typeIcon} alt="type icon"/>
        </div>
        <div className='global-amount'>
            <img src={props.moneyIcon} alt='money icon'/>
            <p>{props.value}</p>
        </div>
    </div>)
}
export default global