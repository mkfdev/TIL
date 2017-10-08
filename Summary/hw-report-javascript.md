# 자바스크립트 용어정리
프로그래밍
- 요구사항의 집합을 분석하여 적절한 자료구조와 함수의 집합으로 변환한 후 그 흐름을 제어하는 것이다.
내장객체 DOM(프로토타입 링크)

# 6
# 제어문(Control Flow)
- 조건에 따른 명령 실행(조건문)이나 반복 실행(반복문)이 필요할 때 사용된다.
- 조건문은 if문, switch문, 반복문은 for문, while문, do-while문 등이 있다.
## 블록 구문(Block Statement)
- 구문들의 집합, 중괄호로 그 범위를 정한다.
- 함수, 객체 리터럴, 흐름 제어 구문에서 사용된다.

## 평가
- 흐름제어를 위해서 논리적 참,거짓을 구별한 후 평과 결과에 따라 결정을 내린다.
- 이때 자바스크립트는 문맥을 고려하여 내부적으로 자료형을 암묵적으로 강제 형 변환할 수도 있다.

### 암묵적 형 변환
- 자바스크립트 엔진이 필요에 의해 암시적으로 형을 자동으로 변환시키는 것이다.
- 문자와 숫자를 연산하는 것 자체가 불가능 하기에 형변환이 필요하다.

### 암묵적 형 변환 규칙
1) 숫자형 + 문자형 = 문자형
console.log(10 + '10'); // 1010

2) 숫자형 - 문자형 = 숫자형
console.log(2 - '1') // 1

3) 불린형 + 문자형 = 문자형
console.log(true + '10'); // true10

4) 불린형 + 숫자형 = 숫자형
console.log(true + 10); // 11

5) 그 외의 규칙
- console.log('1' > 0); // true
- console.log('10' == 10); // true
- console.log('10' === 10); // false
- console.log(undefined == null); // true
- console.log(undefined === null); // false


## 명시적 형 변환
- 개발자가 직접 어떤 형으로 변경할 지를 명시해 주는 것을 명시적 형 변환이라고 한다.

### 1. 문자를 숫자로 타입 변환
변환 방법  | 예제 
--------- | --------- 
"+" operator 붙이기(권장) | var val='123'; val = +val;
" * 1" | var val='123'; val = val*1;
Number() | var val='123'; Number(val);
parseInt() | var val='123'; parseInt(val);


### 2. 숫자를 문자로 타입 변환
변환 방법  | 예제 
--------- | --------- 
'&nbsp;&nbsp;' 붙이기(권장) | var val=123; val = val + '&nbsp;&nbsp;';
String() | var val=123; String(val);
toString() | var val=123; toString(val);
 

## Falsy values와 Truthy values
- Falsy values : Boolean context에서 false로 평가되는 값
- false, undefined, null, 0, NaN(Not a Number), '&nbsp;'(빈문자열)
- Truty values : Boolean context에서 true로 평가되는 값
- Falsy values 이외의 값들(객체)은 모두 Truthy values이다.
---
# 7
# 객체(Object)
- 자바스크립트는 객체 기반의 스크립트 언어이며, 자바스크립트를 이루고 있는 것은 모두 객체이다.
- 객체는 데이터와 그 데이터에 관련된 동작을 모두 포함할 수 있는 개념적 존재이다.(프로퍼티와 메소드를 포함하고 있는 독립적 주체이다.)

## 객체는 Pass-by-reference
- 객체는 변경가능한 프로퍼티들의 집합
- 변수는 객체 자체가 아닌 생성된 객체의 참조값을 저장한다.
- 즉, 동일한 객체를 참조할 경우, 객체의 참조값(주소)를 공유하게 된다.

## 기본자료형은 Pass-by-value
- 기본자료형 값이 한번 정해지면 변경될 수 없다.(Immutable, 변경불가성)
- 변수에 참조형으로 저장되는 것이 아니라 값 자체가 저장된다.
- 새로운 변수에 값을 가진 또 다른 변수가 대입될 경우, 값이 복사되어 새로운 변수에 저장된다.

## 프로퍼티란
- 객체에 속한 데이터(Data)로 이름(name)과 값(value)의 쌍으로 구성된다.

## 메소드란
- 객체 내부에서 프로퍼티로 선언된 함수를 뜻한다.
- 함수와 동일하지만 객체 내에 만들어 진다는 점이 다르다.


# 객체 생성 방식
- 객체리터럴, Object()생성자 함수, 생성자 함수 3가지 방식이 있다.
- 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다.

