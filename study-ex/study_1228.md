
# 전역 객체
- 실행 컨텍스트에 컨트롤이 들어가기 이전에 생성
- 전역 스코프를 갖는다.
- 전역 변수를 프로퍼티로 가지게 된다.
- 표준 빌트인 객체도 전역 객체의 자식 객체이다.(= window.alert)


# 전역 프로퍼티
- 전역 객체의 프로퍼티를 말한다.
- 애플리케이션 전역에서 사용하는 값들을 나타낸다.

## Infinity
- 양/음의 무한대를 나타내는 숫자값

## NaN
- Not a Number를 나타내는 숫자값
- Number.NaN 프로퍼티와 같다.

## undefined
- 기본자료형 undefined를 값으로 갖는다.
- window.undefined -> undefined


# 전역 함수
- 애플리케이션 전역에서 호출할 수 있는 함수로서 전역 객체의 메소드이다.

## eval()
- 매개변수에 전달된 문자열 또는 표현식을 평가,실행한다.
- 보안에 취약하므로 가급적 사용하지 않는다.

## isFinite()
- 매개변수에 전달된 값이 정상적인 유한지인지 판별하여 Boolean으로 반환한다.

## isNaN()
- 매개변수에 전달된 값이 NaN인지 판별하여 Boolean으로 반환한다.

## parseFloat()
- parseFloat(string)
- 전달된 문자열을 부동소수점 숫자로 변환하여 반환한다.
- 첫문자를 숫자로 변환할 수 없다면 NaN을 반환한다.

## parseInt()
- parseInt(string,radix) //radix:진법을 나타내는 기수(기본값10)

## encodeURI(), decodeURI()
- 매개변수로 전달된 URI를 인코딩(이스케이프처리)한다.
- 이스케이프처리 : 아스키(ASCII)코드로 변환, 아스키에 정의되지 않은 한글,특수문자,공백을 처리하여 문제를 예방하기 위함

## encodeURIComponent(), decodeURIComponent()
- 매개변수로 전달된 URI Component를 쿼리스트링의 일부라고 간주하여 파라미터 구분자(=,?,&)까지 인코딩한다.