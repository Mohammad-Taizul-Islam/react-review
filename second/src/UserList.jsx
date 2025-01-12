

const UserList = () => {
    const users= [{id: 1 , name : 'Alice', age : 28},
    {id: 2 , name : 'John', age : 30},
    {id: 3 , name : 'Doe', age : 25},
    {id: 4 , name : 'Jane', age : 24},
    ]
  return (
    <div>
      {
        users.map((user) => (
          <ul key={Math.random()}>
            <li>
              <h2>{user.name}</h2>
              <p>{user.age}</p>
            </li>
            </ul>
        ))             
      }
    </div>
  )
}

export default UserList
