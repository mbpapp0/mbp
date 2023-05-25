
import { useState } from 'react';
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
        <div>

            <div className='login'>
                <h2 className="login_header">Login</h2>
                <div className="login_wrapper">
                    <form className="login_form" onSubmit={handleSubmit}>
                        {error &&
                        <div className='error_indicator'>
                            <p>{ error }</p>
                        </div>}
                        <label>Login</label>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password</label>
                        <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button disabled={loading}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}