//비동기 함수
function asyncFunc(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (param ? resolve('resolved!') : reject('rejected!')), 1000);
  });
}

asyncFunc(true)
  .then(
    result => console.log(result),
    reason => {
      result => console.log(reason);
      throw 'Error:' + reason;
    }
  )
  .catch(err => console.log(err));


asyncFunc(false)
  .then(
    result => console.log(result),

    reason => {
      console.log(reason);
      throw 'Error:' + reason;
    }
  )

.catch(err => console.log(err));