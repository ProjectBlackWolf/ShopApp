import React from 'react';

const Users = () => {
  const [users, setUsers] = useState();
  
  return (
    <article>
      <h2>Users List</h2>
      {users?.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.email}</p>
              <p>{user.username}</p>
              <p>{user.password}</p>
              <p>{user.name}</p>
              <p>{user.address}</p>
              <p>{user.phone}</p>
            </div>
          );
        })
      ) : (
        <p>No users found</p>
      )}
    </article>
  )
}

export default Users