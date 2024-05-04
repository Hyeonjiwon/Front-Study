import React from "react";
import List from "./List.js"
import store from "../Store.js"
import { formatRelativeDate } from "../helpers.js";

// 조합 : 클래스 컴포넌트로 변경
export default class HistoryList extends React.Component {
    constructor() {
        super();

        this.state = {
            historyList: [],
        }
    }

    // React.Component componentDidMount 오버라이딩
    componentDidMount() {
        this.fetch();
    }

    handleClickRemove(keyword) {
        store.removeHistory(keyword);
        this.fetch();
    }

    fetch() {
        const historyList = store.getHistoryList();

        this.setState({
            historyList, // store에서 키워드 목록을 가져와 state로 업데이트하고 render 함수 호출
        });
    }

    render() {
        return (
            <List 
                data={this.state.historyList}
                onClick= {this.props.onClick}
                hasDate={true}
                onRemove={(keyword) => this.handleClickRemove(keyword)}
            />
        )
    }
}