import React from "react";
import List from "./List.js"
import store from "../Store.js"
import { formatRelativeDate } from "../helpers.js";

// renderItem 구현
export default class HistoryList extends List {
    // React.Component componentDidMount 오버라이딩
    // 컴포넌트가 DOM에 마운트 된 직후에 호출
    componentDidMount() {
        this.fetch(); // 리팩토링
    }

    fetch() {
        const data = store.getHistoryList();

        this.setState({
            data,  // store에서 키워드 목록을 가져와 state로 업데이트하고 render 함수 호출 -> 이때 자식의 renderItem이 호출
        })
    }
    
    handleClickRemoveHistory(event, keyword) {
        // 이벤트 전파 막기
        // List에 li 엘리먼트도 핸들러가 있기 때문에 차단
        event.stopPropagation();;
        store.removeHistory(keyword);

        this.fetch();
    }

    renderItem(item) {
        return (
            <>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <span>{item.keyword}</span>
                <button type="reset" className="btn-reset" onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}></button>
            </>
        )
    }
}