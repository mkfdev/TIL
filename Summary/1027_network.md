# 네트워크의 구성

허브(hub?)
- 같은 신호(외부에서 온 신호)를 여러 기기에 보여줌

라우터(Router)
- 외부신호를 받아서 내부로(?) 전달하는 것 - 공유기x, 좁은범위
- 공유기(매핑하여 특정한 컴퓨터에 전달할 수 있는 것)

LAN
- 가까운 지역의 좁은 범위
- wireless LAN :무선인터넷
- 802.11 != wifi
- 802.11 : IEEE에서 개발된 표준무선통신기술
- wifi : 와이파이 얼라이언스의 상표, 802.11 기술을 사용하는 무선근거리 통신망 제품으로 사용하려면(?) 허가를 받아야함

WAN
- 국가, 대륙의 넓은 범위

LAN < MAN < WAN
- MAN : LAN들끼리 연결(LAN을 묶어준것)
- WAN : MAN들끼리 연결

Another 네트워크
- Lifi : 빛이 도달하는 범위에 연결되있고 정보(?)를 전송한다, 곧 상용화될 듯..
- power line networking x

Network topology(네트워크 연결 형태)
- Line : 한방향
- Bus : Line형태가 발전한 것. 큰 연결선과 작은 연결선이 있음.
- ring : 방향이 두개 
- fully connected : ring형태 발전한 것, 모두 1:1연결(케이블 설치하는데...비용문제)
- 해외로 연결하는 망은 해저(?) 케이블로 구성되어 있다. 회사마다 설치할 수 있음(돈많은회사~)

---

Ethernet
- 통신방법 중 하나
- ether == 에테르 == 빛의매질 (틀린개념. 빛은 파동이면서 입자라는데... 아무튼 저렇게 부름)
- IEEE 802.3규약
- 패킷을 계속 확인해서 원하는 지역의 최단 경로를(빠른쪽) 알아서 탐색해줌

OSI 7 layer
- Open Systems Interconnection Reference Model
- 프로토콜 디자인과 통신 계층
- 각 계층의 data header에 정보를 담아서 다른 PC로 전달한다.
- application layer 사용자에게 넽워크 자원에 대한 접근을 제공, 연결정보 인터페이스를 제공
- presentation layer 암호화/복호화,패킷이 다른곳에 전달될때 암호화.(개인정보유출 방지)
- session layer 두 컴퓨터 사이의 세션이나 대화를 관리. 연결하고 관리. 연결유지 연결이 불안정할때 종료시킬떄의 과정을 담당
- transport layer 신뢰성있는 데이터를 전송할수 있게함, 패킷 검사, 방화벽과 프록시 서버가 동작하는 계층
- *방화벽 : 의심스러운 접근을 막는다. 신뢰된 정보는 미리 열어놓은 구멍(?)을 통해 들어온다.
- network layer 복잡한계층. 넽워크 사이의 라우팅을 담당. 넽워크 호스트의 논리적인 주소관리(ip 주소 할당->라우터,공유기 역할). Ethernet
- datalink layer 기지국에 데이터를 보내줌. 물리적인 데이터 사이의 전송. ex) 전화국끼리 주고받을때 각 기지국의 역할
- physical layer 실제로 전달되는 데이터 매개체, 하드웨어 케이블, 아날로그를 디지털로(1과0으로 구성된 데이터,간단,모듈레이션), 디지털을 아날로그로 변환
- transport 계층에서 방화벽을 열어서 전송시작.
- network(경로지정) data link physical을 반복하여 패킷 헤더를 확인해서(까보고 포장하여) 목적지로 이동

packet
- 데이터를 한번에 전송할 단위로 자른 데이터의 묶음
- 컴퓨터는 바이트byte, 네트워크는 옥텟(octet) : 1byte -> 8bit이므로...


HTTP
: HyperText Transfer Protocol
- www상에서 정보를 주고 받는 프로토콜
- **HyperText : 문자의 상위개념, 하이퍼텍스트 상에서 글자에 대한 의미를 부여하기 위한 text가 HyperText
- HTTP method를 가짐. 
- TCP UDP 전송 방식 활용

FTP
: File Transfer Protocol
- 서버와 클라이언트 사이에 파일 전송을 위한 프로토콜
- 보안에 취약(무차별대입으로 비번을알아냄, 패킷 가로채기), FTPS,SFTP,SSH 사용

SMTP
- 네트워크에서 메일을 보내기 위한 프로토콜


TCP/ UDP
- 헤더가 있다
- tcp sequence number가 있어서 순서를 적어서 조립
- udp 그냥 도착한 순서대로...전송

TCP
Transmission COntrol protocol
- 전송제어프로토콜,패킷을 주고받을때 안정적 순서대로 에러없이 교환할 수 있게함
- STREAM(TCP) 스트림소켓은 두개의 시스템이 1:1로 연결된 상태에서 데이터를 주고받고 연결됨.
- 안정적
- 게임을 제외한것...

UDP
User datagram protocol
- DATAGRAM(UDP) 연결과해제가없음. 비연결형 데이터그램 소켓(빠른 전송이 가능하나 받은것을 모를 수도 있음)
- 데이터그램을 전송하기 위한 프로토콜
-수신확인x, 도착순서 예측x
- 빠르나 안정적이지않음
- 주로 게임에사용

IP
- 인터넷 프로토콜
- IPv4 사용중 -> IPv6 사용하게 될것
- IPv4(32bit,2^32), IPv6(128bit,2^128)
- 32bit로 구성 0.0.0.0 ~ 255.255.255.255
- ip라우터가 주소 재할당 한것(=192.168.x.x) -> local ip 192.168.0.1
(라우터 즉 현재 내컴퓨터에서는 와이파이, 이거로 접속하면 아이피를 바꿀수 있다!)
- 통신사가 하나의 주소를 할당받아서 나눠서 분배하여 사용하고 있다.

127.0.0.1
- Loopback 컴퓨터가 가지고 있는 무조건 반대신호를 반환하는 대역
- localhost

public ip adress
- 전세계적으로 하나만

private ip adress
- private(지역) network에서만 유효

DNS
domain name system

ipconfig/ifconfig
- 이더넷정보, 맥주소

MAC
Media Access Control adress
고유번호

디폴트 서브넷마스크
- 네트워크를 서브넷으로 나누지않아도 할당
- class c 255.255.255.0 / class b / class a
- class로 나눠짐.

옥텟은 패킷의 단위
wrieshark

data
- 컴퓨터가 처리할 수 있는 문자,숫자,그림 따위의 형태의 정보

NoSQL
- MongoDB , Docs는 자바스크립트로 구성(JSON타입,key:value)
- 다중타입(몽고디비), 단일타입, 구조가간단(Documnet)
- MongoDB 응용 프로그램
- robo 해석가능한 상태를 GUI로 보여주는 클라이언트 프로그램

- www.mongodb.org 맥은 homebrew 설치 > brew update
- robodb 설치, 다음주에 함.
- 자바스크립트 크롤링