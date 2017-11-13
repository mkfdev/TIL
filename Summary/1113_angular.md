# 컴포넌트의 계층적 트리 구조

- 재사용성을 위한 분리, 그러나 밀접한 관계가 있어야 한다 => 느슨한 관계, 상태 정보 공유

## 데코레이터
@Input, @Output


## 비순수와 순수
(1개-주로부모, 나머지)
- 비순수에게 지워달라고 요청.
- 코드의 일관성유지

---

# Angular CLI 커맨드 정리

## Angular CLI 설치
* npm install -g angular-cli

## 프로젝트 생성
* ng new 프로젝트명

## 포트변경
ng serve -port 4001

## 구성요소 추가
### 컴포넌트 추가
* ng g c 컴포넌트명

### 디렉티브 추가
* ng g d 디렉티브명

### 파이프 추가
* ng g p 파이프명

### 서비스 추가
*ng g s 서비스명


## 빌드 및 실행
### 개발 서버 실행
* ng serve

### 개발 서버 실행(watch)
* ng serve -o

### 빌드
* ng build
