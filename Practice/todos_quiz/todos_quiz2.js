(function() {

  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function getTodosId() {
    return todos.map(todo => todo.id);
  }

  // 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
  // => 3

  function getMaxNum() {
    return Math.max(...getTodosId());
  }
  console.log(getMaxNum());

})();