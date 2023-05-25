import map from '../icons/map.png';
import { useState } from 'react';

export default function Map(props) {
    const [hover, setHover] = useState(false);
    return(
        <div className='info'>
            <img className='info_image' src={map} alt='map' style={{height: '1.2rem'}}  
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}/>
            <div className={hover ? `info_card` : `info_card hide_info_card`}>
                <p style={{textAlign: 'center'}}>You are here: </p>
                <p style={{textAlign: 'center'}}>{ props.location }</p>
            </div>
        </div>
    )
}