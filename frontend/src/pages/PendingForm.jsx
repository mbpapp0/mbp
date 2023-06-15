import { useState, useEffect } from 'react';


export default function PendingForm() {
    const user = {branch: ''}
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
  
    const getClients = async () => {
        const response = await fetch(`https://mbp-server.onrender.com/api/clients/${user.branch}`);
        // const response = await fetch(`http://localhost:3001/api/clients/${user.branch}`);
        const json = await response.json();
        
        const filteredData = json.filter(item => item.status === 'Pending Approval');
        setData(filteredData);
        setLoading(false);
    }

return(
  <div>

  </div>
)
}
