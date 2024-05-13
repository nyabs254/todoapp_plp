const inputBox = document.getElementById('inputBox');
const listContainer= document.getElementById('list-container');
//function to add a task to the list
function addTask() {
    //check if input is empty
if(inputBox.value ==='') {
    alert('Please enter a task');
}
else{ //create a new input
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    //create a delete button
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);//append a delete button for the list
   }
   inputBox.value ='';
   saveData();
    //clear input value after adding a task
}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}