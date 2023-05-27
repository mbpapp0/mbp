import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Account() {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [info, setInfo] = useState(false);
    
    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setInfo(json);

    } 
    
    useEffect(() => {
       getData()
    }, [])
    
    return(
        <div className='container'>
            <div style={{marginTop: '9rem'}}>
               <button className='button radius'>Edit Info</button>
               <h3>Account</h3>
               <p>{info.name}</p>
            </div>
        </div>
    )
}
