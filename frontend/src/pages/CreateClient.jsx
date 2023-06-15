import { useState, useEffect } from 'react'
import Error from './Error';
import Back from '../components/Back';
import { useParams } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import PasswordRules from '../components/PasswordRules';


export default function SysAdminCreateBranch() {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [branchOptions, setBranchOptions] = useState([]);
    const [roleOptions, setRoleOptions] = useState(['Branch User', 'Data Admin', 'System Admin']);
    const [role, setRole] = useState(roleOptions[0]);
    const [branch, setBranch] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('New User Created');
    const [set, setSet] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inValidPass, setInValidPass] = useState(false);
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!branchOptions && role == 'Branch User'){
          return;
        }
        
        createUser();
    }
    
    const containsValidCharacters = (name) => {
        const invalidCharacters = /[ .,\\\/#!$%\^&\*;:{}=\-_`~()0-9]/;

        return !invalidCharacters.test(name);
    }
    
    function isStrongPassword(password) {
  // Check if password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }
  
  // Check if password contains at least one special character
  var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialChars.test(password)) {
    return false;
  }
  
  // Check if password meets any additional strength criteria (e.g., uppercase, lowercase, numeric)
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasNumeric = /[0-9]/.test(password);
  
  if (!(hasUppercase && hasLowercase && hasNumeric)) {
    return false;
  }
  
  // Password meets all strength requirements
  return true;
}


    const createUser = async () => {
        setLoading(true);
        const first = containsValidCharacters(firstName);
        const last = containsValidCharacters(lastName);
        const validPass = isStrongPassword(password);
               
        
        if(!first || !last){
          setError('Please enter a valid character...');
          setLoading(false)
          return;
        }
        
        if(password != confirmPass){
          setError('Passwords must match'); 
          setLoading(false)
          return;
        }
        
        if(!validPass){
           setInValidPass(true);
           setLoading(false);
            return;
        }
        
        
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
            setLoading(false);
            setTimeout(() => {
            setError('');
            }, 3000);
        }
        

        if(response.ok){
            setLoading(false);
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
            
            if(role != 'Branch User'){
              window.location.assign('/admins');
            } 
            
            if(role == 'Branch User'){
            window.location.assign(`/branch/${id}`);
            }
         
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

if(user.role !== 'System Admin'){
        return <Error />
    }

    

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
                    <form onSubmit={handleSubmit} className='flex create_form' style={{ justifyContent: 'center', flexDirection: 'column'}}>
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
                        {
                            inValidPass && <PasswordRules />
                         }

                        <input className="block" type='text' placeholder="First Name" value={ firstName } onChange={(e) => setFirstName(e.target.value)}/>
                        <input className="block" type='text' placeholder="Last Name" value={ lastName } onChange={(e) => setLastName(e.target.value)}/>
                      <select className='role' onChange={(e) => setRole(e.target.value)}>
                            {roleOptions.map((role, index) => {
                                return <option key={index}>{ role }</option>
                            })}
                        </select>
                  
                        <select className={role!= 'Branch User' ? `hide_input` : ''} onChange={(e) => setBranch(e.target.value)} value={branch}>
                            {branchOptions.map((branch) => {
                                return <option 
                                key={ branch._id } 
                                value={ branch._id }>{ branch.name }</option>
                            })}
                        </select>
                        <input className="block" type='email' placeholder="Email" value={ email } onChange={(e) => setEmail(e.target.value)}/>
                        <input className="block" type='password' placeholder="Password" value={ password } onChange={(e) => setPassword(e.target.value)}/>
                        <input className="block" type='password' placeholder="Confirm Password" value={ confirmPass } onChange={(e) => setConfirmPass(e.target.value)}/>
                        <button className="block button radius new_branch_button" disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
