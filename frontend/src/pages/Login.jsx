
import { useEffect, useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import View from '../icons/view.png';
import Hide from '../icons/hide.png';

export default function Login() {
const [isInputFocused, setIsInputFocused] = useState(false);
const [isInputFocused2, setIsInputFocused2] = useState(false);
 
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  
const handleInputFocus2 = () => {
    setIsInputFocused2(true);
  };

  const handleInputBlur2 = () => {
    setIsInputFocused2(false);
  };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {error, loading, login} = useLogin();
    
    const activateServer = async () => {
     const form = {message: 'Hi'};
      
   const response = await fetch('https://mbp-server.onrender.com/connect', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

   const togglePassword = () => {
       setShowPassword(!showPassword)
   }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }
    
    useEffect(() => {
     activateServer()
    }, [])
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
                        <label>Email:</label>
                        <div className={isInputFocused2 ? 'focused password_block' : 'password_block'}>   
                          <input 
                            onFocus={handleInputFocus2}
                             onBlur={handleInputBlur2}
                            className='password_input' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <label>Password:</label>
                        <div className={isInputFocused ? 'focused password_block' : 'password_block'}>   
                         <input className='password_input' 
                             onFocus={handleInputFocus}
                             onBlur={handleInputBlur}
                             type={showPassword ? 'text': 'password'} 
                             placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                         <img onClick={togglePassword} src={showPassword ? Hide : View} alt='password' />
                       </div>
                        <button disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
