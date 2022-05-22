import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { karakter, searchField } = this.state;
    const filteredKarakter = karakter.filter((karakter) =>
      karakter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>RNT Characters</h1>
        <SearchBox
          placeholder="Cari Karakter..."
          handleChange={this.handleChange}
        />
        <CardList karakter={filteredKarakter} />
      </div>
    );
  }
}

export default App;
