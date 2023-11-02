// 获取元素

const form = document.querySelector(".form");

const input = document.querySelector(".input");

const todos = document.querySelector(".todos");

// 提交list

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});



function addTodo(todo) {
 let todoText = input.value;
 if (todo) {
   todoText = todo.text;
 }

 if (todoText) {
   const todoEl = document.createElement("li");
   if (todo && todo.completed) {
     todoEl.classList.add("completed");
   }
   todoEl.innerText = todoText;
   todoEl.addEventListener("click", () => {
     todoEl.classList.toggle("completed");
     updateLS();
   });
   todoEl.addEventListener("contextmenu", (e) => {
     e.preventDefault();
     todoEl.remove();
     updateLS();
   });

   todosUL.appendChild(todoEl);
   input.value = "";
   todos.appendChild(todoEl); // 添加这行代码来更新todos元素的HTML结构
   updateLS();
 } else {
   input.value = todoText;
 }
}
