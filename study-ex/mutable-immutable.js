var strA = 'string is an immutable value';
var strB = strA.slice(13,22);

console.log(strA);
console.log(strB);
//문자는 복사본을 리턴하여 slice를 진행한다.
//기존의 문자열은 사라지지 않고 메모리에 남아있다.
//문자는 변경불가능한(immtable) 값이기 때문.

var arr = [];
console.log(arr.length);

var arr2 = arr.push(2);
console.log(arr.length);
//직접 대상 배열을 변경한다.
//배열은 객체, 변경가능한(mutable) 값이기 떄문.


// user.name이 변경된다 하더라도 
// string은 immutable한 값을 가지기 때문에
// myName이 참조하고 있는 Lee는 변함이 없다.
var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var myName = user.name;

user.name = 'Kim';
console.log(myName);

myName = user.name;
console.log(myName);


// 객체는 변경가능한 값이므로 
// user2의 name은 변경된다.
// user1과 user2는 같은 어드레스를 참조하고 있기 때문에
// 동시에 변경된다.
var user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var user2 = user1;
user2.name = 'Kim';

console.log(user1.name);
console.log(user2.name);


//객체의 방어적 복사 - Object.assign
// Object.assign은 ES6에서 추가된 메소드. ie에서는 지원안함.
//객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사를 통해
// 새로운 객체를 생성한 후 변경하는 방법

const ob1 = { a: 1 };
const ob2 = { b: 2 };
const ob3 = { c: 3 };

//Object.assign(target, source객체)
const merge1 = Object.assign(ob1,ob2,ob3);

console.log(merge1);
console.log(ob1);
console.log(ob2);
console.log(ob3);
//타겟 객체가 변경된다.

const ob4 = { a: 4 };
const ob5 = { b: 5 };
const ob6 = { c: 6 };

const merge2 = Object.assign({}, ob4, ob5, ob6);

console.log(merge2);
console.log(ob4);