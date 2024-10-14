const initialTodos = ["Carolla", "Civic", "Revo"];

// Load initial todos
const loadTodos = () => {
    const todoList = document.getElementById('todoList');
    initialTodos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `${todo} <span class="remove" onclick="removeTodo(this)">❌</span>`;
        todoList.appendChild(li);
    });
};

// Add todo
const addTodo = () => {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `${todoText} <span class="remove" onclick="removeTodo(this)">❌</span>`;
        document.getElementById('todoList').appendChild(li);
        input.value = ''; // Clear input
    }
};

// Remove todo
const removeTodo = (element) => {
    element.parentElement.remove();
};

// Load todos on page load
loadTodos();
