(function() {
  // 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
  todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function setTrue() {
    return todos.map(todo => todo.completed !== true ? Object.assign({}, todo, { completed: true }) : todo);
  }

  console.log(setTrue());
})();