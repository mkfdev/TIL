(function() {
  // 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
  todos = [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function removeTodos(id) {
    return todos = todos.filter(todo => todo.id !== id);
  }

  console.log(removeTodos(4));
})();