## Process Thread

+ 프로세스 : 운영체제 위에서 독립적으로 메모리에서 실행되고 있는 프로그램

    각 프로세스 마다 리소스가 정해져 있음

    프로세스 안에 코드, 스택, 힙, 데이터

+ 스택  : 함수들이 어떤 순서로 실행되어야 하는지 함수가 끝나면 어디로 다시 돌아가야 되는지에 대한 정보

+ 힙 : 우리가 오브젝트를 생성하거나 데이터를 만들 때 그 데이터들이 저장되는 공간

    힙에서는 동적으로 할당된 변수들이 저장

+ 데이터에는 전역변수나 스태틱 변수들이 할당

+ 스레드 : 일꾼, 스레드마다 스택이 할당되어 있음

    일을 수행할 때 어디에서부터 어디까지 일을 했고 그 다음엔 어디로 가야 하는지 일의 흐름을 기억할 수 있는 고유의 스택이 지정되어 있음

    데이터나 코드나 힙 같은 공통적인 데이터 리소스는 프로세스에 있기 때문에 공유하면서 사용

프로세스는 프로그래밍을 동작하는 최고의 단위 쓰레드는 프로그램 안에서 동시에 여러 개가 수행될 수 있는 작은 일꾼 단위

## 자바스크립트 런타임 환경

single threaded language 

자바스크립트가 동작하는 환경에서는 멀티스레딩처럼 보이게 할 수 있음(ex: 브라우저 위에서 작동할 때)

CallStack : 함수 실행 순서 저장 (LIFO : Last In First Out)

재귀함수 잘못 쓰면 지정된 콜 스택 사이즈 초과

[자바스크립트 이벤트루프](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

콜스택에서 작동 중인 것은 끝날 때 까지 보장된다

+ Render : Request Animation Frame, Render Tree, Layout, Paint 화면을 주기적으로 업데이트할 때

    이벤트 루프는 브라우저마다 지정된 시간이 될때만 render를 실행

+ Micro task Queue :Promise, then mutation observer 에 저장된 콜백을 저장

    이벤트루프는 micro task queue가 빌때까지 call stack에 넣음

+ Task Queue : Web APIs를 이용할 때 특정이벤트가 발생하면 콜백을 저장

    이벤트루프는 Task queue에서 하나씩만 call stack에 넣음



setTimeOut 은 Task queue를 이용하고 Promise 는 Micro Task Queue를 사용

requestAnimationFrame() → 우리가 등록한 콜백 함수가 브라우저가 다음 렌더링이 발생하기 전에 실행을 보장

```jsx
const button = document.querySelector('button')
button.addEventListener('click' , ()=>{
	requestAnimationFrame(()=>{
		document.body.style.backgroundColor = 'beige'		
	})
	requestAnimationFrame(()=>{
		document.body.style.backgroundColor = 'orange'		
	})
	requestAnimationFrame(()=>{
		document.body.style.backgroundColor = 'red'		
	})
})

// red로 적용됨 렌더되기전에 한꺼번에 처리되기 때문
```