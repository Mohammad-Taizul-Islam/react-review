import React from 'react'

const UserStatus = ({loggedIn,IsAdmin}) => {
  return (
    <div>
      {loggedIn && IsAdmin ? <h1>Welcome Admin</h1>:<h1>Welcome User</h1>}
      
    </div>
  )
}

export default UserStatus
