import React from "react";
import List from "./List.js"
import store from "../Store.js"

// 클래스 컴포넌트로 
// 리스트 컴포넌트가 조합 형태로 변경되어 state가 없음 
export default class KeywordList extends React.Component {
    constructor() {
        super();

        this.state = {
            keywordList: [],
        }
    }

    componentDidMount() {
        const keywordList = store.getKeywordList();
        this.setState({ keywordList });
    }

    render() {
      return (
        <List 
            data={this.state.keywordList} 
            onClick={this.props.onClick} 
            renderItem={(item, index) => { // Render Props = ui를 그리는 용도로 사용하는 props 
                // 사용하는 측에서 React Element({})를 사용하도록 했기 때문에 
                // React Element를 반환해야 함
                return (
                    <>
                        <span className="number">{index + 1}</span>
                        <span>{item.keyword}</span>
                    </>
                )
            }}
        />
      )
    }
}

