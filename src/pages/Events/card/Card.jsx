import './Card.css';

export default function Card(){
    return(
        <div className='card'>
            <div className='image'>
                <p className='revealing_soon'>REVEALING</p>
                <p className='revealing_soon'>SOON</p>
            </div>
            <div className='event-name'>Name of the Event</div>
            <div className='detail'>
                <p>Venue</p>
                <p>Date</p>
            </div>
            <div className='detail'>
            <p>Price</p>
                <p>Time</p>
            </div>
            <button className='register' oncClick='#'>
                Register Now
            </button>
        </div>
    )
}