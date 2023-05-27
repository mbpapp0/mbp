import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Account() {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'); bb
    const [info, setInfo] = useState(false);
    
    return(
        <div className='container'>
            <h3>Account</h3>
             <p>{ user.role} { user.id }</p>
        </div>
    )
}
