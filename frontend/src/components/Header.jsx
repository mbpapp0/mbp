import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect, useState } from 'react'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    

    const { dispatch } = useAuthContext();
   

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT'});
        window.location.assign('/')
    }
 const [show, setShow] = useState(false);
  const [userActivity, setUserActivity] = useState(true);

  useEffect(() => {
    let inactivityTimeout;

    const resetInactivityTimeout = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        setShow(true);
      }, 10 * 60 * 1000); // 10 minutes in milliseconds
    };

    const handleUserActivity = () => {
      setUserActivity(true);
      resetInactivityTimeout();
    };

    const handleLogout = () => {
      setShow(false);
      logout();
    };

    resetInactivityTimeout();
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  useEffect(() => {
    let logoutTimeout;

    const startLogoutTimeout = () => {
      clearTimeout(logoutTimeout);
      logoutTimeout = setTimeout(() => {
        logout();
      }, 2 * 60 * 1000); // 2 minutes in milliseconds
    };

    if (show) {
      startLogoutTimeout();
    } else {
      clearTimeout(logoutTimeout);
    }

    return () => {
      clearTimeout(logoutTimeout);
    };
  }, [show]);


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
             
             { show && userActivity && (
                <div className='guide_confirm'>
                    <h4 className='guide_confirm_title' style={{marginBlock: '2rem'}}>Your session will end in 2 minutes due to activity</h4>
                    <p style={{ textAlign: 'center', marginBlock: '0.5rem'}}>
                      As a security precaution, if there is no additional activity, the session will end and you will be brought to the home page.
                      If you are still working on this app, choose OK to continue.
                    </p>
                    <div className='guide_confirm_buttons'>   
                        <button onClick={handleLogout}>Ok</button>
                    </div>
                </div>)}
           
           </div>
    )
    
} 
