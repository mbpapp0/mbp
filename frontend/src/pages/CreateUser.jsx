import { useState, useEffect } from 'react'
import Error from './Error';
import Back from '../components/Back';
import { useParams } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

export default function SysAdminCreateBranch() {
    const { id } = useParams();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [branchOptions, setBranchOptions] = useState([]);
    const [roleOptions, setRoleOptions] = useState(['Branch User', 'Data Admin', 'System Admin']);
    const [role, setRole] = useState(roleOptions[0]);
    const [branch, setBranch] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('New User Created');
    const [set, setSet] = useState(false);
   
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role !== 'System Admin'){
        return <Error />
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        createUser();
    }

    const createUser = async () => {

        const name = `${firstName} ${lastName}`;

        const user = {
                name,
                email,
                role,
                password,
                branch
            } 
            

        const response = await fetch('https://mbp-server.onrender.com/api/users/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const response = await fetch('http://localhost:3001/api/users/signup', {
        //     method: 'POST',
        //     body: JSON.stringify(user),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        const data = await response.json();

        if(!response.ok){
            
            setError(data.error);
            setTimeout(() => {
            setError('');
            }, 3000);
        }
        

        if(response.ok){
            setError('')
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setRole(roleOptions[1]);
            setSet(true);

            setTimeout(() => {
                setSet(false);
            }, 3000);

            window.location.assign(`/branch/${id}`)
        }

    }

    const getBranches = async() => {
        const response = await fetch('https://mbp-server.onrender.com/api/branches');
        const json = await response.json();
        setBranchOptions(json);
        setBranch(json[0]._id);


    }

    // const getBranches = async() => {
    //     const response = await fetch('http://localhost:3001/api/branches');
    //     const json = await response.json();
    //     setBranchOptions(json);
    //     setBranch(json[0]._id);


    // }


    useEffect(() => {
        getBranches();
    }, []);



    

    return(
        <>
            <div className='container'>
            <div className='info_buttons'>
                <Back />
                <div className='info_hover'> 
                <Map location='Create New Branch User Screen'/>
                </div>
            </div>
                <div className="new_branch" style={{ 'margin': '0'}}>
                    <h4 className="block1x ">Create New User</h4>
                    <form onSubmit={handleSubmit}>
                        {
                            error && 
                            <div className='error_user'>
                            <p>{ error }</p>
                            </div>
                        }
                        {
                            set && 
                            <div className='success_user'>
                                <p>{ success }</p>
                            </div>
                        }
                        <input className="block" type='text' placeholder="First Name" value={ firstName } onChange={(e) => setFirstName(e.target.value)}/>
                        <input className="block" type='text' placeholder="Last Name" value={ lastName } onChange={(e) => setLastName(e.target.value)}/>
                        <select className='role' onChange={(e) => setRole(e.target.value)}>
                            {roleOptions.map((role, index) => {
                                return <option key={index}>{ role }</option>
                            })}
                        </select>
                        <select onChange={(e) => setBranch(e.target.value)} value={branch}>
                            {branchOptions.map((branch) => {
                                return <option 
                                key={ branch._id } 
                                value={ branch._id }>{ branch.name }</option>
                            })}
                        </select>
                        <input className="block" type='email' placeholder="Email" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                        <input className="block" type='password' placeholder="Password" value={ password } onChange={(e) => setPassword(e.target.value)}/>
                        <button className="block button radius new_branch_button" disabled={!branchOptions ? true : false}>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}