
# Excution Context ~ REST API 총정리
* Object - Built-in Object , Host Object
* Built-in Object - 표준 빌트인 객체, Native Object(BOM,DOM)

## Standard Built-in Object 
- 표준빌트인도 전역객체의 자식객체이다.
- alert('hello'); = window.alert('hello');
- 대문자로 시작하며 String,Number,Array 등이 있다.


## Standard Built-in Object(표준 빌트인 객체)의 종류
* Object, Function, Boolean, Number, Math, Date, String, RegExp, Array, Error,Symbol
### Object
- Object 생성자 함수는 객체를 생성한다. 생성자 함수의 인수값에 따라 강제 형변환된 객체가 반환된다.
- 반환된 객체의 [[prototype]] 프로퍼티에 바인딩된 객체는 Object.prototype이 아니다.
``` javascript
var strObj = new Object('String');
// var strObj = new String('String'); 와 같다.

var numObj = new Object(123);
// var numObj = new Number(123); 과 같다.
```

### Function
- 모든 함수는 Function 객체이며, Function 객체는 new 연산자로 생성할 수 있다.
- var sum = new function('a','b','return a + b');

### Boolean
- 기본자료형 boolean을 위한 레퍼(Wrapper) 객체이다.
```javascript
//Boolean 객체
var foo = new Boolean(true); 

//여기서 Boolean은 기본자료형이 아닌 객체이다.
//true,false를 포함하고 있는 객체이다.
//따라서 x는 객체로서 존재함으로 참으로 간주된다.
var x = new Boolean(false);
if (x) { 
  // . . . 이 코드는 실행된다.
}
```

### Number
1. Number Constructor: Number() 생성자 함수를 통해 객체를 생성한다. 
- Number() 생성자 함수의 인자값이 숫자로 변환될 수 없으면 NaN을 반환한다.
- new 연산자를 붙여 생성자 함수로 사용하지 않으면 기본자료형 숫자를 반환한다.

2. Number Property : 정적메소드. Number객체를 생성할 필요 없이 Number.prototypeName의 형태로 사용한다.
- Number.MAX_VALUE(큰 숫자: Infinity), Number.MIN_VALUE(작은 숫자 : 0) 자바스크립트에서 사용가능한 가장 큰 숫자/작은 숫자
- Number.POSITIVE_INFINITY(=Infinity), number.NEGATIVE_INFINITY(-Infinity)
- Number.NaN : Not a Number, window.NaN과 같다.

3. Number Method 
!! Number 메소드는 대부분 인수가 숫자가 아닐 때 숫자로 변환하지 않는다.
- Number.isFinite() : 인수가 숫자가 아닐 때는 false를 반환한다.(전역의 isFinite()는 인수를 숫자로 변환하여 값을 반환한다)
- Number.isInteger() : 정수인지 검사하여 Boolean값 반환.(인수를 숫자로 변환하지 않는다.)
- Number.isNaN() : 숫자인지 아닌지를 판별하여 아니면(NaN) true를 반환. 단, 인수가 숫자(형)가 아닐 때 false이다.
``` javascript
// Number.isNaN()과 isNaN()비교

//숫자형이 아님, 변환하지 않고 false를 반환한다.
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN('Hello'); // false

//전역의 isNaN은 다른 타입일때, 형변환한다. 
// undefined, {}, 'Hello' 는 Not a Number 이다. 따라서 true
(window).isNaN(undefined); // undefined -> NaN -> true
isNaN({}); // true
isNaN('Hello'); // true
```
- Number.isSafeInteger(): 안전한 정수값인지 검사하여 결과값을 Boolean으로 반환한다.
- Number.prototype.toExponential(): 대상을 지수표기법으로 변환하여 문자열로 반환한다.
- Number.prototype.toFixed() : 0~20 사이의 정수값으로 소숫점 이하 자릿수를 나타낸다. (나머지 반올림)
- Number.prototype.toPrecision() : 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다. 지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.
- Number.prototype.toString() : 숫자를 문자열로 변환하여 반환한다.
- Number.prototype.valueOf() : Number 객체의 기본자료형 값을 반환한다,

