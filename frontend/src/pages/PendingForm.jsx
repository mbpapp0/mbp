import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function PendingForm() {

    const user =  JSON.parse(localStorage.getItem('user'));
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
  
    const getClients = async () => {
        setLoading(true)
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/clients/${user.branch}`);
        const json = await response.json();
        
        const filteredData = json.filter(item => item.status === 'Pending Approval');
        setData(filteredData);
        setLoading(false);
    }
    
    useEffect(() => {
      getClients();
    }, [])
    
    if(loading){
      return <h2 style={{textAlign: 'center'}}>Loading...</h2>
    }

return(
  <div className='container'>
    <h2 style={{marginBlock: '2rem'}}>IEG Forms Pending Approval</h2>
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
                                    
                                    <td><Link to={`/clients/${client._id}`}><button className='button radius' style={{paddingInline: '1rem'}}>View</button></Link></td>
                                    <td><Link to={`/signform/${client._id}`}><button className='button radius' style={{paddingInline: '1rem'}}>Print Form</button></Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
  </div>
)
}
