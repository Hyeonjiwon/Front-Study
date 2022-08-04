react tutorial : https://reactjs.org/tutorial/tutorial.html


## react_project1

### index.js
```javascript
ReactDOM.render(
	<React.StrictMode>
	<App />
	</React.StrictMode>,
	document.getElementById('root')
);
```

- render() : 화면에 출력하는 역할
- App : App 컴포넌트
- doucument.getElementById('root') : id가 root인 태그 내부에 App 컴포넌트를 넣는다 ???

### App.js

```javescript
import App from './App';
```

App 컴포넌트는 App.js에

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
``` 

App.js의 구성요소가 index.html <body> 태그 내부를 채워넣는 역할

## Test.js

```javascript
import React from 'react';

function Test() {
  return (
    <h1> Hello World! - Test</h1>
  );
}

export default Test; // 해당 컴포넌트를 다른 파일에서 import할 수 있도록
```

- function 은 컴포넌트를 생성하기위한 키워드
- ❗️컴포넌트명은 반드시 **첫글자가 대문자**
- return 은 화면에서 노출되길 원하는 html 

- 2개 이상의 컴포넌트를 하나의 페이지에서 render할 수 없음