//#1
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0)
    console.log(i);
}

//#2
var str = "";
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0)
    str += i;
}
console.log(str);

//#3
for (var i = 10; i > 0; i--) {
  if (i % 2 != 0)
    console.log(i);
}

//#4
var num = 0;
while (num < 10) {
  if (num % 2 == 0)
    console.log(num);
  num++;
}

//#5
var num = 10;
while (num > 0) {
  if (num % 2 != 0)
    console.log(num);
  num--;
}

//06.for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
var sum = 0;

for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

//#7. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var res = 0;

for (var i = 1; i < 21; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    res += i;
  }
}
console.log(res);

//#8. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var res = 0;
for (var i = 1; i < 21; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    res += i;
  }
}
console.log(res);

//#9. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
//for문

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    var num = i + j;
    if (num == 6) {
      console.log('[' + i + ',' + j + ']');
    }
  }
}

//while문

var ju1 = 1;
var res = [];

while (ju1 < 7) {

  var ju2 = 1;
  while (ju2 < 7) {
    var sum = ju1 + ju2;

    if (sum === 6) {
      res = [ju1, ju2];
      console.log(res);
    }
    ju2++;
  }
  ju1++;
}

//#10. 삼각형출력하기
var result = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

//#11. 트리 출력하기

//내가한것
var result = "";
for (var i = 0; i < 3; i++) {
  for (var j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

//다른사람 풀이 - 마지막 sum호출시 \n 때문에 줄바꿈이된다.
var star = '';
var sum = '';
for (var i = 1; i <= 5; i++) {
  star += '*';
  sum += star + '\n';
  if (i === 3)
    console.log(sum);
}
console.log(sum);

//#12. 정삼각형 출력하기

//내가풀은것
var result = "";
for (var i = 0; i < 5; i++) {
  for (var j = 1; j < 5 - i; j++) {
    result += " ";
  }
  for (var k = 0; k < (i * 2) + 1; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

//12정삼각형 출력 - 다른사람 풀이(Math, repeat 내장함수 이용)
var star = '*';
var space = ' ';
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    var temp = 0;
    temp = Math.floor((10 - i) / 2);
    console.log(space.repeat(temp) + star.repeat(i));
  }
}

console.log('\n----------');
console.log('\n');
//#13. 역정삼각형 출력하기
var result = "";
for (var i = 0; i < 5; i++) {

  for (var k = 0; k < i; k++) {
    result += " ";
  }
  for (var j = 0; j < 9 - (i * 2); j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);