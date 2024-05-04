import React from "react";
import { formatRelativeDate } from "../helpers.js";

// 조합: 특수화
const List = ({ 
    data = [], 
    onClick, 
    hasIndex = false, 
    hasDate = false, 
    onRemove,
}) => {

    const handleClickRemove = (event, keyword) => {
        // 이벤트 전파 막기
        // List에 li 엘리먼트도 핸들러가 있기 때문에 차단
        event.stopPropagation();
        onRemove(keyword);
    }

    // props에 따라 조건부 랜더링 할 수 있도록 변경 
    return (
        <ul className="list">
            {data.map((item, index) => { // store에서 데이터를 가져와야 함
                return (
                    <li key={item.id} onClick={() => onClick(item.keyword)}>
                        {/* KeywordList, HistoryList의 renderItem. render porps를 여기로 옮김. */}
                        {/* props에 따라 조건부 랜더링 */}
                        {hasIndex && <span className="number">{index + 1}</span>}
                        <span>{item.keyword}</span>

                        {hasDate && (
                            <span className="date">{formatRelativeDate(item.date)}</span>
                        )}

                        {/* onRemov가 함수여서 boolean 값으로 평가하기 위해 부정연산 두개 */}
                        {!!onRemove && (
                            <button
                                className="btn-remove" 
                                onClick={(event) => handleClickRemove(event, item.keyword)}
                            />
                        )}
                    </li>
                );
            })}
        </ul>  
    )
}

export default List;