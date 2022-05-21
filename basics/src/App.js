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
    const { karakter, searchField } = this.state;
    const filteredKarakter = karakter.filter((karakter) =>
      karakter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="cari karakter...."
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList karakter={filteredKarakter} />
      </div>
    );
  }
}

export default App;
