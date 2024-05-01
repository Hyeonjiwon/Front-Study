import React from  "react";

export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "",
        };
    }

    handleSubmit(event) {
        // form이 제출 되면 서버로 다시 페이지 요청을 해서 화면이 갱신되는 것을 막음
        event.preventDefault();

        // props의 callback 함수 호출
        this.props.onSubmit(this.state.searchKeyword); 
    }

    handleReset() {
        this.props.onReset();
    }

    handleChangeInput(event) {
        const searchKeyword = event.target.value;

        if(searchKeyword.length <= 0 ) {
            this.handleReset();
        }

        this.setState({ searchKeyword }); // searchKeyword 갱신
    }

    render() {
        // 
        return (
            <form 
                onSubmit={(event) => this.handleSubmit(event)}
                onReset={() => this.handleReset()}
            >
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    autoFocus
                    value={this.state.searchKeyword}
                    onChange={(event) => this.handleChangeInput(event)}
                /> 
                {this.state.searchKeyword.length > 0 && (
                    <button type="reset" className="btn-reset"></button>
                )}
            </form>
        );
    }
}
