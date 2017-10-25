(function() {
  // 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
  todos = [
    { id: 4, content: 'Test', completed: true },
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function countTodos() {
    return todos.filter(todo => todo.completed === true).length;
  }

  console.log(countTodos());
})();