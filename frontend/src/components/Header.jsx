import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [timeoutId, setTimeoutId] = useState(null);

    const { dispatch } = useAuthContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT'});
        window.location.assign('/')
    }
    
    const checkLogoutTime = () => {
         const lastLoginTime = localStorage.getItem('lastLoginTime'); 
  
         if (lastLoginTime) {
             const currentTime = new Date().getTime()
             const elapsedTime= (currentTime - parseInt(lastLoginTime)) / (1000 * 60); 

             if (elapsedTime>= 10) {
                 localStorage.removeItem('lastLoginTime');
                 logout();
             } 
           }
         }
    
  const handleIdleTimeout = () => {
    window.location.assign('/');
  };

  const resetTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(handleIdleTimeout, 10 * 60 * 1000);
    setTimeoutId(newTimeoutId);
  };

  const handleUserActivity = () => {
    resetTimeout();
  };
    
    useEffect(() => {
      checkLogoutTime();
      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
      window.addEventListener('scroll', handleUserActivity);

      resetTimeout();
        
      return () => {
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
        window.removeEventListener('scroll', handleUserActivity);

        clearTimeout(timeoutId);
      };
    }, [])

    return (
        <div className="header">
             <Link to='/'><h1 className="logo">MBP</h1></Link>
           
             {
               user && 
               <div>
                   <Link to={`/account/${user.id}`}><button className='button radius' style={{marginRight: '0.75rem'}}>Profile</button></Link>
                 <button className='button radius' onClick={logout}>Logout</button>
              </div>
             }
           
           </div>
    )
}
