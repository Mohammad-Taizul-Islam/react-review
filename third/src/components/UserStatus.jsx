
const UserStatus = ({loggenIn,isAdmin}) => {
  return (
    <div>
      {loggenIn && isAdmin ? <h1>Welcome Admin</h1>: <h1>Welcome User</h1>}
    </div>
  )
}

export default UserStatus
