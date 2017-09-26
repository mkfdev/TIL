
2017/09/26

Activity
unix?명령어
ls, cd, pwd, mkdir, touch, cat, code

키워드(Keyword) 명령어. 수행할 동작을 규정한 것이다.
ex) var, function, return 등등

주석(comment) 작성된 코드의 의미를 설명하기 위해 사용한다.

자바스크립트
- 메모리에 오래 상주하지 않는다.(null 가비지 콜렉션에 큰 의미가 없다)

# 자료형과 변수
--
var num; 
- num은 메모리의 주소 값을 가리키고 있다.(=**참조**)
- 현재 값은 undefined
- 변수의 선언과 초기화
num = 10;
- 값의 할당
num = 1000;
- 값의재할당
- 다른 메모리에 값을 넣어두고, num이 해당하는 메모리의 주소를 참조한다.

javascript 자료형이 없다. 개선된 언어가 Typescript.
(데이터 타입을 사용하는 것은 메모리에 적절하고 유효한 공간을 마련하기 위함이다)

동적타이핑. 값이 할당되는 과정에서 자동으로 자료형이 결정되는 것. 타입 추론.

## 기본자료형(Primitive Data Type)
--
- 변경 불가능한 값(immutable)
- psss-by-value
[참고] pass-by-value 란?
var x = 10; var num = x; 
num에게 x의 참조 정보를 주지 않고, 10값을 복사해서 새로운 메모리에 저장한 후에 num이 10의 주소값을 참조하도록 한다.

boolean, null, undefined, Number, String, Symbol
boolean
- 논리적인요소 
- true(1), false(0)

null
- 의도적으로 기본형 또는 object형 변수에 값이 없다는 것을 명시
- 참조 정보(adress)가 제거된다.
- var foo; var foo = null;
- null은 0, false
[참고] 자료형을 비교할 때는 일치 연산자(===)를 사용한다.(typeof는 object이다)

undefined
- 선언만 되어 있는 변수의 초기값
- 선언되지 않은 변수를 불러올 때 오류 대신에 undefined가 출력된다.(javascript만)

Number
- 정수, 실수
- +/- infinity 무한대
- NaN(not a number)

String
- 문자열
- 홀따옴표 권장('')
- 'He is called "John"'
- 변경 불가능(immutable)

Symbol

## 객체형
--
- pass by reference 
- 내일모레 설명~

## 변수
- 미선언 변수를 호출하면 **ReferenceError** 예외가 발생한다.
- 변수의 중복 선언은 허용되지만 재할당으로 값이 변경된다.
- var 키워드를 생략하면 전역변수가 된다.

### 동적타이핑
- Type annotation(타입형선언) 필요없이 값이 할당되는 과정에서 자료형이 결정될 것

### 변수 호이스팅
1.선언 단계 VO(Variable Object)
- 변수객체(VO)에 변수를 등록한다.

2.초기화
- 변수객체(VO)에 등록된 변수를 메모리에 할당된다. 이 단계에서 변수는 undefined로 초기화된다.

3.할당단계
- undefined로 초기화된 변수에 실제값을 할당한다.

```
console.log(foo); // ① undefined
var foo = 123; // foo를 VO에 저장
console.log(foo); // ② 123 
{
  var foo = 456;
}
console.log(foo); // ③ 456
```

### var 키워드로 선언된 변수의 문제점(ES5)***
전역변수로 인해서 의도치않은 변수의 변경이 발생할 가능성이 높다.
ES6는 이러한 var의 단점을 보완하기 위해 let과 const 키워드를 도입하였다.


#연산자

1.산술연산자
표

+ 연산자
- 연산 대상이 모두 숫자인 경우 : 덧셈 연산
- 문자나 문자열이 포함된 경우 : 문자열 연결 연산
[참고] 연산 대상을 같은 타입으로 맞춰서 덧셈 연산자를 수행하도록 하는 것이 좋다.

++, -- 연산자
z = x++;    // 선대입후증가
z = ++x;    // 선증가후대입

2. 대입연산자
표

3. 비교연산자
표
var x = 5;

x == '5' true
x !== '5' false

x === 5 true
x === '5' false

4. 논리 연산자
표
// || (논리 합) 연산자
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false

// && (논리곱) 연산자
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false

// ! (논리 부정) 연산자
var n1 = !true;  // false
var n2 = !false; // true
var n3 = !'Cat'; // false (빈 문자열이 아닐 경우 true로 간주)

[참고] 논리 부정 연산자로 값의 유무를 판별할 수 있다
var str='';
console.log(!str); // true - str에 값이 없다.

5. 단축 평가
표

// example
var obj = {
  // foo: 'hi',
  bar: 'hey'
};

console.log('obj.foo is ' + obj.foo); // obj.foo is undefined

if (obj && obj.foo) { // obj(true) && obj.foo(undefined,false) = false
  // do somethig with obj.foo
  console.log('obj.foo is ' + obj.foo);
}
- obj가 존재 하지 않으면 obj.foo는 referenceError 예외가 발생하기 때문에 obj가 존재하는지 먼저 체크한다.

6. 타입연산자

7. !! 피연산자를 불린값으로 변환하는 것.

console.log(!!'') //빈 문자열은 false
console.log(!!{}) //빈 객체는 true
console.log(!![]) //빈 객체는 true

# 제어문
--
### 블록 구문
유효범위(scope)는 함수에만 적용된다.


#반목문

for문의 실행순서

for (var i = 0; i < 2; i++) {
  console.log(i);
}
1. var i = 0;
2. i < 2 //true
3. console.log(i) // 0
4. i++ // 1
5. i < 2 //true
6. console.log(i) // 1
7. i++ // 2
8. i < 2 // false
9. end

while/do-while 문

do-while 무조건 1회 실행 후, 조건문을 확인하여 실행한다.

break/continue
break 반복문 하날르 탈출한다.
continue 이후 구문의 실행을 한번 스킵한다.

for (var i = 0; i < 5; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
continue 이후 console.log를 실행하지 않고 반복문의 조건문으로 이동한다.

4. 평가

1. 강제 형 변환
자바스크립트는 context(문맥)을 고려하여 내부적으로 자료형을 암묵적으로 강제 변환하여 작업한다.

console.log('1' > 0)  // true
console.log(1 + '2') // '12'
console.log(2 - '1') // 1
console.log('10' == 10) //true

2. 직접 형 변환
string->number
var val = '123';
val =+ val
val = val * 1
Number(value);
- 객체를 만들때 사용, 사용권장안함
parseInt(value);

number->string
var val = '123'; 
val = val + ''; //권장
val = String(val);
val = val.toString();


[참고] Truthy & Falsy values
false
undefined
null
0
NaN (Not a Number)
'' (빈문자열)

복습 data type variable ...
예습 Object function prototype 7-10
