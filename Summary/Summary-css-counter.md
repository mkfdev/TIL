# [css] content:couter() 속성 

content:couter()는 원하는 값을 자동으로 생성하는 속성이다.
counter-reset, counter-increment 속성을 설정하여 사용한다.

## 사용 방법

counter-reset: 카운터이름 / 시작숫자(1이면 생략가능)
- 카운터의 이름과 시작값을 설정한다. 

counter-increment: 카운터이름 / 증감숫자
- 몇단계씩 증가 시킬지 설정한다.

content:counter(카운터이름, style)
- 카운터이름만 쓸 경우 십진수(decimal)로 적용한다.
- style에는 list-style-type과 동일한 값 중에서 선택한다.

## 사용 예

'''
ol {
    counter-reset:section;
}
li {
    list-style:none;
}
li::before{
    counter-increment:section;
    content:"section " Counter(section)". ";
}

<ol>
    <li>First Line</li>
    <li>Second Line</li>
    <li>Third Line</li>
</ol>

--------[Result]--------
section 1. First Line
section 2. First Line
section 3. First Line
'''
