### map, filter, reduce*****
- 원본 배열이 변경되지 않는다.

###  Array.prototype.some()
= 조건에 부합하는게 하나라도 있으면 참

---

# Number
- 기본자료형 number를 위한 wrapper 객체
- 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문에 기본자료형이 wrapper 객체 메소드를 사용할 수 있다.

# Number Constructor 
- new Number(value)
- 숫자로 변환할 수 없다면 NaN을 반환한다.
- 기본자료형 숫자 반환 방식은 Number(Value)
- new Number와 Number 형 비교
``` javascript
var x = 123;
var y = new Number(123);

console.log(x == y);  // true
console.log(x === y); // false (타입이 다르다)

console.log(typeof x); // number
console.log(typeof y); // object
```

# Number Property

## Number.MAX_VALUE
- 자바스크립트에서 사용 가능한 가장 큰 숫자이다.
- MAX_VAULE보다 큰 숫자는 Infinity 이다.

## Number.MIN_VALUE
- 0에 가장 가까운 양수값이다.
- MIN_VALUE보다 작은 숫자는 0 이다.

## Number.POSITIVE_INFINITY
- 양의 무한대 Infinity를 반환한다.

## Number.NEGATIVE_INFINITY
- 음의 무한대 -Infinity를 반환한다.

## Number.NaN
- 숫자가 아님을 나타낸다.
- window.NaN과 같다.


# Number Method
- 숫자가 아닐 경우, 인수를 숫자로 변환하지 않고 false를 반환한다.

## Number.isFinite(value)
- 매개변수 값이 정상적인 유한수인지를 검사하여 Boolean값을 반환한다.
- 전역 함수 isFinite(value)는 인수를 숫자로 변환하여 결과값을 반환한다.

## Number.isInteger(value)
- 매개변수 값이 정수인지 검사하여 Boolean값으로 반환한다.

## Number.isNaN(value)
- 매개변수 값이 NaN인지를 검사하여 Boolean값을 반환한다.
- Not a Number 숫자가 아니면 true 반환한다.

## Number.isSafeInteger()
- 매개변수 값이 안전한 정수 값인지를 검사하여 Boolean값을 반환한다.
- 안전한 정수 값은 (253 - 1)와 -(253 - 1) 사이의 정수이다.

## Number.prototype.toExponential()
- 지수 표기법으로 변환하여 문자열로 반환한다.
- 예를들어, 1.234e+3는 e(xponential)의 앞에 있는 숫자의 10의 3승을 나타낸다.
- 변수.toExponential(n); 반올림하여 소수 n번째 짜리까지 지수 표기법으로 반환한다.
- 인수는 0~20까지 입력할 수 있다.

## Number.prototype.toFixed()
- 매개변수로 지정된 소수점 자리를 반올림하여 문자열로 반환한다.

## Number.prototype.toPrecision()
- 지정된 전체 자릿수까지 유효하도록 반올림하여 문자열로 반환한다. 
- 지정된 전체 자릿수로 표현할 수 없을 경우 지수표기법으로 쓴다.

## Number.prototype.toString()
- 숫자를 문자열로 변환하여 반환한다.
- toString(n) n은 2~36값으로 진수를 나타낸다.

---

# Math
- 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다.

# Math Property

## Math.PI
- PI값을 반환한다.


# Math Method

## Math.abs()
- 0 또는 양수인 절대값을 반환한다.
- 숫자가 아닐 경우 NaN을 반환한다.

## Math.round()
- 가장 인접한 정수로 올림/내림한다.
- x = Math.round(-20.5); // -20
- x = Math.round(-20.51); // -21

## Math.sqrt()
- 양의 제곱근을 반환한다.

## Math.ceil()
- 지정된 숫자를 자신보다 크고, 가까운 정수로 올림한다.

## Math.floor()
- 지정된 숫자를 자기보다 작고, 가까운 정수로 내림한다.

## Math.random()
- 0과 1 사이의 임의의 숫자를 반환한다.
- (Math.random() * 10) + 1 : 1에서 10까지의 임의의 숫자를 반환한다.

