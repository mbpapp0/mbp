import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

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

  return (
    <div className='container'>
      <div>
        {users.map(user => (
          <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>{user.name}</h4>
            <button className="button radius">View User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
