document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const newTaskDescription = document.getElementById('new-task-description').value;

    if (newTaskDescription !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = newTaskDescription;
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      document.getElementById('new-task-description').value = '';
    }
  });
});
