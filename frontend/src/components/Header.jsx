import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useEffect, useState, useRef } from 'react'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    const lastLoginTime = JSON.parse(localStorage.getItem('lastLoginTime'));
    const [show, setShow] = useState(false);
    const { dispatch } = useAuthContext();
   

    const logout = () => {
        if(!user){
         return;
        }
        localStorage.removeItem('lastLoginTime');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT'});
        window.location.assign('/')
    }
 
    
   
    const inactivityTimeoutRef = useRef(null);
  const logoutTimeoutRef = useRef(null);
    
    const startInactivityTimer = () => {
        if(!user){return;}
      inactivityTimeoutRef.current = setTimeout(() => {
        setShow(true);
        logoutTimeoutRef.current = setTimeout(logout, 2 * 60000); // 2 minutes
      }, 15 * 60000); // 10 minutes
    };

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimeoutRef.current);
      clearTimeout(logoutTimeoutRef.current);
      startInactivityTimer();
    };

    const handleUserActivity = () => {
      resetInactivityTimer();
    };

   const handleCancelLogout = () => {
      setShow(false);
      clearTimeout(logoutTimeoutRef.current);
      resetInactivityTimer();
    };

    const connect = async () => {
        const response = await fetch('https://mbp-server.onrender.com/connect');
    }


  useEffect(() => {
    const checkTimeDifference = () => {
      const currentTime = new Date().getTime();
      if (lastLoginTime) {
        const lastLoginTimestamp = parseInt(lastLoginTime, 10);
        const timeDifference = (currentTime - lastLoginTimestamp) / (1000 * 60);
        if (timeDifference >= 1) {
          logout();
        }
      }
    };

    checkTimeDifference();

    startInactivityTimer();

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      clearTimeout(inactivityTimeoutRef.current);
      clearTimeout(logoutTimeoutRef.current);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [lastLoginTime]);


    return (
        <div className="header hidden_on_print">
             <Link to='/'><h1 className="logo">MBP</h1></Link>
           
             {
               user && 
               <div>
                   <Link to={`/account/${user.id}`}><button className='button header_buttons' style={{marginRight: '0.75rem'}}>Profile</button></Link>
                 <button className='button header_buttons' onClick={logout}>Logout</button>
              </div>
             }
             
             { show && user && (
                <div className='guide_confirm'>
                    <h4 className='guide_confirm_title' style={{marginBlock: '2rem'}}>Your session will end in 2 minutes due to activity</h4>
                    <p style={{ textAlign: 'center', marginBlock: '0.5rem'}}>
                      As a security precaution, if there is no additional activity, the session will end and you will be brought to the home page.
                      If you are still working on this app, choose OK to continue.
                    </p>
                    <div className='guide_confirm_buttons'>   
                        <button onClick={handleCancelLogout}>Ok</button>
                    </div>
                </div>)}
           
           </div>
    )
    
} 
