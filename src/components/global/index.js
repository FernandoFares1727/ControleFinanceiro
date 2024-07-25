
import './style.css'

const global = (props) => {
    return (
    <div className="global">
        <p className='global-title'>{props.title}</p>
        <div className='global-amount'>
            <img src={props.moneyIcon} alt='money icon'/>
            <p>{props.value}</p>
        </div>
    </div>)
}
export default global