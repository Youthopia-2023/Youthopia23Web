import './Card.css';

export default function Card(props){
    return(
        <div className='card' id={props.id}>
            <div className='image'>
                <p className='revealing_soon'>REVEALING</p>
                <p className='revealing_soon'>SOON</p>
            </div>
            <div className='content'>
            <div className='event-name'>{props.name}</div>
            <div className='detail'>
                <p>Venue</p>
                <p>{props.date}</p>
            </div>
            <div className='detail'>
            <p>{props.price}</p>
                <p>{props.time}</p>
            </div>
            </div>
            
            <button className='register'>
                Register Now
            </button>
        </div>
    )
}