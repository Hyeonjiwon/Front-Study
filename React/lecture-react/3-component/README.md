### 컴포넌트를 재사용하는 방법
1. 상속
공통 로직을 부모 클래스가 갖도록 한다. 
전통적인 OOP 스타일의 상속 구조를 활용할 수 있어 익숙하다는 장점이 있다. 상속 단계가 많아지면 코드를 파악하는데 다소 어려울 수 있다는 단점이 있다. 
state에 반응하는 UI 코드가 상속 구조에 가려 잘 보이지 않을 수 있다. 리액트에서는 지양

    > React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용 하는 것이 좋습니다. 
> 

<br>

2. 조합: 컴포넌트 담기
함수를 조합하듯 컴포넌트를 조합하는 방식으로 코드 재활용을 권장한다. 리액트의 props를 활용해서 컴포넌트를 조합한다. 여기서는 렌더링 용도의 render props를 전달했다. 리액트 컴포넌트 자체를 전달해 조합할 수도 있다.

<br>

3. 조합: 특수화
props를 사용하는 방식이라는 점에서는 컴포넌트 담기와 같지만 접근방식의 차이가 있다.
KeywordList는 List 컴포넌트의 특수한 경우이다. List 컴포넌트에 좌측 순서가 있는 특수한 경우인 셈이다. HistoryList도 우측에 날짜와 버튼이 위치한 특수한 경우이다. 


---

### 최종정리
리액트 라이브러리의 특성인 리액티브 가상돔과 **강력한 추상화 도구인 컴포넌트**에 대해 알아 보았다. 

상태와 UI로 관리되는 화면 코드를 컴포넌트라는 개념으로 추상화한 것이다. 

- 상태가 필요하면 **클래스 컴포넌트**를 사용
- 상태가 필요 없으면 **함수 컴포넌트**를 사용

컴포넌트는 내부 state와 외부 props를 통해 리액티브한 UI를 만들 수 있다. 

컴포넌트를 작게 쪼개면 서로 격리시킬 수 있다는 장점이 있다. 하지만 어떤 경우에는 하나의 상태를 다른 컴포넌트에서도 사용하는 경우가 발생한다. 이럴 때는 가장 가까운 부모 컴포넌트로 **state를 끌어 올려** 해결할 수 있다. SearchForm에서 입력 데이터를 부모로 이동해 다른 컴포넌트를 제어하도록 개선했다. 

함수를 재활용하듯 **컴포넌트도 재활용**할 수 있다. 클래스 상속, 함수 조합 의 방법으로 코드를 재활용할 수 있다. 리액트에서는 함수를 조합하듯 컴포넌트를 조합하는 방식을 권장한다. 