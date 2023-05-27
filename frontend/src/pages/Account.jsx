import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Account() {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const [info, setInfo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(false);
    
    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setInfo(json);

    } 
    
    function isValidEmail(email) {
        var pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
        return pattern.test(email);
    }
    
    function isValidName(name) {
        const invalidCharacters = /[.,\\\/#!$%\^&\*;:{}=\-_`~()0-9]/;
        if(name[0] === " "){
            return false; 
        }
        return !invalidCharacters.test(name);
    }
    
    const editData = async() => {
        
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

        if(!name || !email){
            setError('Please fill in all fields');
        }

        const data = {
            name,
            email,
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
       getData()
    }, [])
    
    return(
        <div className='container'>
            <div style={{marginTop: '3rem'}}>
               <button className='button radius' style={{ marginBottom: '0.9rem'}}>Edit Info</button>
               <h3>Account</h3>
               <p>Name: {info.name}</p>
               <p>Email: {info.email}</p>
            </div>

          
        </div>
    )
}
