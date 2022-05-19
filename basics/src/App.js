import { Component } from "react";
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
        {this.state.karakter.map((karakter) => (
          <h4 key={karakter.id}>{karakter.name}</h4>
        ))}
      </div>
    );
  }
}

export default App;
