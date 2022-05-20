import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      karakter: [],
      searchField: "",
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
        <input
          type="search"
          placeholder="cari karakter...."
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList karakter={this.state.karakter} />
      </div>
    );
  }
}

export default App;
