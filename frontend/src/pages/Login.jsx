import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error, loading, login} = useLogin();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return(
        <main className='signup container'>
            <h1 className='signup_header'>LOGIN</h1>
            <form className='signup_form' onSubmit={handleSubmit}>
                {error &&
                    <div className='error'>
                        <p>{ error }</p>
                    </div>
                }
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>  
                <input type='submit' value='Submit' className='button'/>       
            </form>
            <div className='login_block'></div>
        </main>
    )
}