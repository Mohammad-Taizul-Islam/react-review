import React from 'react'

const ProfileCard = () => {
    const ProfileCardStyle = {backgroundColor : "lightGrey", padding : '15px', color:'black',borderRadius:'8px' }
  return (
    <div style={ProfileCardStyle}>
      <h1>Title</h1>
      <p>Descriptions</p>
    </div>
  )
}

export default ProfileCard
