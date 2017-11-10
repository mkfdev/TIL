## Angular 형식
```
import {...} from '@angular/core';
//데코레이터
@Complate({
    selector:...,
    template:...,
    styles:...
})
export class AppComponent{
    name:String; //template과 연동
}
```


## Angular에서 뷰(템플릿) 변경 
앵귤러가없으면 DOM API를 이용해서 데이터를 변경한다.
그러나 앵귤러에서는 DOM API를 쓰지 않고 컴포넌트 클래스 내에 데이터를 갖고 있으면 Data Binding로직에 의해서 template syntax에 표시하여 변경한다.(인터폴레이션)
** 앞으로 배울것 Data binding


## Data binding
- DOM API 접근 방식: javascript는 DOM에 강하게 의존하고 있다(조작하고 있는 view태그를 변경하면 자바스크립트를 변경해야 한다.)
- Angular는 템플릿(html)이 컴포넌트 클래스(javascript)의 데이터를 인터폴레이션이 가져가도록 작동한다.
- 따라서 템플릿에서 태그를 변경해도 영향을 미치지 않는다 => 템플릿이 주도권을 가짐
- 인터폴레이션 : {{title}}


## 변화감지
- 데이터 바인딩 할 때 변경된 것을 감지한다.
- 기본자료형의 값이 바뀌면 변화를 바로 감지한다.=> 메모리 주소가 변경되기 때문에.
- 객체형은 재할당 해야 변화를 감지한다.
- TodoList에서 render()과 같은 역할을 한다.


## 인터폴레이션
- 단방향 바인딩에 사용되는 템플릿 문법이다.
- 문법 : {{ expression }}
- 표현식의 평가 결과를 문자열로 변환하여 템플릿에 바인딩한다.


## 프로퍼티 바인딩***
- DOM 객체의 프로퍼티와 HTML 어트리뷰트
- input을 객체화하면 input의 attributes(어트리뷰트의 값들)이 들어온다. => ex) 0:id, 1:type, 2:value
- attribute 내부에 있는 id 값과 id 프로퍼티 값이 같다.(1:1 매핑)
DOM객체내의 class 프로퍼티가 없고, classList 프로퍼티로 변환된다.
- td 요소의 colspan의 어트리뷰트의 경우 매핑하는 프로퍼티가 존재하지 않는다.
- input의 value 어트리뷰트는 value 프로퍼티와 1:1 매핑하지만 서로 다르게 동작한다. => 초기값이 보존된다.(새로고침하면 시작하는 값은 어트리뷰트 value), .getAttribute('value)
- 사용자가 input한 값은 프로퍼티 value로 사용한다. 입력된 input 값을 가져오려면 .value로 접근해야한다. .value
- <input type="text" [value]="name"> // []를 떼면 어트리뷰트.
- 컴파일되면 name 값을 프로퍼티 바인딩한다.
- 이외에도 많은 경우가 있으므로 어트리뷰트와 프로퍼티를 구별해서 사용해야 한다.
- 이벤트 바인딩, 클래스 바인딩, 어트리뷰트 바인딩, 스타일 바인딩, 양방향 데이터 바인딩 등이 있다.

## 프로퍼티 바인딩 예제(DOM 객체로 변환)
1) [value] 프로퍼티
2) [innerHTML] 프로퍼티
    - <p [innerHTML]="contents"></p>  
    - 위 코드는 인터폴레이션을 사용한 <p>{{contents}}</p> 와 같다. 
    - 인터폴레이션은 syntax sugar이다.
3) [src] 프로퍼티
4) [disabled] 프로퍼티
    - <button [disabled]="isDisabled">disabled button</button>
    - isDisabled = true;
    - true이면 해당 버튼을 사용할 수 없다.


## 어트리뷰트 바인딩
- [attr.attribute-name] = "expression"
- 프로퍼티 바인딩보다 사용빈도는 적지만 알고 있어야 함

## 어트리뷰트 바인딩 에제(HTML)

1) 프로퍼티 바인딩과 어트리뷰트 바인딩
- <input id="user" type="text" [value]="name">
- <input id="user" type="text" [attr.value]="name">
2) 프로퍼티가 존재하지 않을때
- <td [colspan]="length">A + B</td>
- colpspan은 프로퍼티가 존재하지 않으므로 [attr.colspan] 을 사용한다.



## 이벤트 바인딩**
- 뷰 상태 변환을 컴포넌트 클래스로 전달
- (event) = "statement(함수,구문)" 

## MVC
1) Model 
    - 애플리케이션에서 사용되는 데이터의 형식으로 비즈니스 로직, 유효성 검사 기능을 포함한다.
    - 비즈니스 로직: 데이터를 컨트롤하는 로직, 프로그램은 비즈니스 로직을 짜는 것이다.
    - 유효성 검사: input에 적절한 값이 들어왔는지 검사하는 것.
    - 친절한 애플리케이션: 사용자와 상호작용을 한다는 느낌을 주는 섬세한 애플리케이션 => 유효성 검사 중요
    - ex) todos data.

2) View
    - Model을 표시하는 것을 말한다.(html과 css로 구성)
    - DOM은 html만 있으면 브라우저에 의해서 만들어진다.
    - 1) DOM의 상태 변화 정보가 View에 전달된다.
    - 2) View(template)는 DOM을 업데이트 한다. 
    - 3) 두 가지를 반복한다.(양방향으로 상태를 주고 받는다)

3) Controller
    - 모델과 뷰의 상호작용 감시하고 업데이트 한다.


## 양방향 데이터 바인딩
- 앵귤러는 "양방향 => wathcer => 끊임없이감지" 이유로 양방향을 지원하지 않는다.
- 단방향 데이터 바인딩을 가지고 양방향처럼 지원한다.
- [(ngModel)] = "property"
- 템플릿과 컴포넌트 클래스 사이에서 양방향 데이터 바인딩을 한다.
- <input type="text" [(ngModel)]="name">
- 꼭~~ 필요할 때만 쓴다. 
- () :이벤트 바인딩 []: 프로퍼티 바인딩 => 양방향 바인딩의 실제 동작은 이벤트 바인딩과 프로퍼티 바인딩의 조합으로 이루어진다.


# 빌트인 디렉티브
- 디렉티브 : DOM의 모든것을 관리하기 위한 지시
- 컴포넌트 디렉티브, 어트리뷰트 디렉티브, 구조 디렉티브


## ngIf
- 요소를 보이기/숨기기를 쉽게 할 수 있다.
- display:none 은 표시만 안했을뿐 DOM에 남아있는다.
- ngIf로 감추면 DOM에서도 사라진다. 
- 사용법 : <p *ngIf = "isShow"><p>


## NgFor
- 컴포넌트 클래스의 컬렉션을 반복하여 하위요소를 DOM에 추가한다.
- forEach와 같다.
- 사용법 : <li *ngFor = 'let user of users; let i = index">
- {{i}} : {{ user.name }}