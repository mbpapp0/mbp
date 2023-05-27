import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react'

export default function Header() {
    const user = localStorage.getItem('user');

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

             if (elapsedTime>= 5) {
                 localStorage.removeItem('lastLoginTime');
                 logout();
             } 
           }
         }
    
    usEffect(() => {
      checkLogoutTime();
    }, [])

    return (
        <div className="header">
             <Link to='/'><h1 className="logo">MBP</h1></Link>
             { user && <button className='button radius' onClick={logout}>Logout</button> }
        </div>
    )
}
