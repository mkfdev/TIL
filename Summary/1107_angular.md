Angular 기본 개념 및 구성 정리

"Web Component"를 기반으로 프레임워크가 만들어짐

Component(컴포넌트) 
- 뷰를 구성한다.
- 화면 전환 단위로 만드는 것이 좋다.

Angular소개
- SPA를 위한 프레임워크  
- 초기 로딩이 길다(SPA의 단점), 이후의 화면전환이나 인터렉션은 빠르다.
- AngularJS(v1,ES5) 지속적으로 업데이트 진행하고 있음
- Angular(v2~, typescriprt)
- 자바스크립트 값이 html과 상호 연동된다.
- 하나 이상의 모듈과 컴포넌트가 존재해야 된다.



컴포넌트 요소 추가(인라인) 명령어
- ng g c about -it -is -spec false
- it(inline templete)
- is(inline style)
- spec false(spec 테스트 파일 안만듦)


서비스 요소 추가(sepc 테스트 파일 안만듦) 명령어
- ng g c service -it -is -spec false -flat


anular-cli.json 설정파일
- selector (태그네임) 접두어 설정(prefix)
- 빌드 후 저장될 경로 설정(outDir)
 

ng build로 배포하기
- build 후 생성된 dist폴더 안의 파일들이 서버에 배포된다.


컴포넌트
- 모든 구성요소는 컴퓨넌트를 중심으로 구성된다.
- 애플리케이션의 화면을 구성하는 뷰를 생성하고 관리한다.


웹 컴포넌트
- 변화감지(change detection)

