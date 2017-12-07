/ dot.env라는 파일에 서버실행에 필요한 환경 일괄 관리 (여러가지 시크릿, DB 접속 정보를 기록)
// 소스코드에 박아놓으면 유출 가능성 -> 암호화
// github에 올릴떄는 내용을 지우고 이 곳에 뭘 써주는지 설명을 써준 후 올려야 함.
// eg. 포트번호를 적어라 등등
require('dotenv').config();

/*  DEPENDENCIES */
const express = require('express');


// 요청을 할때에 리퀘스트 바디(페이로드)에 메소드를 넣어서 전달 받을때 필요한 라이브러리
// 하단에 app.use(bodyparser) 두구문을 꼭 함께 써줘야 함
const bodyParser = require('body-parser');

// 포트넘버가 다를때 다른 서버로 인식하는 것을 막기 위한 라이브러리
// 다른 클라이언트 서버라도(동일출처원칙에 위배되더라도) 요청을 받아주게 하기 위해 (테스트서버에만 필요함)
const cors = require('cors');


// express 서버를 실행
const app = express();

// env 파일에서 (process.env) 포트를 가져옴 (있으면 그걸 쓰고 없으면 5000번을 쓰겠다)
// secret key가 적혀있을 경우 (process.env.secretKey)
const port = process.env.PORT || 5000;

// 서버를 가동 시킨 후, public이란 폴더를 루트폴더로 인식하겠다
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* 서버 설정 끝*/ 




/*******************************
 Endpoint
*******************************/
/* 모든 요청은 request - response로 끝맺음이 되어야한다 
eg. res. json()        */
app.get('/', function (req, res) {
 res.send('Hello World!');
});


//포스트일 경우 생성하겠다는 의미 -> 보통 페이로드가 있음 (리퀘스트 바디안에)
// 즉, req.body가 페이로드임 (요청할때는 리퀘스트 바디안에 페이로드 내용을 적어줘야함)
app.post('/todos', (req, res) => {
 console.log(req.body);
 res.json({ "success": true });
})

/* 소스코드를 바꾸면 서버를 재실행해줘야함 -> 노드몬 설치 이용 */
//파라미터 넘기는 법 --> 포스트맨 & 터미널창 확인
app.get('/todos/id/:idparam',  (req, res) => {
 const id = req.params.idparam
 console.log('----------------------------');
 console.log(`GET / todos / id / ${id}`)
 console.log('----------------------------');


const todos = [
  { id: 1, content: 'Angular', completed: false },
  { id: 2, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false }
 ]
   res.json({todos});
   //{} 를 써줘야 {todos: todos} 형태로 옴
   // 키 값을 넣어주는 형식. {} 없으면 배열이 넘어오게됨
});

app.listen(port, () => console.log(`Server listening on port ${port}`));