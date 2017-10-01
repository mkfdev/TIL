09/29

# prototype 프로토타입

- prototype 프로퍼티:
생성자가 생성될 객체의 부모 역할을 하는 프로토타입을 찾아갈 때 사용한다.
- `__proto__` 프로퍼티:
생성된 객체가 부모 역할을 하는 프로토타입을 찾아갈 때
모든 객체는 [[prototype]]이라는 숨겨진 프로퍼티를 가진다. [[prototype]]이 정확한 명칭이고 `__proto__`와 의미는 같다.

- 함수ex참고

-constructor 프로퍼티: 
프로토타입은 constructor 객체를 가진다.
생성된 객체가 생성자를 찾아갈수 있게 한다.

## 즉시호출함수표현식 (IIFE, Immediately Invoke Function Expression)
- 함수를 선언하자마자 호출한다.
- 딱 한번만 호출된다.
- 변수가 함수내에서만 유효하기 때문에 전역변수를 사용하지 않아서 변수 중복 선언 같은 문제를 방지할 수 있다.

## 내부함수
- 함수 내부에 정의된 함수이다.
- 부모함수, 외부에서는 내부함수에 접근할 수 없다.

## 콜백함수
    

## 프로토타입 객체 

``` javascript
var student = {
  name: 'Lee',
  score: 90
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')); // true

console.dir(student);
```

- student의 프로포타입은 Object이다. (생성자 함수명이 Object)

## 프로토타입 객체의 확장


## 기본자료형(Primitive data type)의 확장
- 기본자료형은 객체가 아니므로 프로퍼티와 메서드가 없지만
프로퍼티나 메서드가 호출할 때 일시적으로 객체형이 된다.

---
# Scope 유효범위

## 전역변수(Global variable)
- 코드 어디서든 참조할 수 있다.
## 지역변수(Local variable or function-level variable)
- 정의 된 함수 내에서만 참조할 수 있다.


---

# this
- 메서드, 생성자를 제외한 모든 객체의 this는 window이다.
- new 연산자가 없는 그냥 함수에서의 this는 window이다.
- 기존함수에 new 연산자를 붙여서 호출하면 생성자 함수로 동작한다.
- 생성자 함수로 동작할 때 this는 자신이 생성할 객체를 가리킨다.
- 메서드의 this는 해당 메서드의 소유주이다.

