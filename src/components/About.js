import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        return (
            <div>
                <h1>About us</h1>
                <UserClass />
                <UserContext.Consumer>
                    {(data) => <h1>Global Data : {data.loggedInUser} </h1>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default About;

