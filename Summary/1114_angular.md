### 디렉티브
- DOM의 모든 것을 관리하기 위한 명령(스타일,모양,동작)
- 컴포넌트의 복잡도를 낮추고 가독성을 향상시킨다.

el:ElementRef
el.nativeElement
=> nativeElement 다이렉트 접근x, 해킹의 위험이 있다.

ngFor, ngIf 를 한번에 사용할 때 ng-container를 사용한다.



ngOninit
ngOnDestroy