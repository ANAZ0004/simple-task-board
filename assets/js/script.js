// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("taskList"));
let nextID = JSON.parse(localStorage.getItem("nextID"));

if (!taskList) {
    taskList = [];
    localStorage.setItem("taskList",JSON.stringify(taskList));
}

if (!nextID) {
    nextID = 1;
    localStorage.setItem("nextID",JSON.stringify(nextID));
}

// Todo: create a function to generate a unique task id
function generateTaskID() {
    nextID = JSON.parse(localStorage.getItem("nextID"));
    nextID++;
    localStorage.setItem("nextID",JSON.stringify(nextID)); // Update nextID
    return nextID;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = null;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const task = {
        id: generateTaskID(),
        title: $("#taskTitleInput").val(),
        description: $("#taskDescriptionInput").val(),
        date: $("#taskDueDateInput").val(),
        status: 1 // 1: TO DO | 2: IN PROGRESS | 3: DONE
    }
    taskList = JSON.parse(localStorage.getItem("taskList"));
    taskList.push(task);
    localStorage.setItem("taskList", JSON.stringify(taskList)); // Update task list
    renderTaskList();

    // Clear the form
    $("#taskTitleInput").val("");
    $("#taskDescriptionInput").val("");
    $("#taskDueDateInput").val("");
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {


    // Create add task listener
    $('#addTaskForm').on('submit', handleAddTask);


    // Make lanes droppable
    $('.lane').droppable({
        accept: '.draggable',
        drop: handleDrop,
    });
    // Create datepicker
    $('#taskDueDateInput').datepicker({
        changeMonth: true,
        changeYear: true,
    });
});
