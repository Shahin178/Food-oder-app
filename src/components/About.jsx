import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
      </div>
    );
  }
}

export default About;
