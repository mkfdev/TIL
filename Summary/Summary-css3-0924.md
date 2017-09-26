
### CSS3 animation

#### @keyframes 규칙

```
@keyframes animation명{
    0% 또는 from{

    }
    100% 또는 to{

    }
}
```
#### keyframes에 설정한 animation 사용하기
animaiton: 이름 진행시간 가속도 지연시간 반복횟수 연결방향;
animation: txt-ani 4s 2s infinite alterante;

#### animation 속성

animation-delay : 애니메이션 로드 후 언제 다시 시작할지 지정한다.

animation-direction : 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정.
ex) normal,reverse,alternate,alternate-reverse,initial,inherit

animation-duration :애니메이션이 진행시간 (1초 = 1s 으로 표시) 

animation-iteration-count :반복횟수 지정 (infinite : 계속반복) 

animation-name 
: 애니메이션이름 
@keyframes 애니메이션이름{}으로 쓰임

animation-play-state 
: 애니메이션 시작 또는 정지 상태 
기본적으로 사용되는 것들 : running , paused

animation-timing-function 
: 애니메이션 속도(가속/감속 시간간격등 설정) 
기본적으로 사용되는 것들 : linear,ease,ease-in,ease-out,ease-in-out,step-start,step-end,steps(int,start|end),cubic-bezier(n,n,n,n),initial,inherit 

animation-fill-mode 
: 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.
애니메이션이 끝난후 처음상태로? 끝난 상태로? 
기본적으로 사용되는 것들 : none,forwards,backwards,both,initial,inherit


몇가지 속성은 선택자의 display 속성이 block이어야만 작동한다.
inline일 경우에는 block을 적용한 후, 속성을 작성해야 한다.

translate() 