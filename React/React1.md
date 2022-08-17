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

### Test.js

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


## 05. 다수 컴포넌트 render 하는 법

1. div 태그로 감싸주기
```javascript
root.render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
    </div>
  </React.StrictMode>
);
```

2. A 컴포넌트에 B 컴포넌트 포함시키기
```javascript
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      Hello World!
      <Test />
    </div>
  );
}

export default App;
```


## 06. JSX

- HTML + Javascript 조합
- React는 컴포넌트 단위 => 컴포넌트는 JSX로 구성
- js는 JSX를 분석하여 HTML 태그 생성

### JSX 규칙
1. 컴포넌트는 반드시 태그로 감싸야함
```javascript
function Test() {
  return(
    <div> Hi </div>
    
    // 어떤 태그로도 감싸고 싶지 않다면 Fragment 사용 
    <Fragment> Hi </Fragment>
  );
}
```

2. className 사용
"class= " 가 아닌 className 사용
```javascript
function Test() {
  return(
    <div className="myDiv"> Hi </div>
  );
}
```

3. 단독태그 사용 불가

```javascript
function Test(){
	return (
		<div>
			Hello World
      <input></input>
      <br></br>
			</div>
	);
}
```

## 07. props - 데이터 전달 방식
- index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();

```

- Test.js
```javascript
import React from 'react';

function Test(data) {
  console.log(JSON.stringify(data));
  return (
    <div> Test </div>
  );
}

export default Test; 
```

- App.js
```javascript
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      App
      <Test myParam="mydata"/> // Test 컴포넌트에 "myParam" 이라는 key에 "mydata"라는 value를 담아 보낸다.
    </div>
  );
}

export default App;
```

- JSON 형태로 출력
<img width="938" alt="스크린샷 2022-08-17 오후 9 46 30" src="https://user-images.githubusercontent.com/47733530/185132198-a9fad7af-970a-48ed-b081-889e835954ce.png">

### const 
전달 받은 값을 상수로 저장해 사용하기

- index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();

```

- Test.js
```javascript
import React from 'react';

function Test(data) {
  console.log(JSON.stringify(data));
  const {myParam} = data

  return (
    <div> Test {myParam}</div>
  );
}

export default Test; 
```

- App.js
```javascript
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      App
      <Test myParam="mydata1"/>
      <Test myParam="mydata2"/>
    </div>
  );
}

export default App;
```

<img width="939" alt="스크린샷 2022-08-17 오후 9 50 19" src="https://user-images.githubusercontent.com/47733530/185134577-be255e60-9571-42ce-ae7f-3532a503952e.png">


### 일밙 props 대입
props 그대로 사용하는 방법

- index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();

```

- Test.js
```javascript
import React from 'react';

function Test({myParam}) {
  return (
    <div> Test {myParam}</div>
  );
}

export default Test; 
```

- App.js
```javascript
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      App
      <Test myParam="mydata1"/>
      <Test myParam="mydata2"/>
    </div>
  );
}

export default App;
```

- props를 그대로 받아 사용하려면, 매개변수로 받을 때, {}를 통해 받음


## 08. 복수 props
#### 1.전달하는 쪽 컴포넌트 (=부모 컴포넌트)

부모 컴포넌트에서 복수 개의 props 를 넘기는 방법

- 단일 props
```javascript
<Test myParam="First animal"/>
<Test myParam="Second animal"/>
```

```javascript
<Test myParam="First animal" animal="dog"/>
<Test myParam="Second animal" animal="cat"/>
```

❗️복수 props의 경우, 콤마(,) 없이 띄어쓰기로 구분
❗️문자열이 아닌 숫자 or boolean형을 넘길 경우, 큰따옴표("")없이 중괄호({}) 사용

```javascript
<Test myParam="Third animal" animal="cow" number={1}/>
<Test myParam="Third animal" animal="cow" flagTrue={true} flasgFalse={false} abc="aa"/>
```

```javascript
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function App() {
  return (
    <div>
      App
      <Test myParam="First animal" animal="dog"/>
      <Test myParam="Second animal" animal="cat"/>
    </div>
  );
}

export default App;
```

#### 2. 전달받은 쪽 컴포넌트 (=자식 컴포넌트)
매개변수를 받는 두가지 방법

1. props 명으로 받는 경우
- Test.js
```javascript
import React from 'react';

function Test({myParam, animal}) {
  console.log({myParam, animal});

  return (
    <div> 
      {myParam} : {animal} 
    </div>
  );
}

export default Test;
```

<img width="1085" alt="스크린샷 2022-08-17 오후 10 49 32" src="https://user-images.githubusercontent.com/47733530/185150945-ff52828a-d932-44eb-b52b-15f3f4274005.png">


=> 매개변수명은 반드시 부모 컴포넌트의 props key값과 동일애햐 함

❗️props 를 사용할 때, 반드시 **중괄호{}**를 붙여줘야 함, 안붙이면 일반 문자열로 인식


2. 일반 변수로 받는 경우
3. 
- Test.js
```javascript
import React from 'react';

function Test(data) {
  console.log(data);

  return (
    <div> 
      {data.myParam} : {data.animal} 
    </div>
  );
}

export default Test;
```
<img width="1083" alt="스크린샷 2022-08-17 오후 10 50 16" src="https://user-images.githubusercontent.com/47733530/185151129-5cdccce1-a5d6-47c4-91fd-6b76be3bca5f.png">

=> 하나의 변수로 가져올 땐 객체형태로 담아오기 때문에 변수명은 무관
, 그 안에 데이터를 사용할 땐 부모 컴포넌트의 props key명을 사용해야 함
