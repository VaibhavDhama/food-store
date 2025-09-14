import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent component did mount");
    }

    render(){
        // console.log("parent render");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is About us page of our website</h2>
                {/* <User name={"Vaibhav Dhama (function)"} location={"baghpat"}/> */}
                <UserClass name={"Vaibhav Dhama (class)"} location={"baghpat"}/>
            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is About us page of our website</h2>
//             {/* <User name={"Vaibhav Dhama (function)"} location={"baghpat"}/> */}
//             <UserClass name={"Vaibhav Dhama (class)"} location={"baghpat"}/>
//         </div>
//     )
// }   

export default About;