1. 객체리터럴
- 중괄호 {}를 사용하여 객체를 생성한다.
- {} 내에 프로퍼티 이름: 프로퍼티 값을 기술하면 해당 프로퍼티가 추가된 객체를 생성한다.

2. Object() 생성자 함수
- new 연산자와 Object() 생성자 함수로 빈 객체를 생성한 후, 프로퍼티와 메소드를 추가하여 객체를 생성한다.

3. 생성자 함수
- 생성자 함수는 대문자로 시작한다.
- 프로퍼티 또는 메소드 앞의 this는 생성자 함수로 생성될 인스턴스를 가리킨다. this에 연결되있는 프로퍼티와 메소드는 외부에서 참조 가능하다.(일반함수의 this는 전역객체에 바인딩된다.)
- 생성자 함수 내의 일반 변수는 private로 외부에서 참조 불가능하다.

### 생성자 함수와 일반 함수의 혼란을 방지하기 위한 패턴(Scope-Safe Constructor)

``` javascript

function A(arg) {

   //this가 호출된 함수(arguments.callee)의 인스턴스가 아니면
  if(!(this instanceof arguments.callee)){
   //생성자 함수를 호출하여 인스턴스를 반환한다.
    return new arguments.callee(arg);
  }

  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10); 

console.log(typeof a); //object
console.log(typeof b); //object
```

## 객체 프로퍼티 접근

### 프로퍼티 이름
1. 프로퍼티는 문자열(빈 문자열 포함)과 숫자가 올 수 있다.
2. ' - '가 들어간 이름은 유효한 이름이 아니기 때문에 ''(따옴표)를 사용해야 한다.(연산자가 있는 표현식으로 인식)
3. 예약어는 사용하지 말아야 한다.

### 프로퍼티 값 읽기
1. 유효한 이름일 경우, 마침표 표기법(.), 대괄호 표기법(['&nbsp;']) 모두 사용할 수 있다.
2. 유효한 이름이 아니거나 예약어일 경우, 대괄호(['&nbsp;'])로 읽어야 한다.
3. 대괄호 내의 프로퍼티 이름은 꼭 문자열이어야('&nbsp;') 한다.
4. 객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.

### 프로퍼티 값 갱신 / 동적 생성 / 삭제
1. 객체가 소유한 프로퍼티 값에 새로운 값을 할당하면 프로퍼티 값이 갱신된다.
2. 객체가 소유하지 않은 프로퍼티에 값을 할당하면 해당 프로퍼티를 객체에 추가하고 값을 할당한다.
3. delete 연산자로 객체의 프로퍼티를 삭제할 수 있다.

---
# 11
# Scope(유효범위)
- 변수가 가지고 있는 참조범위이다.
- 변수가 유효한 범위, 변수에 접근할 수 있는 범위를 말한다.


## function-level scope
- 함수 코드 블럭 내에서 선언된 변수는 함수 코드 블럭 내에서만 유효하고 함수 외부에서는 참조할 수 없다.
- 단, ECMAScript 6에서 도입된 let keyword를 사용하면 block-level scope를 사용할 수 있다.
- function 밖에 선언된 변수는 코드 블랙 내에 선언되었다 할지라도 전역 변수가 된다.(Global scope를 갖는다.)


## Global scope
- 글로벌 영역에 변수를 선언하면 그 변수는 어디서나 참조할 수 있는 전역 변수가 된다.
- 전역 변수는 전역 객체 window의 프로퍼티이다.


## 암묵적 전역
- 함수 내에서 var keyword 없이 변수를 선언하면 상위 지역(전역)에서 변수를 찾고 존재하지 않으면 암묵적으로 전역 변수로 선언한다.
- 의도치 않은 전역 변수가 될 수 있으므로 var keyword를 사용한다.


## 전역 변수 사용의 억제
- 암묵적 전역 변수화(var keyword가 없을 경우)와 변수명 중복 허용으로 변수의 값이 변경될 수 도 있다.
- 전역 변수를 반드시 사용해야 할 경우가 아니라면 지역 변수를 사용해야 한다.
- 코드가 길어지면 변수명의 중복이 발생하기 쉬워 예기치 못한 이상 동작의 원인이 되기 쉬우며, 전역변수는 지역변수보다 탐색에 걸리는 시간이 더 길다.
- 즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)를 사용한다.
- 즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라진다.
- 사용법 => (function () { 변수 선언, 실행할 내용... }());

