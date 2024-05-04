import React from "react";

// 조합: 컴포넌트 담기
const List = ({ data = [], onClick, renderItem }) => { // renderItem이라는 render props을 받음
    return (
        <ul className="list">
            {data.map((item, index) => { // store에서 데이터를 가져와야 함
                return (
                    <li key={item.id} onClick={() => onClick(item.keyword)}>
                        {/* 추상메소드, props로 주입 */}
                        {/* renderItem이 반환하는 리액트를 담아서 컴포넌트를 조합하는 방식 */}
                        {renderItem(item, index)}
                    </li>
                );
            })}
        </ul>  
    )
}

export default List;