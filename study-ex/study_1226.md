## call, apply 함수

- call, apply 함수를 이용하면, this를 원하는 객체 또는 새로운 객체에 바인딩 할 수 있다.
- call 메소드는 인자 하나하나를, apply는 인자를 배열로 전달한다는 차이가 있다.


## call 함수 예제

```javascript
type = "zero"
var type1 = {type: "one"};
var type2 = {type: "two"};

function setType(type){
    this.type = type;
}

function getType(){
    console.log(this.type);
}

setType("_zero");
getType();

setType.call(this, "__zero");
getType.call(this);
//__zero

setType.call(type1,"_one");
getType.call(type1);
//_one

setType.call(type2,"_two");
getType.call(type2);
//_two
```
