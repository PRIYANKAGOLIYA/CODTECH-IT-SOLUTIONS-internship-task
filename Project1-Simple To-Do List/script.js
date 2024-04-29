function addTask() {
    var taskInput = document.getElementById('taskInput');
    var newTask = taskInput.value;
    if (newTask) {
        var li = document.createElement('li');
        li.textContent = newTask;
        li.onclick = function () {
            this.parentNode.removeChild(this);
        };
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // clear input
    } else {
        alert("Please enter a task!");
    }
}
