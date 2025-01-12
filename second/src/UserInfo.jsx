import React from 'react'

const UserInfo = () => {
    const userInfo  =[{
        name: 'John Doe',
        email: 'd@gmail.com',
        location: 'USA',
    },{
        name: 'Jane Doville',
        email:'jdl@gmail.com',
        location: 'Canada',
    },
    {
        name: 'Don Joe',
        email:' donj@gmail.com',
        location: 'Mexico',
    }];

  return (
  <main>
    {
        userInfo.map((user) => (
            <ul key={Math.random()}>
                <li>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.location}</p>
                </li>
            </ul>))
    }
  </main>
  );
}

export default UserInfo
