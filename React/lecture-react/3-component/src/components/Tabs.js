import React from "react";

export const TabType = {
    KEYWORD: 'KEYWORD',
    HISTORY: 'HISTORY'
}

export const TabLabel = {
    [TabType.KEYWORD]: '추천 검색어',
    [TabType.HISTORY]: '최근 검색어'   
}

// App 컴포넌트는 선택한 탭에 따라 추천 검색어, 최근 검색어 목록을 노출하기 때문에
// Tab 정보를 Tabs 컴포넌트 내부에서 관리하는 것 보다 App 컴포넌트에서 관리하는 것이 더 나음
// App 컴포넌트에서 Tabs 컴포넌트로 정보를 props로 전달
const Tabs = ({ selectedTab, onChange }) => { // props로 callback 함수 onChange 받기
    return (
        <>
            <ul className="tabs">
                {Object.values(TabType).map((tabType) => (
                    <li key={tabType}
                        className={selectedTab === tabType ? "active" : ""}
                        onClick={() => onChange(tabType)}  // 외부에 tab이 선택되었다는 것을 알리기
                    >
                        {TabLabel[tabType]}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Tabs;