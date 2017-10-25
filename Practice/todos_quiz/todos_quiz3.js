(function() {
  // 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
  todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  function addTodos() {
    return todos = [{ id: 4, content: 'Test', completed: false }, ...todos];
  }

  console.log(addTodos());
})();