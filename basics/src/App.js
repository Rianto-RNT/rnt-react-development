import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      karakter: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ karakter: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Ryan">
          {this.state.karakter.map((karakter) => (
            <h4 key={karakter.id}>{karakter.name}</h4>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
