import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://mbp-server.onrender.com/api/users');
      const data = await response.json();

      const filteredUsers = data.filter(user => user.role !== 'Branch User');
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  if(user.role == 'Branch User'){
    window.location.assign('/');
  }

  return (
    <div className='container'>
      <div className='info_hover'> 
        <Map location='Admin Users Preview Screen'/>
        <InfoCard description='This is the Admin Users Preview Screen, Where you can see users with System or Data Adminstrator roles'/>    
       </div>
       <h2 className="block1x">Admin Users Lists</h2>
      <div>
        {users && users.map(user => (
          <div key={user._id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>{user.name}</h4>
            <button className="button radius">View User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
