import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import store from "./Store.js";
import Tabs, { TabType } from "./components/Tabs.js";
import KeywordList from "./components/KeywordList.js";
import HistoryList from "./components/HistoryList.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      searchKeyword: "",  
      searchResult: [], // 검색 결과
      submitted: false, // 검색 유무
      selectedTab: TabType.KEYWORD, // 선택된 Tab
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
      searchKeyword,
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
    const { searchKeyword, searchResult, submitted, selectedTab } = this.state;

    return (
      <>
        <Header title="검색" />
        <div className="container">
          <SearchForm 
            value={searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={() => this.search(searchKeyword)}
            onReset={() => this.handelReset()}
          /> 
          <div className="content">
            {/* 폼이 제출 되면 검색 결과가 보이고, 아니면 탭이 보여야 함 */}
            { submitted 
                ? <SearchResult data={searchResult} /> 
                : <>
                    {/* state가 변경 되면 render 메소드를 다시 실행 */}
                    <Tabs 
                      selectedTab={selectedTab} 
                      onChange={(selectedTab) => this.setState({selectedTab})}
                    />
                    {selectedTab === TabType.KEYWORD && <KeywordList onClick={(keyword) => this.search(keyword)} />}
                    {selectedTab === TabType.HISTORY && <HistoryList onClick={(keyword) => this.search(keyword)} />}
                  </>
            }
          </div>
        </div>
      </>
    );
  }
}