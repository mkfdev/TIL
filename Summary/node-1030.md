validation 
- 서버측 부담 감소
- 사용자 편리 제공(UX)

Node.js
- 비동기 (Non-blocking I/O)
- 단일 스레드

npm(node package manager)
- 모듈을 패키지화, 패키지 관리
- package.json 파일이 있는 상태에서 npm init(npm i)로 생성
- 프로젝트가 의존하는 패키지 설치 : npm init 
- 5.대버전부터는 --save를 사용할 필요가 없다.
- --save -dev : devDependencies
- package.json 에 지역으로 install한 것만 보인다.

Express 
- nodemon 서버를 자동으로 재부팅.(변경내용 적용)
- npm i nodemon -g
- post방식에서 payload를 받기 위해서 body-parser를 설치함.
- 클라이언트가 보낸 payload를 request에 포함 된다.
