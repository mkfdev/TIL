## Angular 기본 개념 및 구성 정리


### Angular소개
- "Web Component"를 기반으로 프레임워크가 만들어짐
- SPA(Single Page Application)개발을 위한 구글의 오픈소스 자바스크립트 프레임워크  
- 초기 로딩이 길다(SPA의 단점)
- 초기 로딩 이후의 화면전환이나 인터렉션은 빠르다.
- AngularJS(v1,ES5) 2012년 구글의 미스코 헤브리가 공개. 지속적으로 업데이트를 진행하고 있다.
- Angular(v2~, typescriprt) 2014년 ng컨퍼런스에서 처음으로 소개.
- Angular는 AngularJS의 후속 버전이지만 호환성이 없다.
- Angular에서는 자바스크립트 값이 html과 상호 연동된다.
- 하나 이상의 모듈과 컴포넌트가 존재해야 된다.
- 대부분의 모던 브라우저를 지원한다.(IE는 9이상)


### Angular의 장점
1) 개선된 개발 생산성
    1) 컴포넌트 기반 개발
    2) Typescript의 도입
    - Typescript의 정적 타이핑/ ECMAScript6의 클래스,모듈/ ECMAScript7의 데코레이터를 지원한다.
    3) 개발 도구의 통합 및 개발 환경 구축 자동화
    - 설정해야 할 도구가 많고 설정 방법은 익숙지 않다. => Angular는 CLI을 통해 간편한 개발 환경 구축을 지원한다.(개발환경 구축에 소요되는 시간 최소화)
2) 성능 향상
    1) Digest Loop로 인한 성능저하 문제의 해결
    - AngularJS는 Model의 변화를 View에 반영시키는 과정(Digest Loog)로 인한 성능저하가 단점 (양방향 바인딩을 위해서는 watcher가 추가됨, watcher가 늘어날수록 성능 저하)
    2) AoT 컴파일
    - 사전 컴파일 방식을 의미. 런타임에서 실시하지 않고 사전에 컴파일하여 속도를 향상시키는 기법.
    3) Lazy Loading
    - 지연 로딩. SPA의 단점을 극복하기 위한 대안.
    - 애플리케이션 실행 시점에 모든 모듈을 한꺼번에 로딩하지 않고 필요한 시점에 필요한 모듈만을 로딩하는 방식
    4) 코드 최적화


### Angular CLI
- 간단한 명령어를 사용하여 Angular 프로젝트 스캐폴딩(scaffolding)을 생성, 실행, 빌드할 수 있으며 다양한 구성 요소를 선별적으로 추가할 수 있는 커맨드-라인 인터페이스이다.

- Angular 프로젝트 스캐폴딩을 간단한 명령어로 생성해 주어 개발환경 구축에 소요되는 시간을 최소화할 뿐 아니라 표준적인 스타일 가이드를 제공한다.

#### 여기서, 스캐폴딩(scaffolding)이란...
- (건축 공사장의) 비계?
- 높은 곳에서 공사를 할 수 있도록 임시로 설치한 가설물을 비계라고 한다.
- 개발에서는 스캐폴딩을 개발을 시작하기 위해 여러 폴더를 만들고, 라이브러리를 다운받고, 기본적인 뼈대를 만들면서 시작을 하며 이러한 작업을 몇줄의 명령어로 끝마치는 것! 이라고 한다.


### Angular CLI 사용법
1) 설치 
- npm install -g @angular/cli
- node.js 6.9.0 / npm 3.0.0 이상

2) Angular 프로젝트 생성
- ng new <project-name>
- 새로운 프로젝트 폴더가 생성되고 스캐폴딩(프로젝트 기본 골격)이 작성된다.

3) 프로젝트 실행
- ng serve
- ng serve --open(or -o)
- ng serve --port(or -p) 4201
- serve => webpack을 사용하여 소스코드와 의존 모듈을 번들링하고 Angular CLI가 내장하고 있는 개발용 서버를 실행한다.
- 개발용 서버는 코드의 변경을 감지하여 자동으로 브라우저를 리로드하는 LiveReload기능을 제공한다.(--open명령어)
- locahost:4200으로 접속한다.
- 4200번을 이미 사용하고 있다면 예)4201로 변경해준다.


### 프로젝트 구성요소

1) Component(컴포넌트) 
- 화면 전환 단위로 만드는 것이 좋다.
- 모든 구성요소는 컴퓨넌트를 중심으로 구성된다.
- 애플리케이션의 화면을 구성하는 뷰를 생성하고 관리한다.

    1) 컴포넌트 요소 추가 명령어
    - ng g(enerate) c(omponent) component-name
    - 파일명(구성 요소 명칭)은 하이픈으로 구별된 케밥표기법을 사용한다.
    - 명령어를 실행하면, src/app/<component-name>폴더를 생성
    - src/app/<componene-name>폴더에 4개의 파일을 추가한다.
    - 4개의 파일 : 컴포넌트 HTML템플릿을 위한 HTML파일, 컴포넌트 HTML템플릿의 스타일링을 위한 CSS파일, 컴포넌트 유닛 테스트를 위한 스펙 파일, 컴포넌트 클래스 파일(ts)
    - 루트 모듈 src/app/app.module.ts에 새롭게 추가된 컴포넌트를 등록한다.

    2) 컴포넌트 요소 추가(인라인) 명령어
    - ng g c about -it -is -spec false
    - it(inline templete)
    - is(inline style)
    - spec false(spec 테스트 파일 안만듦)

    3) 서비스 요소 추가(sepc 테스트 파일 안만듦) 명령어
    - ng g c service -it -is -spec false -flat

    4) Selector 프로퍼티 값
    - 컴포넌트를 마크업으로 표현할 때 사용하는 이름.
    - 루트 컴포넌트에서 home 컴포넌트를 사용하려면, app.component.html을 아래처럼 수정한다.
    - ex) Selector:'app-home' => <app-home></app-home>
    - 기본 접두사는 angular-cli.json에서 설정할 수 있다. 

#### 참고) anular-cli.json 설정파일
- selector 접두사 설정(prefix)
- 빌드 후 저장될 경로 설정(outDir)
 

### ng build로 배포하기
- build 후 생성된 dist폴더 안의 파일들이 서버에 배포된다.


### 웹 컴포넌트
- 변화감지(change detection)

