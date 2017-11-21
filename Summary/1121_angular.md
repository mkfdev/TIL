form - submit
- 서버에 전송. 
- 페이지 전환(깜박거림).
- form안의 요소들(그룹)이 하나라도 유효하지 않으면 전송할 수 없다.

form control
- name 어트리뷰트가 데이터의 이름이 된다.
- ngModel을 써줘야 control이 만들어짐
- 각각의 input에 접근하기 위해서는 form 참조 변수를 사용한다.
- ex) userForm.value (참조변수:#userForm)
- #name="ngModel": 유효성 검증 상태 추적이 가능해진다.


템플릿 기반 폼 유효성 검증 - AbstractControl클래스
- 유효성 검증의 상태를 나타내는 프로퍼티를 가지고 있음
- errors, invalid, valid, pristine, undouched, dirty 등
- untouched: fousin -> focusout되면 false
- pristine: 값이 한번이라도 입력된 상태 false
- *ngIf를 사용해서 에러메시지를 출력하는게 좋다 -> 조건에 부합하면 DOM에서 사라지기 때문
- 에러메시지는 값을 입력하고 focusout됐을 때 출력되야 함.
- errors => invalid: true, untouched: false


리액티브폼
- 템플릿 기반보다 복잡할 경우 사용. (form이 15개 이상이거나 많은 검증이 필요할때)
- 컴포넌트 기반
- formControlName이 템플릿기반 폼에서 name의 역할을 한다.

name='Lee'
<input [value]="name">
[value]="'Lee'"
value="Lee"