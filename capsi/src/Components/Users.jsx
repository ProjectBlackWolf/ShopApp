import React from 'react'

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
              <p>{user.name}</p> {/*
                        firstname:'elwood',
                        lastname:'curtis',
                        */}
              <p>{user.address}</p> {/*
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        */}
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