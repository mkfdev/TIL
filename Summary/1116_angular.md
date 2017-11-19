
## angular2 몇가지 요점

- (eventDOM) enter : 가상이벤트.
- ERROR TypeError: Cannot read property 'push' of undefined -> undefind 초기화필요함

- Pipe :
파이프의 필터 이벤트가 일어나게 하려면 주소값이 변경되야 한다.

- 비순수 파이프 => pure:false 
- 비순수 파이프일 때는 주소값 변경 없이도 필터가 실행된다.

