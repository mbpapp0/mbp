import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Back from '../components/Back';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

export default function EditUser(){ 
    const { id } = useParams();
    const [user, setUser] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(false);

    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setName(json.name);
        setEmail(json.email);
        setRole(json.role);
    } 

    // const getData = async () => {
    //     const response = await fetch(`http://localhost:3001/api/users/singleuser/${id}`);
    //     const json = await response.json();
    //     setName(json.name);
    //     setEmail(json.email);
    //     setRole(json.role);
    // } 

    const editData = async() => {

        if(!name || !email){
            setError('Please fill in all fields');
        }

        const data = {
            name,
            email,
            role
        }

        const response = await fetch(`https://mbp-server.onrender.com/api/users/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const response = await fetch(`http://localhost:3001/api/users/edit/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        if(response.ok){
            window.history.back();
        }

    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="container">
            <div className='info_buttons'>
                <Back />
                <div className='info_hover'> 
                    <InfoCard/>
                    <Map location='User Edit Screen'/>
                </div>
            </div>
            <div className='edit_info'>
                { error && <div className='error'><p>{error}</p></div> }
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Email: </label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Role:</label>
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option>{ role }</option>
                        { role != 'Branch User' ? <option>Branch User</option>: ''}
                        { role != 'Data Admin' ? <option>Data Admin</option>: ''}
                        { role != 'System Admin' ? <option>System Admin</option>: ''}
                    </select>
                    <button className='button radius block' onClick={editData}>Apply Changes</button>
                </div>
        </div>
    )
}