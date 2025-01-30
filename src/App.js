import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  state = { currentUseer: { name: "Mike" } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUseer}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
