import React from "react";
import List from "./List.js"
import store from "../Store.js"

// 클래스 컴포넌트로 
// List 컴포넌트가 조합 형태로 변경되어 state가 없음 
// 그래서 KeywordList가 keywordList 관리
export default class KeywordList extends React.Component {
    constructor() {
        super();

        this.state = { 
            keywordList: [],
        }
    }

    // React.Component componentDidMount 오버라이딩
    componentDidMount() {
        const keywordList = store.getKeywordList();
        this.setState({ keywordList });
    }

    render() {
      return (
        <List 
            data={this.state.keywordList} 
            onClick={this.props.onClick}
            hasIndex={true}
        />
      )
    }
}

