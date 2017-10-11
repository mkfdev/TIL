# Number

- 생성자 함수가 없는 객체는 Static 함수.
- new Number(value)
- value에 문자열이 들어갔을때, 최대한 형변환된다.(숫자가 아니면 NaN 반환)
- 래퍼 객체를 통해 형변환하는 것은 좋은 것이 아니다.

# Number Property

## Number.EPSILON *****

## Number.MAX-VALUE
## Number.MIN-VALUE
- 0에 가장 가까운 양수값
## Number.POSITIVE_INFINITY
- INFINITY 양의무한대를 가지는 상수
## Number.NEGATIVE_INFINITY
## Number.NaN


# Number method
- 기본적으로 형변환을 안한다.(엄격함)
- prototype.메서드를 쓰지 않음. static 함수이다.

## Number.isFinite()
- 숫자이고 유한한 값
- 전역함수의 isNaN()과의 차이 : 형변환을 안함(엄격함)

## Number.isInteger()
- Number.isInteger(0 / 0) // NaN(Not a Number) -> false

## Number.isNaN()
- 이것도 전역함수의 isNaN()과 다르게 형변환을 안함(엄격함)

## Number.isSafeInteger()
- 자바스크립트에서 사용할 수 있는 정수인지를 검사하여 boolean을 반환
- Number.isSafeInteger(10000000000000001) // false

## Number.prototype.toExponential()

## Number.prototype.toFixed()**
- 매개변수(인자)로 받은 소수점자리수만큼 반올림하고 문자열로 반환.
- 소수점자리수가 넘칠때는 0을 넣어준다.

## Number.prototype.toPrecision()**

## Number.prototype.toString()
- toString('정수로 진법을 나타낼수있음')

## Number.prototype.valueOf()
- Number 객체의 값(기본자료형)을 반환한다.

---

# Math
- 정적 메소드

# Math Property

## Math.PI

# Math Method ***;
- Math.max()]0var max = Math.max.apply(null, arr); // 3
- Math.in()]0var max = Math.max.apply(null, arr); // 3

---
# 정규 표현식
RegExp 생성자 함수를 이용해서 정규표현식 객체가 생성된다. (var regex=~)
---
# 배열
- 1개의 변수에 여러 개의 값을 **순차적**으로 저장할 때 사용한다.
- 배열은 프로퍼티 이름이 필요없고 값만 나열하면 된다.(객체와 비교)
- 배열 생성방식 두가지. 배열리터럴, 배열 생성자함수
- 배열 리터럴을 사용- var arr = []; (내부적으로는 array생성자 함수를 사용해서 객체가 생성된다.)

array에서 length : 요소의갯수(index+1개)
순차적인 요소로 구성할 수 있는데
요소는 undefined 이외 모든 값이 들어올 수 있다.

## Array생성자 함수
인자값을 매개변수 갯수 또는 요소로 받는다.
Array생성자함수는 코딩할때 사용하지 않을것.

for-in문
-for문을 사용하도록 한다.(속도차이)

## Array 프로퍼티
### Array.length


## Array Method

### Array.prototype.concat(item…)
- concat 할때 배열이 아니라 요소로 추가한다.

### Array.prototype.pop()

- pop : 대상 요소를 꺼낸다.
- push: 새로운 요소를 뒤에 추가.
- unshift : 새로운 요소를 앞에 추가.
- pop과 push는 원본 배열을 변경한다.
- 빼낸 요소가 return 된다.
- 한두번 추가할땐 arr.push(6);(가독성높음, 퍼포먼스가 떨어짐) 
- 여러번 추가할땐 arr[arr.length]=6; 사용. 속도면에서 차이가 있음.
- arr.unshift(0); [0].concat(arr); 도 마찬가지로 속도차이가 있음.
- *웹어플리케이션에서는 사용자가 화면 전환 시간을 오래 기다리지 않는다.


### Array.prototype.reverse()
- 원본 배열이 변경


### Array.prototype.slice(start, end)
- var res5 = items.slice(); slice() 복사본생성***

### Array.prototype.splice*****
- delete 비교
- 요소를 제거한 후, 새로운 요소를 추가
- Array.prototype.splice.apply
- ES6 Spread연산자?
[참고] this window -> 메소드 내부,생성자함수 제외

### 중요한 메소드들
### Array.prototype.forEach()
- 대상 배열을 알아서 순회한다. 내부에서 for문을 돌린다.
- 각각의 배열안의 요소에 대해서 콜백 함수를 실행시켜 준다.
- 매개변수는 필요하면 적어준다.
- (item, index, array) -> 원본배열의 요소(인자값이 알아서 순서대로 들어온다), index, 원본배열(자신)
- for문을 간편화하기 위해 만들어짐
- break문을 사용할 수 없다.
- 콜백함수의 this는 window, var that = this; 를 이용해서 this 참조 변경 / 또는 두번째 인자값에 this 전달

### Array.prototype.map()
- 원본 배열과 매핑되는 새로운 배열을 만들어서 반환한다.
- return 하지 않으면 새로운 배열에 반영되지 않는다. return 필수.


Array예제 문제2개 