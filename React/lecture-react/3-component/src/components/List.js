import React from "react";

export default class List extends React.Component {
    constructor() {
        super(); // 부모 호출

        this.state = {
            data: [],
        }
    }

    // 추천 검색어, 최근 검색어 서로 상세 내용을 그리는 방법이 다름 -> 추상 메소드 생성
    renderItem(item, index) {
        throw "TODO: renderItem() 구현"; //  List 클래스를 상속받은 자식 클래스에서 renderItem() 구현 
    }

    render() {
      return (
        <ul className="list">
            {this.state.data.map((item, index) => { // store에서 데이터를 가져와야 함
                return (
                    <li key={item.id} onClick={() => this.props.onClick(item.keyword)}>
                        {this.renderItem(item, index)}
                    </li>
                );
            })}
        </ul>
      )
    }
}