---
# 12
# this
1. 함수 호출 패턴
- this는 전역 객체에 바인딩된다.
- 전역함수, 내부함수, 메소드의 내부함수, 콜백함수 모두 전역 객체에 바인딩된다.

2. 메소드 호출 패턴
- this는 해당 메소드를 호출한 객체에 바인딩된다.
- 함수가 객체의 프로퍼티일 때, 메소드 내부의 this
- 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.

3. 생성자 호출 패턴
- this는 새로 생성된 객체를 가리킨다.
- new 연산자로 생성자 함수를 호출하면
1. 빈 객체 생성 및 this 바인딩: 빈 객체를 생성후 this는 이 빈 객체를 가리킨다.
2. this를 통한 프로퍼티 생성: 생성된 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드를 생성한다.
3. 생성된 객체 반환 : 반환문이 없는 경우, 새로 생성된 객체가 반환된다.

## arguments 프로퍼티
- 함수 호출시 전달된 인수들의 정보를 담고 있는 순회가능한 유사 배열 객체(length 프로퍼티를 가진 객체)이다.
-매개변수의 갯수보다 인수를 적게 전달했을 때 인수가 전달되지 않은 매개변수는 undefined으로 초기화된다.
- 매개변수의 갯수보다 인수를 더 많이 전달한 경우, 초과된 인수는 무시된다.
- 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하다.
- 배열 메소드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해야 한다.

---
# 4
# 자료형(Data Type)

## 기본자료형
- boolean
- null
- undefined
- Number
- String
- Symbol

### 기본자료형 null 설계상의 문제
- var name = null; console.log(typeof.name); -> object
- typeof 연사자로 null값을 가진 변수를 연산해보면 object가 나온다.
- 따라서 null타입 변수인지 확인할 때는 일치연산자(===)를 사용해야 한다.


## 기본자료형 특징
- 변경 불가능한 값(immutable value)
- pass-by-value

## 객체형
- object

## 객체형 특징
- 기본자료형을 제외한 모든 것
- 이름과 값을 가지는 데이터를 의미하는 프로퍼티
- 동작을 의미하는 메소드
- pass-by-reference

# 변수(Variable)
- 변수는 위치(메모리 상의 주소)를 기억하는 저장소이다.
- 값을 할당하고 참조하기 위해 사용된다.

## 변수명
- 식별자(identifier)로도 불린다.
- 영문자, underscore(_), 달러기호($)로 시작해야 한다.
- 숫자는 이어지는 문자에 사용할 수 있다.
- 대소문자를 구별한다.

## 변수의 특징
- 선언만 된 변수는 undefined로 초기 값을 갖게 된다.
- 미선언 변수에 접근하면 ReferenceError 예외가 발생한다.
- 중복 선언이 가능하다.
- 변수 선언 시 var 키워드 생략이 가능하다.(=전역변수)
- 동적 타이핑 (Dynamic Typing) : 변수의 Type annotation이 필요없이 값이 할당되는 과정에서 자료형이 결정된다는 것
- 변수 호이스팅

## var 키워드로 선언된 변수의 문제점(설계상의 오류)
- 1. function-level scope :
for loop 초기화 식에서 선언한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
- 2. var 키워드 생략 허용 :
의도하지 않은 변수 전역화
- 3. 중복 선언 허용 : 의도하지 않은 변수값 변경
- 4. 변수 호이스팅 : 변수를 선언하기 전에 참조가 가능하다.

## 변수 호이스팅이란
var 선언문이나 function 선언문을 해당 scope의 선두로 옮기는 것을 말한다.

### 변수 호이스팅 과정 (변수 생성 3단계)
1. var 키워드로 선언된 변수는 선언 단계(Variable Object에 등록, 스코프가 VO참조)와 초기화 단계(메모리할당, undefined)가 이루어진다.
2. 변수 선언문 이전에 변수에 접근하면 undefined가 반환된다. => 변수 호이스팅
3. 변수 할당문에 도달하면 할당 단계가 이루어진다.

---
# 10
# 프로토타입(Prototype)
- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있고, 부모 객체를 프로토타입(prototype)이라고 한다. 
- 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있다.
- Object.prototype 객체는 프로토타입 체인의 종점이다.

## [[Prototype]] 프로퍼티
- __proto__와 같은 개념이다.
- 함수를 포함한 모든 객체가 가지고 있는 프로퍼티이다.
- 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.
- 함수 객체는 `function.prototype`을 가리킨다.

## prototype 프로퍼티
- 함수 객체만 가지고 있는 프로퍼티이다.
- 함수 객체가 생성자로 사용될 때, 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.