### Math
1. Math Method
- Math.round() : 가장 인접한 정수로 올림/내림한다.
```javascript
x = Math.round(20.5); // 21
y = Math.round(-20.5); // -20
z = Math.round(-20.51); // -21
```
- Math.ceil() : 자신보다 큰 가장 가까운 정수로 올림한다.
- Math.floor() : 자신보다 작은 가장 가까운 정수로 내림한다.
- Math.random() : 0~1사이의 숫자로 1은 포함되지 않는다.
```javascript
var randomNum = Math.floor((Math.random() * 10) + 1); // 1 ~ 10
```
- Math.pow() : 거듭제곱을 반환한다. pow(밑,지수);
- Math.max() : 가장 큰수를 반환한다. 배열을 인수로 받을때는 apply를 사용한다.
``` javascript
Math.max(1, 2, 3, 4, 5) ;  // 5

var arr = [1, 2, 3];
var max = Math.max.apply(null, arr); // 3

// ES6
var max = Math.max(...arr); // 3
```

### String
1. String Method
- String.prototype.lastIndexOf() : 매개변수로 전달된 문자를 대상 문자열에서 검사하여 마지막으로 발견된 곳에 index를 반환한다. 2번째 인수가 전달되면 검색 시작 위치가 되어 역방향으로 검색을 하고 반환값은 정방향 기준의 index이다.
- String.prototype.replace(), split(), substring():원본 문자열은 변경되지 않는다.
``` javascript
var str = 'Hello World';

//첫번째 인수가 클 경우 순서를 바꾼다.
var res = str.substring(5,1); // substring(1,5) -> 'ello'

//두번째 인수가 생략된 경우 해당 문자열 끝까지 반환한다. 
var res = str.substring(6); // 'World'

//인수가 문자열보다 길 경우 인수는 문자열의 길이로 취급한다.(인수가 두개일 경우)
var res = str.substring(2,12); // substring(2, str.lengh) -> 'llo World'

//인수가 문자열보다 길 경우 (인수가 한개일 경우) 공백출력
var res = str.substring(11); // ''

//인수가 0보다 작거나 NaN일 경우 0으로 취급된다.
var res = str.substring(-5); // 'Hello World'
```

### RegExp (정규표현식, Regular Expression)
1. 플래그
- i(Ignore Case) : 대소문자를 구별하지 않고 검색한다.
- g(Global) : 문자열 내에 모든 패턴을 검색한다.
- m(Multi Line) : 문자열의 행이 바뀌더라도 계속 검색한다.

2. 패턴
- /.../ 에서 .은 문자 한개를 의미한다.
- 한번 검색되면 끝나는 것이 아니라 반복하여 검색하려면 /.../g 플래그g를 사용한다.
- /A/ig : 'A'를 대소문자 구분없이 반복 검색
- /A+/g : 'A'가 한번이상 반복되는 문자열을 반복 검색 -> 'AA' 'AAA' 출력
- /A+|B+/g 는 /[AB]+/g 와 같다. |,[]는 "OR"을 의미한다.
- /[A-Z]+/g : 'A'~'Z'가 한번 이상 반복되는 문자열 반복 검색
- /[A-Za-z]+/g : 'A'~'Z' 대소문자 구분없이 한번 이상 반복되는 문자열 반복 검색
- /[0-9,]+/g : 0~9 또는 , 가 한번 이상 반복되는 문자열 반복 검색
- \d는 숫자 \D는 숫자가 아닌 문자
- var str='Aa3 Bb2C c10,d'; var regexr=/[\D,]+/g; -> ['Aa', ' Bb' ,'C c', ',d']
- \w는 알파벳과 숫자 \W는 알파벳가 숫자가 아닌 문자

