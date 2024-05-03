import React from "react";
import List from "./List.js"
import store from "../Store.js"

// renderItem 구현
export default class KeywordList extends List {
    // 컴포넌트 라이프사이클 사용
    // React.Component를 상속받은 List를 상속 받았기 때문에 오버라이딩 가능
    // 컴포넌트가 DOM에 마운트 된 직후에 호출되는 메소드
    componentDidMount() {
        const data = store.getKeywordList();

        // List를 상속 받았기 때문에 내부에 data가 있음
        this.setState({
            data,  // store에서 키워드 목록을 가져와 state로 업데이트하고 render 함수 호출 -> 이때 자식의 renderItem이 호출
        })
    }

    renderItem(item, index) {
        return (
            <>
                <span className="number">{index + 1}</span>
                <span>{item.keyword}</span>
            </>
        )
    }
}

