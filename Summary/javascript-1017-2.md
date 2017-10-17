# REST API

- REST(Representational State Transfer)는 HTTP/1.0과 1.1의 스펙 작성에 참여하였고, 아파치 HTTP 서버 프로젝트의 공동설립자인 로이 필딩(Roy Fielding)의 2000년 논문에서 처음 소개되었다.

- 발표 당시의 웹이 HTTP의 설계 상 우수성을 제대로 사용하지 못하고 있는 상황을 보고 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로 REST를 소개했다고 한다.

- HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다.

- REST의 기본 원칙을 성실히 지킨 서비스 디자인을 "RESTful"이라고 표현한다.


# REST API 중심 규칙

## 1. URI는 정보의 자원을 표현해야 한다.
- 자원을 표현하는데 중점을 두어야 한다.
- 리소스명은 동사(get)보다는 명사를 사용한다.
- GET /books/1 (o)
- GET /members/delete/1 (x) //delete와 같은 행위에 대한 표현이 들어가선 안된다.
- DELETE /members/1 (o) //위의 잘못된 표현 수정

## 2. 자원에 대한 행위는 HTTP Method(GET,POST,PUT,DELETE 등)으로 표현한다.
- DELETE /books/1


# HTTP Method
- 4가지의 Method를 사용하여 CRUD를 구현한다.

Method  | Action | 역할
--------- | --------- | ---------
Create    | POST | 리소스를 생성
Read - index/retrieve | GET | 모든/특정 리소스를 조회
Update | PUT | 리소스를 갱신
delete | DELETE | 리소스를 삭제


# REST API의 구성
- REST API는 자원(Resource),행위(Verb),표현(Representations)의 3가지 요소로 구성된다.
- REST는 자체 표현 구조(Self-descriptiveness)로 구성되어 REST API만으로 요청을 이해할 수 있다

구성요소  | 내용 | 표현 방법
---------| --------- | ---------
Resource | 자원 | HTTP URI
Verb | 자원에 대한 행위 | HTTP Method
Representations | 자원에 대한 행위의 내용 | HTTP Message Pay Load

http://meetup.toast.com/posts/92 내일참고