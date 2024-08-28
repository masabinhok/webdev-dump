const todoList = [
  {
    name: "make dinner",
    dueDate: "2024-12-24",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
      todoList.splice(${i},1);
      renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value; // Corrected variable name

  console.log(dueDate);
  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);
  inputElement.value = "";
  dateInputElement.value='';
  renderTodoList();
}


