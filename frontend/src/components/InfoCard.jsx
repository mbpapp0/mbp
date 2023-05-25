import info from '../icons/info.png';
import { useState } from 'react';

export default function InfoCard(props) {
    const [hover, setHover] = useState(false);
    return(
        <div className='info'>
            <img className='info_image' src={info} alt='info' style={{height: '1.2rem'}}  
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}/>
            <div className={hover ? `info_card` : `info_card hide_info_card`}>
                <div className='info_text'>
                    <p style={{marginBottom: '0.5rem'}}>Version: 1.0.0</p>
                    <p>{ props.description }</p>
                </div>
            </div>
        </div>
    )
}