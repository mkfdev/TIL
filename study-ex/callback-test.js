
//콜백함수로 전달한 메서드를 정의
var ClientData = {
    id: 093333,
    fullName: "Not Set",
    //ClientData의 메서드
    setUserName: function(firstName, lastName){
        this.fullName = firstName + " " + lastName;
    }
}

// console.log(window.fullName);무
// 문제점: function getUserInput이 전역함수이기 때문에 this가 전역을 바라본다
// 해결 : apply함수를 이용해서 this가 내부함수를 바라볼 수 있게 정의한다.
// function getUserInput(firstName, lastName, callback){
//     callback(firstName, lastName);
// }
function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}

getUserInput("Minkyung","Choi",ClientData.setUserName, ClientData);
console.log(ClientData.fullName);
//console.log(fullName);