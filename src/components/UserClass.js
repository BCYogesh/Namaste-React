import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'local',
                location: 'Chennai'
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/BCYogesh");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });



    }


    componentWillUnmount() {
        console.log('Component will unmount');

    }


    render() {

        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <img src={avatar_url}></img>
                <h3>Location : {location}</h3>
                <p>Contact : bcyogesh@gmail.com</p>
            </div>
        );
    }
}


export default UserClass;




