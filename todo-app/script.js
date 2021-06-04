const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const allBtn = document.getElementById('all-btn');
const activeBtn = document.getElementById('active-btn');
const completedBtn = document.getElementById('completed-btn');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
});

allBtn.addEventListener('click', () => {
    allBtn.classList.add('selected');
    activeBtn.classList.remove('selected');
    completedBtn.classList.remove('selected');

    Array.from(todosUL.children).forEach(todo => {
        todo.classList.remove('hidden');
    })
});

activeBtn.addEventListener('click', () => {
    console.log('active');
    allBtn.classList.remove('selected');
    activeBtn.classList.add('selected');
    completedBtn.classList.remove('selected');

    Array.from(todosUL.children).forEach(todo => {
        todo.classList.remove('hidden');
        if (todo.classList.contains('completed')) {
            todo.classList.add('hidden');
        }
    })
});

completedBtn.addEventListener('click', () => {
    allBtn.classList.remove('selected');
    activeBtn.classList.remove('selected');
    completedBtn.classList.add('selected');

    Array.from(todosUL.children).forEach(todo => {
        todo.classList.remove('hidden');
        if (!todo.classList.contains('completed')) {
            todo.classList.add('hidden');
        }
    })
});

function addTodo(todo) {
    let todoText = input.value;
    let completed = false;


    if (todo) {
        todoText = todo.text;
        completed = todo.completed;
    }

    if(todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerHTML = todoText;
        if (completed) {
            todoEl.classList.add('completed');
        }
        if (completedBtn.classList.contains('selected')) {
            todoEl.classList.add('hidden');
        }
        todosUL.appendChild(todoEl);

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            if (activeBtn.classList.contains('selected')) {
                todoEl.classList.add('hidden');
            }
            if (completedBtn.classList.contains('selected')) {
                todoEl.classList.add('hidden');
            }

            updateLS();
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        })

        input.value = '';
        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}

