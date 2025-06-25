import React, { use } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        email: "dummy@example.com",
        avatar_url: "https://via.placeholder.com/150"
      },
    };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Shahin178");
    const json= await data.json();
    console.log(json);
 
    this.setState({
      userInfo: json
    })
  }

  render() {

    const { name, location, email, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} className="avatar"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: {email}</h4>
      </div>
    );
  }
}

export default UserClass;
