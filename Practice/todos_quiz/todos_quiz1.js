(function() {
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  // 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
  // => [3, 2, 1]
  function getTodosId() {
    return todos.map(todo => todo.id);
  }
  console.log(getTodosId());
})();