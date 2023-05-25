import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Map from '../components/Map';
import Back from '../components/Back';
import InfoCard from '../components/InfoCard';

export default function BranchUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [free, setFree] = useState(null);
    const [reduced, setReduced] = useState(null);
    const [data, setData] = useState([]);

    if(user.role != 'Branch User'){
        return <Error />
    }

    const [branchName, setBranchName] = useState('');
    const [click, setClick] = useState(false);

    const getBranchName = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/branches/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/branches/${user.branch}`);
        const json = await response.json();
        setBranchName(json.name); 
    }

    const getFreeMeal = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/freemeals/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/freemeals/${user.branch}`);
        const json = await response.json();
        setFree(json[0]);
    }

    const getReducedMeal = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/reducedmeals/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/reducedmeals/${user.branch}`);
        const json = await response.json();
        setReduced(json[0]);
    }

    const getClients = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/clients/${user.branch}`);
        const json = await response.json();
        setData(json);
    }

    
    useEffect(() => {
        getBranchName();  
        getFreeMeal();
        getReducedMeal();
        getClients();
    }, []);


    if(!free || !reduced){
        return (
        <div className='container'>
                <div className='info_hover'> 
                    <Map location='Branch User Main Screen'/>
                </div>
            <div className='contact_admin'>
                <h4>Please Contact a Data Admin to Set the guidelines for this branch</h4>
            </div>
        </div>
        )
    }


    return(
        <>
        <div className='container'>
                <div className='info_hover'> 
                    <Map location='Branch User Main Screen'/>
                    <InfoCard description='This is the Branch User Screen, You can sign up clients, preview previously submitted client forms and preview both free and reduced price eligibility guidlines' />
                </div>
            { click && <div className='guide_confirm'>
                    <h4 className='guide_confirm_title'>Which Guidelines You Want To View?</h4>
                    <div className='guide_confirm_buttons'>    
                        <Link to={`/datafree/${user.branch}`}><button>Free Meals</button></Link>
                        <Link to={`/datared/${user.branch}`}><button>Reduced Price Meals</button></Link>
                        <a onClick={() => setClick(false)}>[Cancel]</a>
                    </div>
            </div>}
        
                <div className='space_between align branch_title'>
                    <h3 className='branch_name'>{ branchName } Branch</h3>
                    <div>
                        {/* <button className='button right radius'>Generate Report</button> */}
                        <button className='button radius' onClick={() => setClick(true)}>View Eligibility Guidellines</button>
                    </div>
                </div>

                <h3 className='block branch_subhead'>Submitted Client Forms</h3>
                <div className='flex_button'>                    
                    <Link to={`/client/${user.branch}`}><button className='button radius bottom'>Add Client</button></Link>
                    <Link to={`/roster/${user.branch}`}><button className='button radius bottom'>View Roster</button></Link>
                </div>

                <table className='submitted_forms table_block'>
                    <thead>
                        <tr>                        
                            <th>Print Name</th>
                            <th>Child Name</th>
                            <th>Eligibility</th>
                            <th>Date Submitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data && data.map((client) => {
                            return(
                                <tr key={client._id}>
                                    <td>{ client.printName }</td>
                                    <td>{ client.childOneName }</td>
                                    <td>{ client.eligibility }</td>
                                    <td>{client.date }</td>
                                    <td><Link to={`/clients/${client._id}`}><button className='button radius'>View</button></Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


        </div>
        </>
    )
}