### 소켓 
### 웹소켓 - 웹브라우저가 컨트롤
- W3C가 API를 관리
- port:80, http:1.1
- http2.0(http2-explained)

### polling
요청 한번에 여러번의 정보를 주고 받는 것(페이스북 로딩, 리퀘스트는 한번이지만 정보를 더 가져오는 것)

폴더에 server.js
npm init -> server.js가 없으면 index.js생성
npm install --save express
npm install --save socket.io

### array와 링크드리스트 비교
- array는 순차적.
- Linked List는 비순차적. 
- 다음 번지를 지정해둔다. 
- NULL은 Linked List의 끝이다.

### array를 두고 굳이 Linked List를 쓰는 이유.
- array 사이즈는 고정되어 있는 반면 링크드리스트는 메모리 공간을 자유롭게 쓸 수 있다.
- 중간의 값을 remove, insert 하는 것이 쉽다. (행위의 시간복잡도가 낮다.)


### gulp
- 개발용 파일을 만들어서 배포용 파일을 넘겨줄 때 사용한다.(minified 한 후 deploy)
- 설치법 : npm install gulp
[사용법 참고1] https://github.com/gulpjs/gulp
[사용법 참고2] www.npmjs.com

- gulp-clean: 배포 완료후, dist 폴더를 비울 때 사용한다.
- gulp-imagemin
- watch