---
title: Git 사용법 기초 - CLI 사용법
date: 2017-09-17 23:37:16
tags:
- git
categories:
- Technology
- Github
thumbnail: /images/git1.jpg
---
　
<!-- more -->

로컬PC 작업 파일을 원격 저장소로 올리려면
1)add 2)commit 3)push 명령을 사용해야 한다.

<img src="/images/git1.jpg">

1) 작업공간(local directory)에서 add 명령어를 통해 stage에 반영한다.
2) commit 명령어를 통해 저장소에 반영한다.stage에 올렸던 데이터를 확정하는 단계이다.
여기까지는 중간 단계로 원격 저장소에 파일이 반영되지 않고,
내 PC에 있는 Git 로컬 저장소에만 존재한다.
3) push 명령어를 통해 원격 저장소에 반영한다.
git clone을 통해 원격 저장소의 파일을 읽어와서 작업했을 때, 
$git push origin "push할 브랜치 이름" 
ex) $git push origin master
원격 저장소를 정의해야 할 때,
$git remote add "원격저장소명 원격저장소주소"
ex) $git remote add origin http://github.com/...

### Repository 생성방법(1)
```
$mkdir 디렉토리명
$git init
$git remote add origin 원격저장소주소
```

### Repository 생성방법(2)
```
github.com 웹에서 repository 생성
$git add 파일명
$git commit -m "메세지"
$git remote add origin 원격저장소주소
$git push origin master
```

### 갱신
```
$git pull
``` 
원격 저장소의 변경내용이 로컬 작업 디렉토리에 받아지고(fetch) 병합(merge)된다.