 3복습 4,5,6예습
Local에 npm 설치
로컬에설치
폴더생성 해당폴더에서 명령어 입력
npm init --y
npm install eslint --save--dev
./node_modules/.bin/eslint --init

 - 국내 크로스 브라우징 이슈 - 브라우저 전쟁
 - Angular.js IE9이상 지원
 - ECMAScript (javascript 표준,1997)
 - ES6 -IE지원안함 Babel, typescript로 대체

 npm install -g eslint 컴퓨터 전역에 npm을 설치
 npm설치
 vscode ESLint 확장 설치

### 웹페이지 접속 - server와 client의 역할
 1. Client측에서 도메인을 친다.(url를 입력)
 2. Client에서 Server에 데이터를 Request(요청)한다.
 3. Server에서(웹파일을 가지고 있음) Response하면 파일의 문자가 Client로 전송된다.
 4. Client에서 문자를 받아서 브라우저에 뿌려준다.




자바스크립트 
- 인터프리터언어 한줄씩 읽고 실행 (실행시켜봐야 에러가 나는지 알 수 있다는 단점이 있다.)
- 컴파일러언어 : 전체를 읽고 에러가 없으면 통째로 실행한다.

프론트앤드
- 서버에 요청하는 방법
- 서버의 결과를 받아서 표시하는 법


## 자바스크립트 용어와 문법

### 구문(statement) 
- 값, 연산자, 표현식, 키워드, 주석으로 구성되는 한줄의 명령. 세미콜론으로 끝나는 영역.
- 구문은 코드블록(){구문;}으로 그룹화할 수 있다.

### 코드블록(code block)
function myFunction(x, y) {
  return x + y; // 구문
}

### 할당(assign, =)연산자, 
var x = 6;
메모리(x)에 값(6)을 저장한다는 의미.
```
var time = 10; // 변수 선언과 할당
var greeting; // 변수 선언
```

### 흐름제어(Control Flow) 
- 조건문, 반복문
- 조건이 참이면 해당 구문을 실행하고, 거짓이면 실행하지 않는다.
```
if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
```

### 변수(variable) 
- var 라고 쓴다.
- 자바스크립트에서는 정해진 변수 타입이 없다.
- 즉, var로 문자열, 문자, 숫자, 객체 모든 타입을 선언할 수 있다.
- 값을 할당, 참조하기 위해 사용된다.
- Typescript : javascript와 다르게 데이터 타입을 선언할 수 있다.

## 자바스크립트 기본 규칙
- 문자열은 홀 따옴표를 사용한다.('hello')
- 자바스크립트는 아래 7가지 데이터 타입을 제공한다.(기본자료형6개 + 객체)
- 기본자료형(primitive data type) : Boolean, null, undefined, Number, String, Symbol(ES6에서 추가)
- Objcet(객체)

데이터 유형
참고) 자바스크립트의 데이터 유형은 6가지 기본형(primitive data type)과 객체(Object)가 있다.
- boolean : true와 false
- null : 빈 객체
- undefined : 어떤 값도 할당되지 않은 상태
- Number : 숫자 (정수,실수)
- String : 문자열
- Symbol : ES6에서 추가되었다. 고유하고 변경불 가능한 기본값
- Object : 함수를 제외한 객체


### null과 undefined의 차이

null: null이라는 값을 가진다. null은 객체 타입으로 문자열일 경우 '', 숫자의 경우 '0'과 같다.
예) var foo = null;

undefined: 변수가 정의되었지만 값이 할당되지 않은 상태
예) var foo; 


## [참고] script 태그 위치
script 로드 태그는 </body> 바로 앞에 적어준다.
(DOM이 완성된 이후 js파일을 로드해야 하기 때문.)

<title>아래에서 로드할 때는 defer를 적어준다.
- <script defer src="main.js"></script>
- 단 defer는 IE8이하에서 적용되지 않는다.

1995년 Brendan Eich가 자바스크립트를 만들었다.
웹브라우저 안에서 돌아가며, 주로 웹페이지에 효과를 주거나 기능을 향상시키는 목적으로 사용했다.
1996년부터 표준화 작업을 시작한 이후에 ECMAScript라고 부른다.

##[참고] javascript 삽입 방식과 위치
간단한 스크립트일 경우 또는 해당 문서에만 적용되는 경우 HTML문서안에 스크립트 소스를 배치한다.그러나 반복사용되는 코드일 경우 파일별로 저장해두고 필요에 따라 링크해서 사용한다.

자바스크립트 링크태그 삽입 위치
1.<head>에 삽입되는 경우 
- defer 속성은 HTML 구문 분석이 완전히 완료되면 스크립트 파일을 실행하도록 브라우저에 지시한다.
- IE8이하는 지원하지 않으므로 두번째 경우를 사용하도록 한다. 
```
<head>
  ...생략...
  <title>메인 페이지</title>
  <script defer src="main.js"></script>
</head>
```


2.</body>앞에 삽입되는 경우
- 문서의 DOM 로드가 완료된 시점에 javascript 로드가 실행되도록 한다.
```
<body>
  ...생략...
  <script src="main.js"></script>
</body>
``` 