3. 자주 사용하는 정규표현식
- /^abc/ : 특정 단어로 시작하는지
- /abc$/ : 특정 단어로 끝나는지
- /^\d$/ : 모두 숫자인지
- /^[\s]+/(=/^\s+/) : 한개 이상의 공백으로 시작하는지
- /^[A-Za-z0-9]{4,10}$/ : 알파벳 대소문자 또는 숫자로 시작하고 끝나며, 4~10자리 인지
- /^\d{3}-\d{3,4}-\d{4}$/ : 핸드폰 형식에 맞는지 검사

4. RegExp Constructor
``` javascript
//정규식 리터럴
var regExp = /ab+c/i;

//RegExp 생성자 함수 - 패턴, 플래그
var regExp = new RegExp('ab+c','i');
var regExp = new RegExp(/ab+c/,'i');
//ECMAScript 6
var regExp = new RegExp(/ab+c/i);
```

### Array
1. 배열의 생성 [배열 리터럴]
- 배열리터럴 arr의 프로토타입은 Array.prototype
- 객체리터럴 arr의 프로토타입은 Object.prototype
``` javascript
//배열 리터럴
var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

//객체 리터럴
var obj = {
  '0': 'zero',  '1': 'one',   '2': 'two',
  '3': 'three', '4': 'four',  '5': 'five',
  '6': 'six',   '7': 'seven', '8': 'eight',
  '9': 'nine'
};
```
2. Array 생성자 함수
- var arr = new Array(2); length가 2인 빈 배열 생성 -> [undfined,undefined]
- var arr = new Array(1,2,3); 매개변수로 전달된 값을 요소로 가지는 배열 -> [1,2,3]

3. 배열 요소의 삭제
- delete로 삭제할 경우 해당 요소 값만 삭제되어, 해당 인덱스는 undefined가 된다.
- Array.prototype.splice() 메소드를 사용하면 요소를 완전히 지울 수 있다.
- splice()는 제거한 요소를 반환한다.

``` javascript
 var arr = ['one','two','three','four'];
 delete arr[3];
 console.log(arr); // ['one','two','three', undefined];

 var arr2 = ['zero','one','three','four'];
 arr2.splice(2,1) //시작인덱스, 삭제할 요소 수
 console.log(arr2); // ['three'];
```

4. Array Method
- concat(), slice() : 원본이 변경되지 않고 복사본을 반환한다.
- Array.prototype.concat() : 자신(배열)의 복사본에 인수로 넘어온 값들을 요소로 추가하고 반환한다. 원본 배열은 변경되지 않는다.
- Array.prototype.join() : 배열요소 전체를 연결하여 생성한 문자열을 반환. 기본구분자는 ','이며 + 연산자보다 빠르다.
- Array.prototype.pop(), push(), shift(), unshift(), reverse() : 원본 배열이 수정된다.
- push()는 원본 배열을 직접 변경하여 변경된 배열의 length를 반환하고, concat()은 원본 배열을 직접 변경하지 않고 복사본을 반환한다.
- unshift() : push()와 반대로 배열의 선두에 추가된다.
- shift() : pop()과 반대로 배열에서 첫요소를 제거하고 제거한 요소를 반환한다.
- Array.prototype.reverse() : 배열 요소의 순서를 반대로 변경하고 원본 배열이 변경된다. 반환값은 변경된 배열이다.
- Array.prototype.slice(start, end) : 원본이 변경되지 않는다. 인수가 음수일 경우 끝에서 갯수만큼 반환한다. 모든 요소를 반환할때(인수가 비었을 때) 복사본이 생성된다.
- Array.prototype.splice(start, deleteCount, item…) : 매개변수는 시작위치 삭제할 요소 수, 삭제할 위치에 추가될 요소들(item...)이다. 제거한 요소가 배열로 반환되고 원본 배열이 변경된다. *삭제/배열 중간에 새로운 요소를 추가


