import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container ">
        <div>
          Select a language:
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
          {this.state.language}
          <UserCreate />
        </div>
      </div>
    );
  }
}

export default App;
