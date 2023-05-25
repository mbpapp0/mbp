import { useState } from 'react';
import Error from './Error';
import Back from '../components/Back';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

export default function SysAdminCreateBranch() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role != 'System Admin'){
        return <Error />
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        createBranch();
        setName('');
    }

    const createBranch = async () => {
        const post = {
            name: name
        }
        

        const response = await fetch('https://mbp-server.onrender.com/api/branches', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const response = await fetch('http://localhost:3001/api/branches', {
        //     method: 'POST',
        //     body: JSON.stringify(post),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        const json = await response.json();

        if(!response.ok){
            setMessage(json.error);
            
            setTimeout(() => {
                setMessage('');
            }, 3000)
        }

        if(response.ok){

            setMessage(`${name} branch created successfully`);
    
            setTimeout(() => {
                setMessage('');
                window.location.assign('/');
            }, 1500)
        }
    }

    return(
        <>

            <div className='container'>
                <div className='info_buttons'>
                    <Back />
                    <div className='info_hover'> 
                    <Map location='System Administration Create Branch Screen'/>
                    </div>
                </div>
                <div className="new_branch">
                    <h4 className="block1x ">Create New Branch</h4>
                    {message && 
                        <div  className='success'>
                            <p>{ message }</p>
                        </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <input className="block" type='text' placeholder="Branch Name" value={ name } onChange={(e) => setName(e.target.value)}/>
                        <button className="block button radius new_branch_button" >Create Branch</button>
                    </form>
                </div>
            </div>
        </>
    )
}