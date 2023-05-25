import ViewIcon from '../icons/view.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Error from './Error';
import Map from '../components/Map';
import InfoCard from '../components/InfoCard';


export default function DataAdminMainScrreen() {
    const [branches, setBranches] = useState([]);
    const [click, setClick] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const [id, setId] = useState(null);


    if(user.role != 'Data Admin'){
        return <Error />
    }

    const getBranches = async () => {
        const response = await fetch('https://mbp-server.onrender.com/api/branches');
        // const response = await fetch('http://localhost:3001/api/branches');
        const data = await response.json();
        setBranches(data);
    }

    useEffect(() => {
        getBranches()
    }, [])
    
    return(
        <>

            <div className='container'>
            <div className='info_hover'> 
                    <Map location='Data Administrator Main Screen'/>
                    <InfoCard description='This is the Data Adminstration Screen, You can preview all the previously created Branches and the users within them, you can also set and modify all the eligibility criteria for each branch'/>
                </div>
                { click && <div className='guide_confirm'>
                    <h4 className='guide_confirm_title'>Which Guidelines You Want To View?</h4>
                    <div className='guide_confirm_buttons'>    
                        <Link to={`/datafree/${id}`}><button>Free Meals</button></Link>
                        <Link to={`/datared/${id}`}><button>Reduced Price Meals</button></Link>
                        <a onClick={() => setClick(false)}>[Cancel]</a>
                    </div>
                </div>}
                <h2 className="block">Branches</h2>
                <div className="branch_list">

                    {branches.map((branch) => { 
                        return( <div className="view_branch space_between align" key={branch._id}>
                        <p className="view_branch_name">{branch.name}</p>
                        <div className='branch_list_buttons'>
                            <Link to={`/branch/${branch._id}`}>
                            <button className="button radius view_button align"><img className='view_img' src={ViewIcon} />View</button>
                            </Link>
                            <button className="button radius block" onClick={() => {
                                setClick(true)
                                setId(branch._id);
                            }}>View Eligibility Guidelines</button>
                        </div>
                    </div>)
                    })}       
                </div>
            </div>
        </>
    )
}