## Math.pow()
- 첫번째 인수를 밑, 두번째 인수를 지수로 하여 거듭제곱을 반환한다.
- Math.pow(7,2); // 49

## Math.max()
- 인수중에 가장 큰 수를 반환한다.
- 배열을 인자값으로 받을때는 apply를 사용한다.
``` javascript
var arr = [1, 2, 3, 4, 5];
var max = Math.max.apply(null, arr);

//ES6에서 사용법
var max Math.max(...arr);
```

## Math.min()
- 인수중에 가장 작은 수를 반환한다.

---

# Date
- 날짜와 시간(년,월,일,시,분,초)을 위한 빌트인 객체이다.
- UTC(협정 세계시)는 GMT(그리니치 평균시)라고도 한다.
- KST(Korea Standard Time)은 UTC보다 9시간이 빠르다.
- 현재의 날짜와 시간은 자바스크립트 코드가 동작한 시스템의 시계에 의해 결정된다.

# Date의 Constructor
- Date 생성자를 이용하여 날짜와 시간을 가지는 인스턴스를 생성한다. 
- 기본적으로 현재 날짜와 시간을 나타내는 값을 가진다.
- new Date()
- new 연산자 없이 Date()를 사용하면 결과값을 객체가 아닌 문자열로 반환한다.

## new Date()
- 매개변수가 없는 경우, 현재 날짜와 시간을 가지는 인스턴스를 반환한다.

## new Date(milliseconds)
- 1970년 1월 1일 00:00(UTC)을 기점으로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 인스턴스를 반환한다.

## new Date(dateString)
- 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.
- var d = new Date('May 12, 2016 12:13:00');
- var d = new Date('2017/08/08/20:00:00');

## new Date(year, month[, day, hour, minute, second, millisecond])
- 매개변수에 년,월,일,시,분,초,밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.
- year 1990년 이후의 년
- month 월을 나타내는 0~11까지의 정수(1월은 0)


# Date Method

## Date.now()
- 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

## Date.parse() 
- 1970년 1월 1일 00:00:00(UTC)을 기점으로 매개변수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
- var d = Date.parse('Jan 2, 1970 00:00:00 UTC'); // UTC
- var d = Date.parse('Jan 2, 1970 09:00:00'); // KST
- var d = Date.parse('1970/01/02/09:00:00'); // KST

## Date.UTC()
- 1970년 1월 1일 00:00:00(UTC)을 기점으로 매개변수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
- var d = Date.UTC(1970, 0, 2);
- var d = Date.UTC('1970/1/2'); //NaN 이 형식으로는 인식되지 않는다.

## Date.prototype.getFullYear() / getMonth() / getDate() / getDay() / getHours() / getMinutes() / getSeconds() / getMilliseconds() / getTime()
- 해당 연도/월/일/요일을 나타내는 4자리 숫자를 반환한다.
- getTime()은 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다.

## Date.prototype.setFullYear() / setMonth() / setDate() / setDay() / setHours() / setMinutes() / setSeconds() / setMilliseconds() / setTime()
- 해당 연도/월/일/요일을 나타내는 4자리 숫자를 설정한다.
- setFullYear() 연도 이외의 월,일을 설정할 수 있다.

## Date.prototype.getTimezoneOffset()
- UTC와 지정 로케일(Locale) 시간과의 차이를 분단위로 반환한다.

## Date.prototype.toDateString() / Date.prototype.toTimeString()
- 사람이 읽을 수 있는 형식의 문자열로 날짜 / 시간을 반환한다.
- var d = new Date('1988/8/17/13:30');
- console.log(d.toDateString()); // Sat Sep 17 1988

---

# String
- 기본자료형 String을 위한 wrapper 객체이다.
- 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하기 때문에 기본자료형이 wrppaer 객체 메소드를 사용할 수 있다.


# String Constructor
- new String(value)
- new 연산자를 사용하지 않고 String() 생성자 함수를 호출하면 String 객체가 아닌 문자열 리터럴을 반환한다.
- new없이 String() 생성자 함수를 호출했을 때는 string 이 된다.
``` javascript
var x = 'Lee';
var y = new String('Lee');

console.log(x == y);  // true
console.log(x === y); // false

console.log(typeof x); // string
console.log(typeof y); // object
```


