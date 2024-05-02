import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import store from "./Store.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      searchKeyword: "",  
      searchResult: [], // 검색 결과
      submitted: false, // 검색 유무
    };
  }

  handleChangeInput(searchKeyword) {
    if(searchKeyword.length <= 0) { // 검색어 지우면 reset 
      this.handelReset();
    }

    this.setState({ searchKeyword: searchKeyword });
  }
  
  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      submitted: true,
    })
  }

  handelReset() {
    // 초기화
    this.setState({
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    })
  }

  render() {
    const {} = this.state;

    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm 
            value={this.state.searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={() => this.search(this.state.searchKeyword)}
            onReset={() => this.handelReset()}
          /> 
          <div className="content">
            {this.state.submitted && <SearchResult data={this.state.searchResult} />}
          </div>
        </div>
      </>
    );
  }
}