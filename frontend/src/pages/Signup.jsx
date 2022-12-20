import { useState } from "react";
import { useSignup } from '../hooks/useSignup';

export default function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signup, error, isLoading, setError} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            setError('Please fill in all fields');
            setTimeout(() => {
                setError('');
            }, 2000)
            return;
        }
    
        if(password !== confirmPassword){
            setError('Passwords do not match');
            setTimeout(() => {
                setError('');
            }, 2000)
            return;
        }

        

        await signup(firstName, lastName, email, password);

    }
      
    return(
        <main className="signup container">
            <h1 className="signup_header">CREATE AN ACCOUNT</h1>
            <form className="signup_form" onSubmit={handleSubmit}>
            {error && 
                <div className="error">
                    <p>{ error }</p>
                </div>
            }
                <label>First Name:</label>
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button className="button button_padding" disabled={isLoading}>Create Account</button>
            </form>
        </main>
    )
}