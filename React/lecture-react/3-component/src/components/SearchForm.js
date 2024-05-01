import React from  "react";


// 함수 컴포넌트로 변경
const SearchForm = ({ value, onChange, onSubmit, onReset }) => {
    const handleSubmit = (event) => {
        // form이 제출 되면 서버로 다시 페이지 요청을 해서 화면이 갱신되는 것을 막음
        event.preventDefault();

        // props의 callback 함수 호출
        onSubmit(); 
    }

    const handleReset = () => {
        onReset();
    }

    const handleChangeInput = (event) => {
        onChange(event.target.value);
    }

    return (
        <form 
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                autoFocus
                value={value}
                onChange={handleChangeInput}
            /> 
            {value.length > 0 && (
                <button type="reset" className="btn-reset"></button>
            )}
        </form>
    )
}

export default SearchForm; 