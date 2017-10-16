# 문서 객체 모델(DOM)
- 브라우저는 파일을 불러들인 후(loading) 컴퓨터가 이해할수 있는 방식으로 한줄씩 해석하여(parsing) 문서객체모델(DOM)을 생성한다.
- 자바스크립트 엔진을 구동시킨다.
- HTML 문서는 DOM tree 형태로 구조화 되어 있다.
- DOM tree + CSSOM tree = Render tree
- DOM은 html 문서에 대한 구성(DOM tree), 문서 내의 각 요소에 접근/수정(프로퍼티와 메소드 제공)을 할 수 있다.


# DOM tree
- 브라우저가 HTML문서를 로드한 후 생성하는 모델을 의미한다.
- 객체의 트리로 구조화되어 있기 때문에 DOM tree라고 부른다.
- DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식이다. 
- DOM tree는 문서노드, 요소 노드, 어트리뷰트 노드, 텍스트 노드로 구성된다.
- Javascript는 DOM에서 웹 페이지를 조작하기 위한 수단(API)을 제공한다.

# 한 개의 요소 노드 선택
## document.getElementById(id)
- id 어트리뷰트 값으로 요소 노드를 한개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.
- 모든 브라우저에서 동작한다.
- Return : HTMLElement를 상속받은 객체

## document.querySelector(cssSelector)
- CSS 셀렉터를 사용하여 요소 노드를 한개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.
- IE8이상의 브라우저에서 동작한다.
- Return : HTMLElement를 상속받은 객체

# 여러개의 요소 노드 선택

## document.getElementsByClassName(class)
- class 어트리뷰트 값으로 요소 노드를 모두 선택한다. 공백으로 구분하여 여러개의 class를 지정할 수 있다.
- Return: HTMLCollection (live) : 실시간으로 값이 변경된다.(실시간으로 노드의 상태를 반영한다)
- HTMLCollection : HTMLElement의 리스트를 담아 반환하기 위한 객체로 유사배열(array-like object)이다.
- IE9이상에서 동작한다.

여기부터 10/18일에 정리
---

## innerHTML 
- 크로스 스크립팅 공격에 취약하다

--- 

# javascript event

- 이벤트가 실행, 콜스택이 비었을때 queue에있는 콜백함수가 스택으로 이동한다.

- 대부분의 Event, Timer 함수, Ajax는 비동기로 동작한다.
- 이벤트가 발생되었을 때 클릭이벤트에 콜백함수가 바인딩되었다라고한다.

이벤트바인딩
- 자바스크립트가 HTML 코드 안에 혼용되서는 안된다. 두 언어가 관심사가 다르기 때문이다.
- onclick 이벤트는 한 이벤트 당 하나의 함수만 호출할 수 있다. => addEventListener