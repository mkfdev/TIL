# 자바스크립트 용어정리

# Javascript this
1. 함수 호출 패턴
- this는 전역 객체에 바인딩된다.
- 전역함수, 내부함수, 메소드의 내부함수, 콜백함수

2. 메소드 호출 패턴
- 메소드 내부의 this는 해당 메소드를 호출한 객체에 바인딩


## arguments 프로퍼티

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
- pass by value

## 객체형
- object

## 객체형 특징
- 기본자료형을 제외한 모든 것
- 이름과 값을 가지는 데이터를 의미하는 프로퍼티
- 동작을 의미하는 메소드
- pass by reference

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