# String Property

## String.length
- 문자열 내의 문자 갯수를 반환한다.


# String Method

## String.prototype.charAt()
- 매개변수로 전달한 index 위치의 문자를 반환한다.

## String.prototype.indexOf()
- 매개변수로 전달된 문자나 문자열을 처음 발견한 곳의 index를 반환한다. 
- 발견하지 못한 경우 -1을 반환한다.

## String.prototype.lastIndexOf()
- 매개변수로 전달된 문자나 문자열을 마지막으로 발견된 곳의 index를 반환한다.
- 2번째 매개변수가 전달되면 해당 위치로 이동한 후, 역방향으로 검색을 시작하고 indexOf() 메소드 처럼 문자열을 처음 발견한 곳의 index를 반환한다.
``` javascript
var str = 'Hello World';
console.log(str.lastIndexOf('l', 10)); // 9
``` 

## String.prototype.replace()
- 첫번째 인자의 값을 두번째 인자에 전달된 문자열로 대체한다.
- 검색된 문자열이 복수로 존재할 경우, 첫번째 문자열만 대체된다.
- 원본 문자열은 변경되지 않고 새로운 문자열을 반환한다.

## String.prototype.split()
- 첫번째 인자의 문자열로 구분하여 분리된 각 문자열로 이루어진 배열을 반환한다.
- 전달된 인수가 없는 경우, 문자열 전체를 단일 요소로 하는 배열을 반환한다.
- 원본 문자열은 변경되지 않는다.
- splitStr = str.split(' ', 3); // 공백으로 구분하여 배열로 반환, 3개까지만 허용

## String.prototype.substring()
- substring(시작index, 종료index-1)
- 첫번째 인자의 index에 있는 문자부터 두번째 인자의 index에 있는 문자의 바로 이전 문자까지를 반환한다.
- 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
- 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
- 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
- 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.

## String.prototype.substr()
- substr(시작index, 길이)
- var str = 'Hello'; var res = str.substr(3,2); // lo

## String.prototype.toLowerCase()
- 문자열의 문자를 모두 소문자로 변경한다.

## String.prototype.toUpperCase()
- 문자열의 문자를 모두 대문자로 변경한다.

## String.prototype.trim()
- 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.
- 문자 사이의 공백은 제거하지 못한다.

---

# 실행 컨텍스트(Execution Context)
- 실행 가능한 코드가 실행되는 환경이다.
- 실행 가능한 코드 : 전역코드, Eval코드(안씀), 함수코드(호출)
- 변수와 함수가 호출되기 위한 환경이 만들어진다.
- 자바스크립트 엔진은 코드를 실행하기 위해 실행에 필요한 정보를 알고 있으며, 실행 컨텍스트를 물리적 객체의 형태로 관리한다.
- 실행에 필요한 정보 : 변수(객체의 프로퍼티, 전역변수, 지역변수, 매개변수), 함수선언(함수명, 함수), 변수의 유효범위(전역이냐 지역이냐), this(가리키고 있는 객체)

# 실행 컨텍스트 스택(=콜 스택)
- 실행 컨텍스트가 생성되서 쌓이는 영역
- 전역 실행 컨텍스트, 함수 실행 컨텍스트가 생성되면 실행 컨텍스트 스택에 쌓인다.
- 함수를 호출하면 해당 함수의 실행 컨텍스트가 생성되며, 함수가 끝나면 해당 함수의 실행 컨텍스트가 사라진다.

# 실행 컨텍스트 3가지 객체
- Variable Object(VO), Scope Chain(SC), this value

1. Variable Object
- 변수(함수표현식 포함), 매개변수와 인수, 함수선언의 정보를 담는 객체로 유일하며 최상위에 위치한 객체이다.
- 전역 컨텍스트의 VO는 전역객체(GO)를 가리키고, 함수 컨텍스트의 VO는 활성객체(AO)를 가리킨다.
- 전역 객체(GO)는 전역에 선언된 전역 변수, 전역 함수를 프로퍼티로 소유한다.
- 활성 객체(AO)는 매개변수와 인수들의 정보를 배열의 형태로 담고 있는 arguments객체가 추가된다.
- 전역 객체(Global Object)는 1개 생성, 활성객체(Activation Object)는 여러개 생성이 가능하다.

