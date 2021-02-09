//gets tast from input
function get_todos() {
    //this creates an array of task that are inputed
    var todos = new Array;
    //this pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    //if the pinput is not null then JSON.parse will comminicate with web browser to make the task a javascript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;

}

//this function adds the inputed task to the get_todos function array
function add() {
    var task = document.getElementById('task').value;//this takes the inputed task and creates a variable of it
    
    var todos = get_todos();
    //this adds a new task the end of the array
    todos.push(task);
    //this converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//this function keeps the tasks permanetly displayed on the scree
function show() {
      //this sets the task that was retrieved as a variable
    var todos = get_todos();
    //this sets up each task s an unorded list
    var html = '<ul>';
    //this displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        //this also displays the task as a list and creats the button with the x
        html += '<li>' + todos[i] + '<button class="remove" id="'+i+'">x</button></li>';
    };
    html += '</ul>'
    //this displays the task s a list
    document.getElementById('todos').innerHTML = html;
    
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
//this dislays the inputed task when the add item button is clicked
document.getElementById('add').addEventListener('click', add);
//this keeps the inputs displayed permanetly on the screen
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}