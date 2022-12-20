import Logo from '../assets/Logo.png';
import Close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const { logout } = useLogout();

    return(
       <header className="header"> 
        <div className="logo">
            <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </div>

            <div className="menu" onClick={() => setMenuOpen(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>


        <div className="header_buttons hide_for_mobile">
            <div className='header_user'>
                { !user && 
                    <>
                        <Link to='/login'>Login</Link>
                        {"  |  "}
                        <Link to='/signup'>Register</Link>
                    </>
                }
            </div>
            <div className='menu_buttons'>
                {user &&
                    <>
                        <Link to={`/account/${user.id}`}>My Listings</Link>
                        <Link to='/createlisting'><button className='header_sell button'>Post an Ad</button></Link>
                        <button className='button' onClick={logout}>Logout</button>
                    </>
                }
            </div>
        </div>

{
    menuOpen && 
    <div className="menu_open hide_for_desktop">
    <img src={Close} alt='close' className='close_button' onClick={() => setMenuOpen(false)}/>
    <div className='menu_open_buttons'>
        { !user && 
        <>
        <Link to='/login' onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to='/signup' onClick={() => setMenuOpen(false)}>Register</Link>
        </>
        }
        {user &&
        <>
        <Link to={`/account/${user.id}`}>My Listings</Link>
        <Link to='/createlisting'><button className='button' onClick={() => setMenuOpen(false)}>Post an Ad</button></Link>
        <button className='button' onClick={() => {
            logout()
            setMenuOpen(false)
        }}>Logout</button>
        </>
        }
    </div>
</div>
}
        
       </header>
    )
}