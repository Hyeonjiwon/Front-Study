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

    handleClickRemoveHistory(event, keyword) {
        // 이벤트 전파 막기
        // List에 li 엘리먼트도 핸들러가 있기 때문에 차단
        event.stopPropagation();;
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
                onClick={this.props.onClick}
                renderItem={(item) => {
                    return (
                        <>
                            <span className="date">{formatRelativeDate(item.date)}</span>
                            <span>{item.keyword}</span>
                            <button type="reset" className="btn-reset" onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}></button>
                        </>
                    )
                }}
            />
        )
    }
}