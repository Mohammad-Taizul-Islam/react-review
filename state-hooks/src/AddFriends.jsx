import React, {useState} from 'react'

const AddFriends = () => {
    const [friends, setFriends] = useState(["Totul","Tabu","mamun"]);

    const addFriend = () => {
        const newFriend = prompt("Enter the name of a friend");
        setFriends([...friends, newFriend]);
    }
    const removeFriend = () => {
        const removeFriend = prompt("Enter the name of a friend to remove");
        setFriends(friends.filter(friend => friend !== removeFriend));
    }
    const updateFriend = () => {
        const oldFriend = prompt("Enter the name of a friend to update");
        const newFriend = prompt("Enter the new name of the friend");
        setFriends(friends.map(friend => friend === oldFriend ? newFriend : friend));
    }
    

  return (
    <div>
        <h1>Friends List</h1>
        <ul>
            {friends.map((friend, index) => (
                <li key={index}>{friend}</li>
            ))}
        </ul>
        <button onClick={addFriend}>Add Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
        <button onClick={updateFriend}>Update Friend</button>
    </div>
  )
}

export default AddFriends

