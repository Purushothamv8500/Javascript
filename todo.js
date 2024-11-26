function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task.trim() === '') {
        alert('Please enter a valid task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerText = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => taskList.removeChild(li);

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}
