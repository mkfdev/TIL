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