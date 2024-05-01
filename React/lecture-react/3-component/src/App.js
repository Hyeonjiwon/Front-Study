import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      // SearchForm 컴포넌트 내부에 갖혀 있는 상태
      // 여러 컴포넌트가 동일한 데이터에 의존하고 있음
      // 이런 경우 가까운 부모 컴포넌트로 state를 끌어올리는 것이 좋다. => App.js로 이동
      searchKeyword: "",  
    };
  }

  handleChangeInput(searchKeyword) {
    if(searchKeyword.length <= 0) { // 검색어 지우면 reset 
      this.handelReset();
    }

    this.setState({ searchKeyword: searchKeyword });
  }
  
  search(searchKeyword) {
    console.log("TODO: search", this.state.searchKeyword);
  }

  handelReset() {
    console.log("TODO: handleReset");
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm 
            value={this.state.searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handelReset()}
          /> 
        </div>
      </>
    );
  }
}