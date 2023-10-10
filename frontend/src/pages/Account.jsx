import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Account() {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [info, setInfo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [sameEmail, setSameEmail] = useState('');
    
    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setName(json.name);
        setEmail(json.email);
        setNewEmail(json.email);
        
    } 
    
    function isValidEmail(email) {
        var pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
        return pattern.test(email);
    }
    
    function isValidName(nameInput) {
        const invalidCharacters = /[.,\\\/#!$%\^&\*;:{}=\-_`~()0-9]/;
        if(nameInput[0] === " " && nameInput == ''){
            return false; 
        }
        return !invalidCharacters.test(name);
    }
    
    const editData = async() => {
        setLoading(true);
        
        const isEmail = isValidEmail(email);
        const isName = isValidName(name)
        
        
        if(!isEmail){
          setError('Please enter a valid email');
            return;
        }
        
    
            if(!isName){
            setError('Please enter a valid Name');
            return;
        }
        
        if(email == newEmail){
         setSameEmail(true)
        } else {
         setSameEmail(false)
        }

        const data = {
            name,
            email,
            sameEmail
        }
        
        if(name == ''){return;}
        if(email == ''){return;}
        
        try{
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
        const json = response.json()

        if(response.ok){
            setEditing(false);
            setLoading(false)
        }
        }
        
        catch(error){
          setError(error);
           setLoading(false);
           
          setTimeout(() => {
            setError(false);
            
           }
          ,3600)
             
                     
        }

    }

    
    useEffect(() => {
       getData();
    }, [])
    
    return(
        <div className='container'>
        {error && 
          <div className='error_indicator'>
             <p>{ error }</p>
          </div>}
        {!editing &&
            <div style={{marginTop: '3rem'}}>
               <button className='button radius' onClick={() => setEditing(true)} style={{ marginBottom: '0.9rem'}}>Edit Info</button>
               <h3>Account</h3>
               <p>Name: {name}</p>
               <p>Email: {email}</p>
            </div>
         }
         { editing &&
         <div className='edit_info'>
           <label>Name:</label>
           <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Email: </label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className='button radius block' onClick={editData} disabled={loading}>{ loading ? 'Loading...' : 'Apply Changes'}</button>
         </div>
          }
        </div>
    )
}
