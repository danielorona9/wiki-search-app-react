import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import RandomSearch from "./components/RandomSearch/RandomSearch";
import SearchBar from "./components/SearchBar/SearchBar";
import ShowList from "./components/ShowList/ShowList";
import fetchJsonp from "fetch-jsonp";
import { Container, Divider, Segment } from "semantic-ui-react";

class App extends React.Component {
  state = {
    articles: [],
    selectedArticle: null,
    fetchSuccess: null
  };

  onSearchSubmit = searchTerm => {
    fetchJsonp(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&continue=-%7C%7C&srsearch=${searchTerm}&srnamespace=0&srlimit=10&sroffset=20&srinfo=&srprop=snippet`,
      {
        jsonpCallbackFunction: "searchResults"
      }
    )
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        networkError => console.log(networkError.message)
      )
      .then(data => {
        this.setState({ articles: data.query.search, fetchSuccess: true });
      })
      .catch(e => {
        console.log(e);
        this.setState({ fetchSuccess: false });
      });
  };

  onArticleSelect = article => {
    this.setState({ selectedArticle: article });
  };

  render() {
    return (
      <Container>
        <Title />
        <Segment basic textAlign={"center"}>
          <RandomSearch />
          <Divider horizontal className="textDivColor">
            Or
          </Divider>
          <SearchBar onFormSubmit={this.onSearchSubmit} />
        </Segment>
        <ShowList
          articles={this.state.articles}
          onArticleSelect={this.onArticleSelect}
          fetchSuccess={this.state.fetchSuccess}
        />
      </Container>
    );
  }
}
export default App;