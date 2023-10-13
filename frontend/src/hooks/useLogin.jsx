import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import server from '../server';

export const useLogin = () => {
    // This is the login functionality 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [sent, setSent] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        
        const response = await fetch('https://mbpserver.onrender.com/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }); 


        const json = await response.json();
        setSent(response);

        if(!response.ok){
            setLoading(false);
            setError(json.error);

            setTimeout(() => {
                setError('')
            }, 3000)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json));
            const currentTime = new Date().getTime();
             localStorage.setItem('lastLoginTime', currentTime.toString());
            dispatch({ type: 'LOGIN', payload: json});
            setLoading(false);
            window.location.assign('/');
            

        }  
    }

    return { login, error, loading, sent};
}
