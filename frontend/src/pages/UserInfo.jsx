
import { useParams, Link, json } from "react-router-dom";
import { useEffect, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Back from "../components/Back";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

export default function UserInfo() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [logs, setLogs] = useState([]);

    const role = JSON.parse(localStorage.getItem('user')).role;

    const getData = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/users/singleuser/${id}`);
        const json = await response.json();
        setUser(json);

    } 

    // const getData = async () => {
    //     const response = await fetch(`http://localhost:3001/api/users/singleuser/${id}`);
    //     const json = await response.json();
    //     setUser(json);
    // } 

    const getLogs = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/logs/${id}`);
        const json = await response.json();
        setLogs(json);
    }

    // const getLogs = async () => {
    //     const response = await fetch(`http://localhost:3001/api/logs/${id}`);
    //     const json = await response.json();
    //     setLogs(json);
    // }
    
    
    useEffect(() => {
        getData();
        getLogs();
        console.log(logs);
    }, [])

    return(
        
        <div>

            <div className='container'>
            <div className='info_buttons'>
                <Back />
                <div className='info_hover'> 
                    <Map location='User Info Screen'/>
                </div>
            </div>
            { role == 'System Admin' && <Link to={`/edituser/${id}`}><button className="button radius">Edit User</button></Link> }
                <div className='user_info'>
                    <p>Name: { user.name }</p>
                    <p>Email: { user.email }</p>
                    <p>Role: { user.role }</p>
                </div>
                <div className='logs'>
                    <h3 className='logs_title'>Logs</h3>
                    {logs.length  > 0 ?
                    <table className='logs_table'>
                        <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                                {logs.map((log) => {
                                    return(
                                        <tr key={log._id}>
                                            <td>{ log.ip }</td>
                                            <td>{formatDistanceToNow(new Date(log.createdAt), { addSuffix: true })}</td>
                                        </tr>
                                    )
                                })}       
                         </tbody>
                    </table> : 
                    <div>
                        <h4>User is yet to login</h4>
                    </div>
                    }   
                </div>
            </div> 
        </div>
    )
}