import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // state variable
        this.state = {
            count: 0,
        }
        console.log(this.props.name + "child constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "child component did mount")
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        console.log(this.props.name + "child render")
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <p>Contact : bcyogesh@gmail.com</p>
                <h1>Count : {count}</h1>
                <button type="button" onClick={() => {
                    // never update state variable directly in class component
                    this.setState({
                        count: count + 1
                    })
                }}>Increment</button>
            </div>
        );
    }
}


export default UserClass;

