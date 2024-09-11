import React from "react";

import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("parent constructor")
    }

    componentDidMount() {
        console.log("parent did mount");
    }

    render() {
        console.log("parent render");
        return (
            <div>
                <h1>About us</h1>
                <UserClass name={"first"} location={"Madurai"} />
                <UserClass name={"second"} location={"USA"} />
                <UserClass name={"third"} location={"USA"} />
            </div>
        )
    }
}

export default About;

/***
 * 
 *  pc
 *  pr
 *  cc 
 *  cr
 *  cm
 *  cc
 *  cr
 *  Dom Update - In single Batch
 *  cm
 *  pm
 * 
 * 
 */