### Error
- Error 생성자는 error 객체를 생성한다. error 객체의 인스턴스는 런타임 에러가 발생하였을 때 throw된다.
- Error에 관련된 객체 :
- EvalError
- InternalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError


## 레퍼(Wrapper)객체 - 기본형이 레퍼객체를 사용할 수 있는 이유
- 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 Wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하기 때문이다.
- 메소드 호출이 종료되면 객체로 변환된 기본자료형의 값은 다시 기본자료형의 값으로 복귀한다.

## 정적(Static)메소드,프로퍼티
- prototype에 속해있는 메소드는 해당 prototype을 상속받은 인스턴스가 있어야 사용할 수 있지만 정적 프로퍼티, 메소드는 해당 인스턴스를 생성하지 않아도 사용할 수 있다.

## 전역 프로퍼티
- Infinity, NaN, undefined(type도 undefined)

## 전역 함수 
(isFinity,isNaN은 문자열을 받을 경우 숫자로 변환한 후, 결과값을 나타낸다)
- eval(String)
- isFinity()
- isNaN()
- parseFloat()
- parseInt()
- encodeURI(), decodeURI()
- encodeURIComponent(), decodeURIComponent()

### encodeURI(), encodeURIComponent() 비교
- encodeURI(): 매개변수로 전달된 URI를 인코딩한다. 인수를 URI 전체라고 간주하고 파라미터 구분자인 =,?,&을 인코딩하지 않는다.
- encodeURIComponent(): 매개변수로 전달된 URI Component(구성요소)를 인코딩한다. 인수를 쿼리스트링의 일부라고 간주하여 =,?,&을 인코딩한다.
- URI의 문자들을 이스케이프 처리한다. URI(Protocol, Host, Port, Path, Query, Fragment)
- 이스케이프 처리는 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 코드(ASCII Character-set)로 변환하는 것이다.
- URI 문법 형식 표준에 따르면 URI는 ASCII Character-set으로만 구성되어야 하며 ASCII에 정의되지 않은 특수문자나 한글을 포함한 외국어의 경우는 URL에 포함될 수 없기 때문에 이스케이프 처리를 하는 것이다.
- URL내에서 의미를 갖는 문자(%, ?, #), URL에 올수 없는 문자(한글,공백 등) 또는 시스템에 의해 해석될 수 있는 문자(<,>)를 이스케이프 처리하여 야기될 수 있는 문제를 예방하기 위해 이스케이프 처리를 한다.
- 알파벳, 0~9의 숫자, -_.!~*'()는 이스케이프 처리에서 제외된다.
- decodeURI(), decodeURIComponent() 인코딩된 완전한 URI, 인코딩된 URI Component를 원래의 URI로 돌려놓는다.


---
# DOM
## DOM tree의 구성
- 문서노드(Document Node) - DOM tree에 접근하기 위한 시작점
- 요소노드(Element Node)
- 어트리뷰트노드(Attribute Node)
- 텍스트노드(Text Node) - DOM tree의 최종점

## 요소에의 접근
### document.getElementsByClassName(class)
- 메소드 반환값은 HTMLCollection이다.
- HTMLElement의 리스트를 담아 반환하기 위한 객체로 유사배열이다.
- 실시간으로 Node의 상태 변경을 반영한다.(live HTMLCollection)
- querySelectorAll 메소드를 사용하여 NodeList(none-live)를 반환하게 한다.
- 반복문을 역방향으로 돌린다.
- HTMLCollection을 배열로 변경한다.
- var arr = [].slice.call(elems); elems(getElementsByClassName)은 배열이 아니기 때문에 배열로 변환해준다.

## DOM 탐색
- hasChildNodes() : 자식노드가 있는지 확인하고 Boolean값 반환
- childNodes : 자식노드의 컬렉션을 반환한다. NodeList(non-live)
- firstChild, lastChild, previousSibling, nextSibling

## 조작
### 텍스트 노드에 접근/수정
- nodeValue 텍스트 노드의 프로퍼티
- 텍스트 노드일 경우 문자열 반환, 요소 노드일 경우 null 반환
- nodeName, nodeType (노드의 정보 취득)

### 어트리뷰트 노드에 접근/수정
- className, id
- hasAttribute(attribute) : 지정한 어트리뷰트를 가지고 있는지(Boolean)
- getAttribute(attribute) : 어트리뷰트의 값을 취득한다. 문자열을 반환한다.
- setAttribute(attribute, value) : 어트리뷰트와 어트리뷰트 값을 설정한다.
- removeAttribute(attribute) : 지정한 어트리뷰트를 제거한다.

### HTML 콘텐츠 조작
- textContent : 요소의 텍스트 콘텐츠 취득 또는 변경. 마크업을 포함시키면 문자열로 인식하여 그대로 출력한다.
- innerText: 비표준. visibility:hidden(영역을 유지) 지정되어있으면 텍스트가 반환되지 않는다. css를 고려하기 때문에 textContent 프로퍼티보다 느리다.
- innerHTML : 해당 요소의 모든 자식요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다. 이 문자열은 마크업을 포함한다.
- 그러나 마크업이 포함된 콘텐츠를 추가하는 것은 크로스 스크립팅 공격(XSS)에 취약하다.


### DOM 조작 방식
- innerHTML을 사용하지 않고 새로운 컨텐츠를 추가할 수 있는 방법은 DOM을 직접 조작하는 것이다.
- createElement(tagName)
- createTextNode(text)
- appendChild(Node) : 생성된 노드를 DOM tree에 저장한다.
- removeChild(Node)
- insertAdjacentHTML(position, string) : 삽입위치, 삽입할요소
beforebegin, afterbegin, beforeend, afterend
- innerHTML과 inssertAdjacentHTML()은 크로스 스크립팅 공격(XSS)에 취약하다.
- 텍스트를 추가 또는 변경시에는 textContent, 새로운 요소 추가/삭제는 DOM 조작 방식을 사용한다.
- DOM조작 방식의 단점은 innerHTML 보다 느리고 특정노드 한개를 추가할 때 사용하므로 여러 노드를 추가하려면 많은 코드가 필요하다.


### Event Flow(이벤트 흐름)
- 이벤트 핸들러 : 요소에 어떤 이벤트가 일어날때(이벤트발생) 실행되는 함수.
- 버블링 : 자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것
- 캡처링 : 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것
- 이벤트가 발생했을 때 캡처링과 버블링은 순차적으로 발생한다.
- 3번째 매개변수가 true면 capturing, false면 bubbling, 미설정하면 bubbling


# 클로저
- 내부함수가 참조하는 외부함수의 지역변수가 외부함수에 의해 내부함수가 반환된 이후에도 life-cycle이 유지되는 것.
- 자유변수에 엮여있는 함수.

``` javascript
function outer(){
  var x = 'Hello'; //자유 변수
  var inner = function(){console.log(x);};
  return inner;
}

var result = outer();
result();
```
- 실행컨텍스트 관점에서, 내부함수가 유효한 상태에서 외부함수가 종료되어 외부함수의 실행 컨텍스트가 반환되어도 외부함수의 실행 컨텍스트 내의 AO(Activation object)는 유효하여 내부함수가 스코프 체인을 통해 참조할 수 있는 것을 의미한다.
- 전역 변수 사용 억제를 위해 사용한다.

## 클로저 활용 - for문 전역변수i
``` javascript

var arr = [];
for(var i=0; i<5; i++){
  arr[i] = (function(id){
    return function(){
      return id;
    };
  }(i));
}

for(var j=0;j<arr.length;j++){
  console.log(arr[j]());
}
```
- 즉시실행함수는 한번만 실행된다.
- 즉시실행함수는 i를 인자로 받고 매개변수 id를 할당한 후, 내부함수를 반환하고 life-cycle이 종료된다.
- 매개변수 id는 자유변수이다.

``` javascript
var add = (function(){
  var counter = 0;
  return function(){
    return ++counter;
  }
}()); 
// 즉시실행함수는 한번만 실행된다. 
// counter는 한번만 초기화된다.

function myFunction(){
  document.getElementById('demo').innerHTML = add();
}
```
- counter는 자유변수이고, 외부에서 직접 접근할 수 없는 private 변수이다. 
- counter는 자신을 참조하는 함수가 소멸될때까지 유지된다.

# 비동기식 처리 모델
- 비동기식 처리 모델은 병렬적으로 작업을 수행한다.
- 서버에 데이터를 요청한 이후 서버로부터 데이터가 응답될때까지 대기하지 않고(Non-blocking) 즉시 다음 작업을 수행한다.
- 호출되는 함수는 Call Stack에 쌓이고, setTimeout이 호출되면 즉시 실행되지 않고 지정 대기 시간만큼 기다리다가 'tick' 이벤트가 발생하면 이벤트 큐로 이동한 후 Call Stack이 비어졌을 때 Call Stack으로 이동되어 실행된다.

# Ajax(Asynchronous JavaScript and XML)
- 자바스크립트를 이용해서 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통식 방식
- 서버로부터 웹페지가 반환되면 화면 전체를 갱신해야 하는데 페이지 전체를 로드하여 렌더링하지 않고 갱신이 필요한 일부만 로드 후 갱신하여 동일한 효과를 볼 수 있도록 하는 것이다.

## 객체를 JSON형식의 문자열로 변환
- 큰따옴표 사용
- JSON.stringify(o) : o는 JSON으로 변환할 객체
- JSON.stringify(o, 필터함수, 공백의수)

## JSON형식의 문자열을 객체로 변환(=역직렬화)
- JSON.parse(str) : str은 JSON 형식의 문자열, 문자열

# Ajax request
``` javascript
var xhr = new XMLHttpRequest();
xhr.open('GEN','/users'); //세번째인수 default:True(비동기)
xhr.send();
```
1. XMLHttpRequest객체 생성(Ajax 요청을 생성하고 전송한다)
2. 비동기 방식으로 Request를 오픈한다.
3. Request를 전송한다.

### xhr.open(method, url, async)
- method : HTTP method(GET,POST,PUT,DELETE)
- url 요청을 보낼 url
- async 비동기조작여부, default:true

### xhr.send()
- 메소드로 준비된 요청을 서버에 전달한다.

1. GET 메소드 : URL의 일부분인 쿼리문자열로 데이터를 서버로 전송한다. send 메소드의 인수는 무시되고 request body는 null로 설정된다.

2. POST 메소드 : 데이터(페이로드)를 Request Body에 담아 전송한다.

### xhr.setRequestHeader
- HTTP Request Header의 값을 설정한다.
- 반드시 open 메소드 뒤에서 호출한다
- Accept 헤더를 설정하지 않으면 send가 호출될 때 Accept 헤더가 */*로 전송된다.

1. content-type 
- request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다.
- ex) xhr.setRequestHeader('Content-type','application/json'); // 서버가 전송할 데이터의 MIME-type 지정-json
- ex) xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded'); //key=value&key=value..의 형태로 전송한다.

2. Accept
- HTTP 클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 지정한다.

# Ajax response
``` javascript
var req = new XMLHttpRequest();
req.open('GET','data/test.json');
req.send();

req.onreadystatechange = function(e){
  //readyState:4 -> DONE
  if(req.readyState === XMLHttpRequest.DONE){
    // status는 response 상태 코드를 반환.
    // 200이 정상응답(GET)
    if(req.status === 200){
      //데이터 출력
      console.log(req.responseText);
      //3가지 구체적인 출력 방식
      //1.HTML형식 추가

      //2.JSON 형식 추가

      //3.객체 형식 추가(역직렬화된 데이터)

    }else{
      console.log("Error!");
    }
  }
}
```