2. Scope Chain
- 스코프 체인은 일종의 리스트로서 중첩된 함수의 레퍼런스를 저장하고 있다.
- 마지막 리스트는 항상 전역 객체(GO)를 가리킨다.
- 함수 실행 컨텍스트의 스코프 체인의 경우, 레퍼런스로 자기 자신의 AO와 GO를 가리킨다.
- 스코프 체인(리스트)을 검색하면 함수가 중첩 상태일 때, 하위함수 내에서 상위함수의 유효 범위까지 참조할 수 있게 된다.

3. this value
- this의 값이 할당된다.
- 함수 호출 패턴에 의해 결정된다.

## 전역 코드에의 진입
1. 전역 객체 생성
- 컨트롤이 실행 컨텍스트에 접근하기 이전에 유일한 전역 객체(Global Object)가 생성된다.
- 전역 객체에는 빌트인 객체와 BOM, DOM이 설정되어 있다.

2. 실행 컨텍스트 생성 후 스택
- 전역 코드로 컨트롤이 진입하면 실행 컨텍스트가 생성된 후, 실행 컨텍스트 스택에 쌓인다.

3. 스코프 체인(SC)의 생성과 초기화
- 전역 객체의 레퍼런스를 포함하는 리스트가 된다.

4. Variable Instantiation(변수 객체화) 실행
- Variable Instantiation은 VO에 프로퍼티와 값을 추가하는 것이다.
- 변수, 매개변수, 인수정보(arguments), 함수선언을 VO에 추가하여 객체화한다.
- 함수부터 변수 순으로 저장된다.

4-1. "변수 객체화의 순서"
- 1. Function일 경우 매개변수(parameter)가 VO의 프로퍼티로, 인수(arguments)가 값으로 설정된다.
- 2. 함수선언(함수표현식 제외)을 대상으로 함수명이 VO(VO가 가리키고 있는 객체)프로퍼티로, 생성된 함수 객체가 값으로 설정된다.(함수 호이스팅)
- 3. 변수 선언을 대상으로 변수명이 VO(VO가 가리키고 있는 객체)의 프로퍼티로, undefined가 값으로 설정된다.(변수 호이스팅)

5. 함수의 선언 처리(함수가 있다면)
- 변수 객체화의 순서 2번처럼 함수명이 프로퍼티로, 생성된 함숫 객체(몸체)가 값으로 설정된다.(전역 함수일 경우 GO에 설정)
- 생성된 함수 객체는 [[Scope]] 프로퍼티를 가지게 된다.
- (함수 호출 실행 이전)[[Scope]]는 현재 실행 컨텍스트의 스코프 체인이 참조하고 있는 객체를 값으로 설정하고, (함수 실행 후)스코프 체인이 가리키는 변수 객체에 이미 함수가 등록되어 있으므로 함수선언식 이전에 함수를 호출할 수 있다. (함수 호이스팅)

6. 변수의 선언 처리(변수가 있을때)
- 변수 객체화의 순서 3번처럼 변수명이 VO(VO가 가리키고 있는 객체)의 프로퍼티로, undefined가 값으로 설정된다.
- var 키워드로 선언된 변수는 선언과 초기화 단계가 한번에 이루어진다.
- 변수 선언문 이전에 접근해도 VO에 변수가 undefined로 초기화된 상태로 존재하기 때문에 에러가 나지 않는다.(변수 호이스팅)

7. this value의 결정
- this value가 결정되기 이전에 this는 전역 객체를 가리키고 있다가 함수 호출 패턴에 의해 this에 할당되는 값이 결정된다.


## 전역 코드의 실행

1. 변수값 할당
- 변수값을 할당할 때는 VO(VO가 가리키고 있는 객체, 전역의 경우 GO)를 선두(0)부터 검색하여 해당 변수의 프로퍼티를 발견하면 값을 할당 한다.

