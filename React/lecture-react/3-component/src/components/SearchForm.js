import React from  "react";

export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "",
        };
    }

    handleChangeInput(event) {
        const searchKeyword = event.target.value;
        this.setState({ searchKeyword }); // searchKeyword 갱신
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    autofocus
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
