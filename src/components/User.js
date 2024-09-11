import { useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Madurai</h3>
            <p>Contact : bcyogesh@gmail.com</p>
            <h1>Count : {count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default User;