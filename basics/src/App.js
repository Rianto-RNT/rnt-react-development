import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      karakter: [
        {
          id: "001",
          nama: "Iron Man",
        },
        {
          id: "002",
          nama: "Ronin",
        },
        {
          id: "003",
          nama: "Gundala",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.karakter.map((karakter) => (
          <h4 key={karakter.id}>{karakter.nama}</h4>
        ))}
      </div>
    );
  }
}

export default App;
