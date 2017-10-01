
2017/09/28

## 객체(Object)
- 프로퍼티(data)와 메소드(행위)로 구성된다.
- data를 컨트롤하기 위한 행위를 객체라고 할 수 있다.
- 객체는 상속을 사용하여 중복을 막는다.
- 기본자료형을 제외한 모든 것은 객체이다.

### 추상화: 특징, 행위를 객체에 추가하는 것

## 프로퍼티(Property)
- key(이름)와 value(값)로 이루어져 있다.
- 프로퍼티 이름 : 빈문자열, 문자열, 숫자
- 프로퍼티 값 : undefined를 제외한 모든 값

## 메소드(Method)
- 값(value)이 함수인 프로퍼티
- 일반 함수와 구분하기 위해 메소드라 부른다.



## 객체생성방법 ES5(3가지)

### 1.객체 리터럴
- 중괄호를 사용하여 객체를 생성한다.
- 중괄호 안에 프로퍼티가 없으면 빈 객체 리터럴이다.
- var emptyObject = {}; //빈 객체 리터럴

#### `[참고] console.log `
- 내장객체.메서드
- 내장객체(=built-in) : 자바스크립트가 원래부터 갖고 있는 함수이다.


### 2.Object()생성자 함수
- 빈 객체 리턴 후, 동적으로 프로퍼티를 추가한다.
- 객체리터럴 방식으로 객체가 생성되는 동안 실제 내부적으로 처리되는 방식이다.
- ES5에서 잘 사용하지 않는다.


### 3.생성자 함수
- 객체를 생성하기 위한 함수이다.
- 객체를 생성하기 위한 템플릿을 구성하여 재사용하기 때문에 여러 객체를 간편하게 생성할 수 있다.
- 인스턴스로 추가적인 객체를 생성할 수 있다.

``` javascript
function Person(name, gender){
    var married = true; //private 외부에서 접근이 불가능하다.
    this.name = name;
    this.gender = gender;
}

// 인스턴스 생성
var Person = new Person('Lee','male');

console.log(person.gender);  // 'male'
console.log(person.married); // undefined

```


## 객체 프로퍼티 접근

## 프로퍼티 이름

- 'first-name'는 반드시 따옴표를 사용한다. '-' 연산자로 인식한다. 
- 예약어는 사용하면 안된다.
- first-name, 'first-name', firstName 


## 프로퍼티 값 읽기
- 프로퍼티가 gender:'male'일 경우, person.gender로 접근하거나, person['gender']로 접근한다.
- 프로퍼티가 'first-name':'Ung-mo'일 경우,  person['first-name']로 접근한다. 
- 대괄호 표기법을 사용할 때, 대괄호 안의 프로퍼티 이름은 반드시 문자열(' ')이어야 한다.


## 프로퍼티 동적 생성

## for-in 문

``` javascript
// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}
```
- 프로퍼티 갯수만큼 순회한다.
- 순서가 보장되지 않으므로 배열에서는 for-of문을 사용한다.
- for-of는 배열의 요소를 순회한다.


## Pass-by-reference

- 객체: pass-by-reference, mutable
- 객체는 힙에 저장된다.
- 객체는 객체의 값(value)이 아니라 객체가 들어있는 주소값을 저장한다.(기본자료형은 값 자체가 저장된다.)
- 할당을 하면 같은 주소를 참조하게 된다.
- var foo; var bar = foo; bar는 foo의 주소 값을 갖게 된다. 즉 같은 주소를 참조하게 된다.


## 객체의 분류 (용어정리)
### Built-in Object(내장 객체)
- 내장 객체는 자바스크립트 엔진에 내장되어 있어, 필요한 경우 생성해 사용할 수 있다.
- 내장 객체로는 문자(String), 날짜(Date), 배열(Array), 수학(Math)객체 등이 있다.
### BOM (Browser Object Model)
- 브라우저 객체 모델
- 브라우저에 계층적으로 내장되어 있는 객체로 window, screen, location, history, navigator 등이 있다.
- window.location.href= "사이트 url"
### DOM (Document Object Model)
- 문서 객체 모델
- HTML 문서 구조를 말한다.
- 최상위 객체 `<html>` 그리고 `<head>, <body>` 등이 있다.
### Host Object(사용자 정의 객체)
- 사용자가 생성한 객체로 사용자가 constructor 혹은 객체리터럴을 통해 사용자가 객체를 정의하고 확장시킨 것들이기 때문에 Built-in Object 와 Native Object가 구성된 이후에 구성된다.
---

# 함수
- 코드재사용
- 매개변수,인자(파라미터) / 인수(argument)

## 함수 정의 방식 3가지
### 1.함수선언식
- 함수 호이스팅이 발생한다.
- 함수를 선언하기 전에 상단에서 호출했을 때 함수를 선언한 것처럼 실행하는 것을 호이스팅이라고 한다.


### 2.함수표현식
- 함수 선언식과는 달리 변수 호이스팅이 발생하고, 함수를 먼저 호출할 경우, TypeError가 발생한다.
- 자바스크립트의 함수는 `일급객체` 이다.
- 일급 객체의 특성을 이용하여 함수 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있는데 이러한 방식을 함수표현식(Function expression)이라 한다. 


#### 일급객체(First-class object)
- 무명의 리터럴로 표현이 가능하다.
- 함수를 변수나 데이터 구조안에 담을 수 있다.
- 함수의 파라미터로 함수를 전달 할 수 있다.(함수를 값처럼 사용할 수 있다.)
- 함수를 반환값으로 사용할 수 있다.


### 함수표현식 두가지
 1.익명 함수표현식(anonymous function expression) : 함수명을 생략해서 함수를 선언한 것이다.
  ``` javascript
  var bar = function(a, b) {
    return a * b;
  };
  ```
 2.기명 함수표현식(named function expression) : 외부에서 호출할 수 없다.
 
  ``` javascript
  var foo = function multiply(a, b) {
    return a * b;
  };
  ```


### 함수 호이스팅과 변수 호이스팅

#### 함수 선언식 - 함수 호이스팅
함수 호이스팅은 함수 선언, 초기화, 할당이 한번에 이루어 진다.
따라서 함수 호출이 먼저 진행될 경우 에러가 발생하지 않는다.

#### 함수 표현식 - 변수 호이스팅
변수 호이스팅은 변수생성, 초기화, 할당이 분리되어 진행된다.
호이스팅된 변수는 undefined로 초기화되고 실제 값의 할당은 할당문에서 이루어진다.
따라서 함수 호출이 먼저 진행될 경우 TypeError가 발생하게 된다.


## arguments 프로퍼티
- 매개 변수 갯수가 확정되지 않은 `가변 인자 함수` 구현에 유용하다.
- 매개 변수의 갯수보다 인수를 적게 전달했을 때, 전달되지 않은 인수 값은 undefind로 초기화된다.
- 반대로 인수가 초과 전달되었을 때는 초과된 인수가 무시된다.
- arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 실제 배열이 아닌 `유사배열객체(array-like object)`이다.
