데이터베이스
- 외부 스키마(보여지는 데이터)
- 개념 스키마(테이블 간의 관계)
- 내부 스키마(데이터베이스가 저장되는 방법 정의,명세/알아서 됨)

팀 버너스 리 web을 만듬. World wide web


client-side
- jquery제외, html/css/javascript, font-end web framework(angularJS, react,js, Vue,js)
- css프레임워크 (부트스트랩, foundation)

server-side
- 언어에따라 구분됨
- php: 사라질예정
- javascript: node.js(express.js)
- java: spring 전자정부프레임워크 안정적 SI
- c++,c# : asp.net닷넷(.asp확장자)
- pythoon: Django, Flask
- golang
- ruby

database
- RDBMS
- noSQL

etc
- celery python이 한번에 하나씩처리하기 때문에 여러개 동시에 하는거처럼 만들어주기 위해사용.
- github, Bitbucket, gitlab(사설 github)
- travis Cl, jenkins
- slack, trello

API
- Application program Interface

REST API
- 예전에는 SOAP : XML포맷의 데이터가 왔다갔다함.
- XML : 파일과 링크정보를 구조화한 마크업언어와 비슷한 형식의 언어
- REST API -> 상태를 전달하는 방식을 규정해서 보내는 것
- URI(Resource) / HTTP method(Verb) / Reperesntations(표현)
- Roy Fielding(로이필딩)이 제안만 함.
- CRUD

REST API 장점은 URI, HTTP를 이용해 정보를 전달할 수 있다.
단점은 표준이 없고, 사용할 있는 메소드가 4개다.

SEO(검색엔진관련)
- 404페이지 -> 웹서비스 활성화
- 예) github 404페이지 참고해보면 잘되있다.(사이트에서 나가지 않고, 다시 검색해볼수 있게 프론트 구성을 해놨음.) 

GraphQL
- 페이스북 open source
- REST API의 대안
- 정보요청을 GraphQL에 날림

Socket

sock_server.py

``` python

import socket
from time import ctime

host = 'localhost'
port = 12345 
bufsize = 1024
addr = (host, port)

    if __name__ == '__main__':
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server_socket.bind(addr)
        server_socket.listen()
        server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

        while True:
            print("The server is listening on %s:%d" % (host,port))

        client_socket, addr = server_socket.accept()
        print("Client socket accepted from ", addr)

        while True:
            data = lient_socket.recv(1024)
            if not data or data.decode('UTF-8') == 'END': 
                break
            print("Message From Client : %s" % data.decode('UTF-8'))
            print("Sending to Client : %s" % ctime())
            try:
                client_socket.send(bytes(ctime(),'utf-8'))
            except KeyboardInterrupt:
                print("Exited")

        client_socket.close()
    server_socket.close()

```


sock_client.py

```python

import socket
host = 'localhost'
port = 12345
bufersiz = 4096 
addr = (host, port)

    if __name__ == '__main__':
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        host = input("type the host: [%s]:" %host) or host
        port = input("type the host: [%d]:" %port) or port

        sock_addr = (host, int(port))
        client_sock.connect(sock_addr)

        payload = 'GET TIME'
        try:
            while True:
            client_sock.send(payload.encode('utf-8'))
            data = client_sock.recv(bufsiz)
            print(repr(data))
            more = input("Want more?(y/n)? ")

            if more.lower() == 'y':
                payload = input("type payload: ")
            else
                break
        except KeyboardInterrupt:
            print("Exited")

```
다음수업: 웹소켓 자료구조 gulp