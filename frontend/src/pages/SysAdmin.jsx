import newbranch from '../icons/newbranch.png'
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import View from '../icons/view.png';
import Trash from '../icons/trash.png';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


export default function SysAdmin() {
    const [branches, setBranches] = useState([]);
    const [branchName, setBranchName] = useState('');
    const [clicked, setClicked] = useState(false);
    const [id, setId] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    if(user.role != 'System Admin'){
        return <Error />
    }




    const getBranches = async () => {
        const response = await fetch('https://mbp-server.onrender.com/api/branches');
        // const response = await fetch('http://localhost:3001/api/branches');
        const data = await response.json();
        setBranches(data);
    }

    const deleteBranch = async (id) => {
        const response = await fetch(`https://mbp-server.onrender.com/api/branches/${id}`, {
            method: 'DELETE'
        });

        // const response = await fetch(`http://localhost:3001/api/branches/${id}`, {
        //     method: 'DELETE'
        // });

        if(response.ok){
            const newBranches = branches.filter((branch) => branch._id !== id);
            setBranches(newBranches);
            setClicked(false);
        }
    }

    useEffect(() => {
        getBranches();
    }, []);

    return(
        <>

            <div className="container sysadmin">
                { clicked && <div className='confirm'>
                    <h5>Are You Sure You Want to Delete {branchName} Branch?</h5>
                    <div className='confirm_buttons'>    
                        <button onClick={() => deleteBranch(id)} >Confirm</button>
                        <button onClick={() => setClicked(false)}>Cancel</button>
                    </div>
                </div>
                }
            <div className='info_hover'> 
                <Map location='System Administration Main Screen'/>
                <InfoCard description='This is the System Adminstration Screen, You must create a Branch, then you can create users and assign roles to each users, preview, edit and delete users in each branch'/>    
            </div>
                <h2 className="block1x">System Adminstrator</h2>
                <h4 className="block1x">Branches</h4>
                <Link to='/sysbranch'>
                    <button className="button radius flex align new_branch_button">
                        <img className='view_img'src={newbranch}/>Create New Branch 
                    </button>
                </Link>
                {branches.map((branch) => {
                    return (
                        <div className="view_branches" key={branch._id}>
                            <p>{ branch.name }</p>
                            <div className="view_branches_btn_container">
                            <Link to={`/branch/${branch._id}`}>
                                <button className="button radius special_pad">
                                    <img className='view_img' src={View} />
                                    View Users
                                </button>
                            </Link>
                        <button className="button radius" onClick={() => {
                            setId(branch._id)
                            setClicked(true)
                            setBranchName(branch.name)
                        }} disabled={clicked}>
                            <img className='view_img' src={Trash}/>
                            Delete Branch
                        </button> 
                    </div>
                </div>)
                })}
            </div>
        </>
    )
}