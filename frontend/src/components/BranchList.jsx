import View from '../icons/view.png'
import Trash from '../icons/trash.png'
import { Link } from 'react-router-dom'

export default function BranchList({ branch, deleteBranch }) {
    return(
        <div className="view_branches">
                    <p>{ branch.name }</p>
                    <div className="view_branches_btn_container">
                        <Link to={`/branch/${branch._id}`}>
                            <button className="button radius special_pad">
                                <img className='view_img' src={View} />
                                View Users
                            </button>
                        </Link>
                        <button className="button radius" onClick={() => deleteBranch(branch._id)}>
                            <img className='view_img' src={Trash}/>
                            Delete Branch
                        </button> 
                    </div>
                </div>
    )
}