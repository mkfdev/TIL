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