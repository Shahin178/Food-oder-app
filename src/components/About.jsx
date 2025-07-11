import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        About Us Page
        <UserClass
          name="First"
          location="Delhi"
          email="shabnambano@gmail.com"
        />
        <div>
        <UserContext.Consumer>
        { ({loggedInUser}) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
        </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
