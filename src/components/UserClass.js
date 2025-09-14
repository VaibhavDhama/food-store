import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                login : "Dummy",
                url: "Default",
            }
        }
        console.log(this.props.name + "child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name + "child component did mount");

        // api call
        const data = await fetch("https://api.github.com/users/VaibhavDhama");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })

        console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render(){
        console.log(this.props.name + "child render");

        const {login,url} = this.state.userInfo;

        return(
            <div className="user-card">
                <h2>UserName: {login}</h2>
                <h3>url: {url}</h3>
                <h4>Contact: 9634964109</h4>
            </div>
        )
    }
}

export default UserClass;