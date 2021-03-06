# Built-in Object

## Host Object 
- 개발자가 직접 만든 객체

## 표준 빌트인 객체 (= Global Objects)
- 공통적으로 필요한 기능을 제공한다.
- Stinrg,Array,Object,Function,Boolean,Number,Math,Date,RegExp, 등등 대문자로 시작.
- 표준 빌트인 객체들은 생성자 함수이다.

## 표준 빌트인 객체의 프로퍼티(예)
``` javascript
'abc'.length; //(문자->객체) length는 String의 프로퍼티.
```

## 전역 객체 
- 전역 객체의 자식 객체를 사용할 때, window 생략이 가능하다. 예) window.alert(); -> alert();
- 전역변수를 프로퍼티로 가진다.
- 참고 : 프로퍼티, 메서드를 계속 전역으로 선언하면 window 객체 영역이 커진다. (전역 변수를 사용할 때는 즉시 호출 함수(IIFE)를 사용하도록 한다.)

## 전역 프로퍼티(window.프로퍼티)
- Infinity (Number.Infinity) : 양/음의 무한대를 나타내는 숫자값
- NaN (Number.NaN) : 숫자가 아님을 나타내는 숫자값 
- undefined : 기본자료형 undefined를 값으로 갖는다.

## 전역 함수
- eval()
- isFinite() : 숫자로 변환하여 유한수인지를 판단한 후, 결과값을 Boolean으로 나타낸다.
- isNaN() : NaN인지를 검사하여 Boolean으로 반환한다.(숫자면 false)
- parseFloat() : 부동소수점 숫자로 변환하여 반환한다.
- parseInt() : 정수형 숫자로 변환하여 반환한다.

## URI 형식
- http, host(도메인), port 넘버, Path, Query(256개 가능), Pragment로 구성된다.

## encodeURI() / decodeURI()
- encodeURI() : URI의 문자들을 이스케이프 처리한다.
- decodeURI() : 이스케이프 처리된 문자를 다시 반환한다.

### 이스케이프
- 어떤 시스템에서도 읽을 수 있는 ASCII Character-set로 변환하는 것.
- 특수문자/공백/한글일 경우, 정규표현식으로 이스케이프 처리된다.

## encodeURIComponent() / decodeURIComponent()
- Query 부분의 =, ?, &를 인코딩한다.
- encodeURI()와 차이점은 encodeURI()는 =, ?, &을 인코딩하지 않는다.
- 알파벳, 0~9의 숫자, - _ . ! ~ * ‘ ( )는 이스케이프에서 제외된다.

## Error
자바스크립트는 비동기 처리하므로 try-catch문으로 에러 처리를 하지 않는다.

## 기본자료형과 래퍼객체
- 모든 기본자료형은 래퍼객체를 가지고 있다.
- 예) 'str' -> new String('str')
- 기본자료형을 객체처럼 사용할 수 있게 한다. (객체화되면 메소드 또는 프로퍼티를 호출할 수 있다.-> str.length/ str.toUpperCase();)
- 메소드를 호출하는 시점에만 객체화.
- 호출이 종료되면 기본자료형으로 돌아온다.

## string를 위한 레퍼객체(String)
- 기본자료형이 String(레퍼객체)의 메소드를 사용할수 있는 이유는 메소드나 프로퍼티를 호출할때 순간적으로 레퍼객체로 변환되어 프로토타입 객체를 상속받기 때문이다.

## String Constructor
- String 객체는 String()생성자 함수로 생성됨.
- 전달되는 모든 인자는 문자열로 변환.
- length 프로퍼티를 가지고 있으며, 유사객체배열로 사용할 수 있다.

## String Property
- String은 원본(기본자료형)을 변경하지 않는다.

### String.length
* 문자열의 문자 갯수를 반환
## String Method
### String.prototype.charAt() [프로토타입 붙어있는것 확인]
* index번호에 해당되는 위치의 문자 반환.
* 0부터 시작한다.
### String.prototype.indexOf()
* 문자또는 문자열을 검색해서 처음 찾은 곳의 index 반환.
* 못찾으면 -1 반환.
### String.prototype.lastIndexOf()
* 자또는 문자열을 검색해서 마지막에 찾은 곳의 index 반환.
* 못찾으면 -1 반환.
* 참고로 인덱스의 값은 변하지 않음.
### String.prototype.replace()
* 첫번째 인자의 문자열을 찾고 두번째 인자의 문자로 대처함.
* 원본 문자열은 변하지 않음.
* 첫번째 인자의 문자열이 검색된 문자열에 여러개 존재하면 첫번째만 바꿔줌.
* /hello/gi <-첫번째 인자를 이렇게 넣으면 전체검색하여 다바꿔줌.
* 정규표현식은 어려우니까 나중에 공부하자.
### String.prototype.split()
* 인자값에 넣은 문자열을 검색하여 그것을 토대로 문자를 분리후 배열로 반환[배열은 문자열로 들어감]
* 마찬가지로 원본은 변하지 않는다.
### String.prototype.substring()
* 첫번째 인자에 전달된 인덱스값의 문자부터 두번째 인자의 인덱스 값-1까지의 문자를 반환.
* 두번째인수가 커야된다.
### String.prototype.toLowerCase()
* 모두 소문자로 바꿈.
### String.prototype.toUpperCase()
* 모두 대문자로 바꿈.
### 3.9 String.prototype.trim()
* 문자열의 양끝 공백을 제거한 후 문자반환.
* 가운데 껴있는 공백은 제거안됨.
---
## Date
Date객체는 날짜와 시간을 위한 빌트인객체
* 그러나 라이브러리로 대부분 사용.[알아만두자]
* 1000<--밀리초단위로 1초이다.
* 1970년 1월 1일 00:00(UTC) 기점.
* UTC / GMT 같다고 보면되지만 UTC라 부르고 사용하자.

### Date Constructor
* var d = new Date('2017/08/08/20:00:00'); 이 방법을 쓰자.
* 월은 0~11까지의 정수로 표현되므로 주의하자.



