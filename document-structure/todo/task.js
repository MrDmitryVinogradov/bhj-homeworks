let taskInput = document.querySelector('.tasks__input');
let tasksList = document.querySelector('.tasks__list');
let tasks = [];
let closingButtons = [];
document.addEventListener('keydown', function (e) {
    if (taskInput.value && e.key == 'Enter') {
        let task = document.createElement('div');
        task.innerHTML = '<div class=\"task__title\"> </div> <a href=\"#\" class=\"task__remove\">&times;</a>';
        tasksList.appendChild(task);
        task.classList.add('task');
        let taskTitle = task.querySelector('.task__title');
        taskTitle.innerText = taskInput.value;
        taskInput.value = '';
        tasks.push(task);
    }
});
