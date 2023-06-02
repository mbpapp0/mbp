import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [timeoutId, setTimeoutId] = useState(null);
    const [timerId, setTimerId] = useState(null);
    const [show, setShow] = useState(false);

    const { dispatch } = useAuthContext();
    
    const showPrompt = () =>  {
        setShow(true);
    }

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
    showPrompt();
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
        
        if (show) {
      const timeoutId = setTimeout(() => {
        logout()
        handleTimerExpired();
      }, 120000); 

      setTimerId(timeoutId);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
    }, [show]);
    
      const handleCancelTimer = () => {
    setShow(false);
  };
    
      const handleTimerExpired = () => {
    
   logout();
  };


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
             
             { show && <div className='guide_confirm'>
                    <h4 className='guide_confirm_title'>Your session will end in 2 minutes due to activity</h4>
                    <h5>
                      As a security precaution, if there is no additional activity, the session will end and you will be brought to the home page.
                      If you are still working on this app, choose OK to continue.
                    </h5>
                    <div className='guide_confirm_buttons'>   
                        <button onClick={handleCancelTimer}>Ok</button>
                    </div>
                </div>}
           
           </div>
    )l
    
} 