## constructor 프로퍼티
- 프로토타입 객체를 생성했던 함수에 대한 참조를 나타낸다.
- constructor가 함수 또는 생성자 객체를 가리키는 참조값이므로 아래처럼 constructor 속성으로 함수를 호출하거나 객체를 생성할 수 있다.

``` javascript
function Person(name){
    this.name = name;
}

var mySon = new Person('daniel');
var myGrandSon = new mySon.constructor('jessica');

```


## 객체 생성 방식에 따른 프로토타입의 차이
1. 생성자 함수 방식
``` javascript
function Person(name){
    this.name = name;
}
var choi = new Person('choi');
```
- choi 객체의 [[prototype]]은 Person.prototype 이다.



2. 객체 리터럴 방식
``` javascript
var choi = {
    name : 'min',
    gender: 'female',
    year : 2017
}
```
- choi 객체의 [[prototype]]은 Object.prototype 이다.



3. Object() 생성자 함수 방식

- 생성자 함수 정의를 하기위한 방식은 함수선언식, 함수표현식, function() 3가지 방식이 있다. 3가지 함수 정의 방식은 결국 Function() 생성자 함수를 통해 함수 객체를 생성한다. 따라서 어떠한 방식으로 함수 객체를 생성하여도 모든 함수 객체의 prototype객체는 Function.prototype이다. 

``` javascript
// 빈 객체의 생성
var choi = new Object();
// 프로퍼티 추가
person.name = 'Choi';
person.gender = 'female';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};
```
- choi 객체의 [[prototype]]은 Object.prototype 이다.


### 3가지 방식에 따라 생성된 객체의 prototype객체 정리

객체 생성 방식  | 엔진의 객체 생성 | 인스턴스의 prototype 객체
--------- | --------- | ---------
생성자함수 | 생성자함수 | 생성자 함수 이름.prototype
객체리터럴 | object()생성자함수 | Object.prototype
object() 생성자함수 | object()생성자함수 | Object.prototype

- 객체리터럴, 생성자 함수는 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다. 
- Object() 생성자 함수는 함수 객체이기 때문에 일반 객체와 다르게 prototype 프로퍼티가 있다.


## 프로토타입 체인(Prototype chain)
- 해당 객체에 접근하려는 프로퍼티나 메소드가 없다면 [[Prototype]] 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색하는 것을 프로토타입 체인이라고 한다.


## 프로토타입 객체의 확장
- 프로토타입 객체도 객체이므로 프로퍼티를 추가,삭제할 수 있다.
- 아래 예는 Person.prototype 객체에 메소드 sayHello를 추가하였다.

``` javascript
Person.prototype.sayHello = function(){
  console.log('Hi~~ my name is ' + this.name);
};
```

## 기본자료형의 확장
- 기본자료형은 객체가 아니므로 프로퍼티나 메소드를 가질 수 없다.
- 그러나 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다.
- 프로퍼티나 메소드를 직접 추가할 수는 없고, String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 메소드를 사용할 수 있다.
- 표준 내장 객체(Built-in object)의 프로토타입 객체(String.prototype, Number.prototype, Array.prototype 등)에 개발자가 정의한 메소드의 추가를 허용한다.
``` javascript
var objStr = 'this is string';

String.prototype.myMethod = function () {
  return 'String prototype';
};

console.log(objStr.myMethod()); //String prototype 출력
```

## 프로토타입 객체의 변경
- 객체를 생성할 때 프로토타입이 결정되고, 부모 객체인 프로토타입을 동적으로 변경할 수 있다.
- 프로토타입 객체 변경 시점 이전에 생성된 객체의 constructor 속성은 해당 객체의 생성자 함수를 가르킨다.
- 프로토타입 객체 변경 시점 이후에 생성된 객체의 constructor는 Object() 생성자 함수를 가르킨다.
- 즉, Person(기존생성자명).prototype.constructor 프로퍼티가 삭제되고, Object.prototype.constructor 프로퍼티가 생성된다.

### 프로토타입 체인 동작 조건
- 객체의 프로퍼티를 참조하는 경우, 프로토타입 체인이 동작한다.
``` javascript
function Person(name) {
  this.name = name;
}
Person.prototype.gender = 'male';
var bar = new Person('Kim');
var foo = new Person('Choi');
foo.gender = 'female';
```
- 위 예제처럼 새로 생성한 객체에 gender 프로퍼티의 값을 할당하면 프로토타입 체인이 동작하지 않고, 해당 객체에 프로퍼티를 동적으로 추가한다.