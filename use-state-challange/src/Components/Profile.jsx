import React, { useState } from "react";
import { use } from "react";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !age) return;
    const newProfile = {
        name,
        age : parseFloat(age)
    }
    setProfiles((prevProfile)=>[...prevProfile,newProfile]);
    setName("");
    setAge("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Your Age"
        />
        <button type="submit">Add Profile</button>
      </form>

      <ul>
        {
            profiles.map((profile,index)=>(
                <li key={index}> {profile.name}---{profile.age} </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Profile;
