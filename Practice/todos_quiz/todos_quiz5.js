(function() {
  // 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
  todos = [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function changeCompleted(id) {
    return todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
  }

  console.log(changeCompleted(3));
})();