2. 함수 실행
- 함수가 실행되면 새로운 함수 실행 컨텍스트가 생성된다.
- 해당 함수로 실행 컨텍스트의 컨트롤이 이동하면 전역 코드와 마찬가지로  1. 스코프 체인의 생성과 초기화, 2. Variable Instantiation 실행, 3. this value 결정이 순서대로 실행된다.

## 함수 코드에의 진입
- 전역 코드에의 진입과 순서는 같지만 다른 룰이 적용된다.

1. 스코프 체인의 생성과 초기화
- Activation Object생성**
- AO에 대한 레퍼런스를 스코프 체인의 선두에 설정한다.
- Activation Object는 arguments 프로퍼티를 초기화한다.
- 스코프 체인의 마지막 레퍼런스 객체는 전역 객체를 참조한다.

2. Variable Instantiation 실행
- 함수 객체와 변수를 VO에 바인딩한다.(선언, 초기화)
- 변수의 프로퍼티는 변수명, 값은 undefined로 VO에 저장한다.
- 함수의 프로퍼티는 함수명, 값은 Function Object로 VO에 저장한다.
- Function Object의 [[scope]] 프로퍼티가 생성된다. 
- [[scope]] 프로퍼티는 AO와 전역을 참조하는 리스트의 값을 갖는다.

3. this value 결정
- this에 할당되는 값은 함수 호출 패턴에 의해 결정된다.

## 함수 코드의 실행(함수에 변수가 존재할때)

1. 변수 값의 할당
- 지역변수를 할당할 때(현재는 내부함수일 경우), 스코프 체인이 참조하고 있는 VO를 선두(0)부터 검색하여 변수명에 해당하는 프로퍼티가 발견되면 값을 할당한다. (해당 영역에도 없으면 스코프 체인 리스트를 참조하여 GO를 검색하도록 한다.)

## 내부 함수 코드의 실행
- 내부 함수가 실행되기 시작하면 새로운 실행 컨텍스트가 생성된다.
- 여기서도  1. 스코프 체인의 생성과 초기화, 2. Variable Instantiation 실행, 3. this value 결정이 순서대로 진행된다.
---
# 클로저(closure)
- 내부함수가 참조하는 외부함수의 지역변수가 외부함수에 의해 내부함수가 반환된 이후에도 life-cycle이 유지되는 것을 의미한다.
- 외부함수가 내부함수보다 더 오래 유지되는 경우에 내부함수가 외부함수의 지역변수에 접근할 수 있고 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 못하고 상태가 유지되며 내부함수에 의해 소멸하게 되는 특성을 말한다.
- 클로저에 의해 참조되는 외부함수의 변수를 자유변수(Free variable)이라고 부른다.
- (실행 컨텍스트 관점에서)내부함수가 유효한 경우에 외부함수가 종료 되면 함수의 실행 컨텍스트도 소멸하지만, 함수 실행 컨텍스트의 AO는 유효하기 때문에 내부함수가 스코프 체인을 통해 참조할 수 있다. 


# 클로저의 활용
- 성능적인 면과 자원적인 면에서 손해를 볼 수 있다.
- (실행 컨텍스트에서) 클로저로 참조하는 변수는 프로그램 종료 시까지 계속 메모리에 할당되어 있기 때문에 성능 상 좋다고 할 수 없다.(최소화하며 오남용하지 않아야 한다.)

```
  <button type="button" onclick="myFunction()">Count!</button>

  <p id="demo">0</p>

  <script>
    var add = (function () {
      var counter = 0;
      return function () {
        return ++counter;
      };
    }());

    function myFunction() {
      document.getElementById('demo').innerHTML = add();
    }
  </script>
```
- 전역 변수의 사용 억제를 위한 방식
- 즉시 실행함수는 한번만 실행되므로 counter가 다시 초기화되지 않는다.
- 외부함수의 변수 counter는 참조하는 함수(내부함수)가 소멸될때까지 유지된다.
- counter는 외부에서 접근할 수 없는 private 변수이다.