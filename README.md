# FRONT-END

## Node.js

- Node.js는 성능이 매우 뛰어난 오픈 소스 및 크로스 플랫폼 JavaScript 런타임 환경을 의미
- 방대한 라이브러리
- 클라이언트 OR 서버
- ECMAScript 표준 사용
- 응답이 올 때 작업을 재개해 동시성 관리할 필요 없이 수천 개의 동시 연결을 처리

## NPM (Node Package Manager)

- Node.js의 패키지 관리 시스템
- NPM을 이용해 Node.js의 라이브러리를 설치
- Node.js를 설치하면 자동으로 NPM도 설치됨
- [https://nodejs.org/ko/download/](https://nodejs.org/ko/download/) 에서 LTS 버전 다운로드 및 설치

```bash
#Node 버전 확인
$ node -v
# 폴더 생성
$ mkdir test-project
# 폴더 이동
$ cd test-project
# node 프로젝트 초기화 -> 기본 정보 입력 -> package.json 생성됨
$ npm init
```

<aside>
📑 **package.json**

- 프로젝트 Root 디렉토리에 존재
- 프로젝트 이름, 설명, 버전, 종속성 등의 목록 같은 기능적 **메타데이터**가 포함
</aside>

```bash
#react-workpsace 폴더 생성
$ mkdir react-workpsace
# 폴더 이동
$ cd react-workspace
# React.js 애플리케이션 생성
$ npx create-react-app todo-react-app
```

## NPX (npm package runner)

- npm@5.2.0 이후 npx가 추가됨
- 모듈을 로컬 혹은 전역에 설치하지 않고 패키지를 실행

```bash
# React.js 애플리케이션 생성
$ cd todo-react-app
# React App 실행
$ npm start
```

## Visual Studio Code

vscode에서 react-workpsace를 폴더를 작업영역으로 추가한다

vscode → 파일 → 작업영역에 폴더 추가

- public 디렉터리 파일
    - index.html은 [localhost:3000](http://localhost:3000)에서 가장 처음 리턴하는 HTML파일
    - React HTML파일은 index.html 하나이며 나머지는 React.js 통해 생성되고 index.html의 root 엘리먼트 아래에 동적으로 렌더링됨
- src 디렉터리 파일
    - index.js는 index.html과 가장 처음 실행되는 자바스크립트 코드
    - index.js가 React 컴포넌트를 root 아래에 추가
    - APP.js는 기본적으로 생성되는 리액트 컴포넌트다.
    

![Untitled](FRONT-END%20858de/Untitled.png)

## material-ui  패키지 설치

material-ui 패키지는 기본 및 고급 그리고 커스터마이징 할 수 있는 액세스 가능한 라이브러리를 제공하는 디자인 시스템을 구축하고 빠르게 React App을 개발할 수 있다. *(material-ui.com)*

```bash
# material-ui core패키지 설치
$ npm install @material-ui/core

# material-ui icons 설치
$ npm install @material-ui/icons
```

## React.js 렌더링

- index.html 렌더링 → index.js 실행 → root 엘리먼트 아래에 React.js가 생성한 HTML 엘리먼트 추가 → root 엘리먼트 하위 엘리먼트 렌더링
- html이 bodyt를 렌더링 하면 마지막에 bundle.js 를 실행
- bundle.js : npm start시 만들어진 스크립트로 index.js를 포함하고 있음
- index.js의 ReactDom.render()함수 실행
- 페이지 바꿀 시에는 root의 하위 엘리먼트를 다른 HTML로 변경함으로써 가능해짐
- 서버에서 새 HTML 페이지를 요청하지 않고 자바스크립트가 동적으로 HTML을 재구성해 만드는 애필리케이션 SPA
- Client-Side Rendering

## SPA (Single Page Application)

React.js, Angular, Vue.js는 대중적인 SPA 라이브러리/프레임워크다. 한 번 웹 페이지를 로딩하면 페이지를 새로 로딩하지 않는 App을 의미한다.

## React 컴포넌트

index.js

```jsx
//첫 번째 매개변수인 컴포넌트를 두 번째 매개변수인 root에 엘리먼트 아래에 추가하라는 의미
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //<컴포넌트이름 /> 을 이용해 컴포넌트 사용
  ,document.getElementById('root')  //매개변수로 root 엘리먼트를 받음
);
```

- React로 만든 모든 컴포넌트를 root 엘리먼트 하위에 추가됨

---

ReactDOM이 App 컴포넌트를 렌더링한 결과

![Untitled](FRONT-END%20858de/Untitled%201.png)

# TODO 서비스 개발

```jsx

class Todo extends React.Component {
    render() {
        return (
            <div className='Todo'>
                <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
                <label for="todo0">Todo 컴포넌트 만들기</label>
            </div>
        );
    }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <Todo />
      </div>
    );
  }
}
```

- JSX도 원하는 컴포넌트를 나열함으로써 컴포넌트 재사용 (ex TODO)

<aside>
⚙ JSX : React가 한 파일에서 HTML과 자바스크립트를 사용하려고 확장한 문법이다.

</aside>

## Props와 State

Todo.js

```jsx
constructor(props) {
        super(props);
        this.state = { item: props.item };
    }
    render() {
        return (
            <div className='Todo'>
                <input 
                    type="checkbox" 
                    id={this.state.item.id}
                    name={this.state.item.id}
                    checked={this.state.item.done}/>

                <label id={this.state.item.id}>{this.state.item.id}</label>
            </div>
        );
    }
```

- Todo 컴포넌트에 매개변수로 전달하기 위해 생성자 생성
- super를 이용해 props 오브젝트를 초기화
- `this.state` 를 `item`변수와 `props.item`으로 초기화 한다.
- JS내에서 변경한 변수의 값을 HTML에 다시 렌더링 하기 위해 React에서는 `state`를 관리한다.
- 자바스크립트 변수를 HTML내에서 사용하기 위해 `{자바스크립트}`를 사용한다.

App.js

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {id : 0, title: "Hello World 1", done: true }
    }
  }
  render() {
    return (
      <div className="App">
        {/* div 내부에 Todo 컴포넌트 추가 */}
      <Todo item={this.state.item}/>
      </div>
    );
  }
}
```

- App.js도 생성자에서 props를 인자로 받고 this.state에서 item을 초기화
- `<Todo item={this.state.item}/>` 를 이용해 Todo.js의 props로 매개변수를 넘겨준다.

# 서비스 통합

- 렌더링
    - 컴포넌트의 상태가 변하면 ReactDOM이 감지하여 변경된 부분의 HTML을 다시 바꾼다.
    - React가 각 컴포넌트의 render() 함수를 콜해 DOM트리를 구성하는 과정을 mouting이라 한다.
- mounting
    - 컴포넌트의 생성자와 render() 함수를 부르고
    - mounting을 종료하고 componentDidMount 함수를 호출한다.
- componentDidMount
    - 마운팅이 완료되야 컴포넌트의 프로퍼티가 사용 가능
    - 프로퍼티가 준비되지 않은 상태면 예기치 못한 에러가 발생
    - Back-End API를 호출 하는 것은 mounting이 완료된 후 실행되는 componentDidMount함수에 구현 것이 적절하다

## CORS : Cross-Origin Resource Sharing

- 처음 리소스를 제공한 도메인(Origin)이 현재 요청하려는 도메인과 다르더라도 요청을 허락해주는 웹 보안 방침
- 현재 TODO의 Origin은 localhost:3000인데 새로운 8080으로 요청을 보내 CORS 발생
- CORS가 허용되려면 백엔드에서 CORS 정책을 설정해야한다.
(Spring WebMvcConfigurer구현을 통해)
    
    ```java
    @Configuration
    public class WebMvcConfig implements WebMvcConfigurer {
    
    	private final long MAX_AGE_SECS = 3600;
    	
    	@Override
    	public void addCorsMappings(CorsRegistry corsRegistry) {
    		
    		// 모든 경로에 대해
    		corsRegistry.addMapping("/**")
    					// Origin이 http:localhost:3000에 대해 허용
    					.allowedOrigins("http://localhost:3000")
    					// GET, POST, PUT, PATCH, DELETE, OPTIONS 메서드를 허용한다.
    					.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
    					.allowedHeaders("*")
    					.allowCredentials(true)
    					.maxAge(MAX_AGE_SECS);
    		
    	}
    }
    ```
    

## Promise 패턴

- 반복적인 콜백 지옥 회피
- Promise 오브젝트에 명시된 사항을 실행

---

## 인증 통합 및 ROUTER

### react-router-dom

- REACT는 CSR(Client-Side Routing)이다.
- localhost:3000에 접속하면 FRONT-END서버가 REACT APP을 반환한다.
- [localhost:3000/login](http://localhost:3000/login)을 입력하면 리액트 라우터가 가로채 URL을 파싱후 login 템플릿을 렌더링한다.
- 모든 것이 클라이언트인 브라우저 내부에서 실행된다

```bash
# react-router-dom 라이브러리 설치
$ npm install react-router-dom
```

AppRouter.js

```jsx
class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Routes> 
              <Route path="/login" element={<Login />}>
              </Route>
              <Route path="/" element={<App />}>
              </Route>
            </Routes>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Router>
      </div>
    );
  }
}
```

- react-router-dom v6 부터 Switch → Routes로 변경 되었으며 element로 컴포넌트를 추가한다.
- Login, App 컴포넌트를 추가하여 path와 element를 지정한다.
- index.js에 App 대신 AppRouter로 사용하여 path별로 element를 다르게 적용하기 위해 설정
    
    ```jsx
    ReactDOM.render(
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```
    
- 사용자 인증이 완료 되지 않으면 /login으로 redirect하기 위해 fetch메소드의 catch문에 다음과 같이 작성
    
    ```jsx
    if (error.status === 403) {
      window.location.href = "/login"; // redirect
    }
    return Promise.reject(error);
    ```
    

---

## 로그인 JWT 저장과 사용

- `localStorage.setItem("ACCESS_TOKEN", response.token);` 을 이용해 로그인 후 토큰을 저장
- fetch 함수의 옵션에 `headers.append("Authorization", "Bearer " + accessToken);` 을 추가하여
로그인 후 리소스 접근 시 JWT 인증에 사용 즉, 로그인 상태를 유지
- 회원 가입 페이지 생성 및 네비게이션 바
    - signUp.js, </AppBar> 추가