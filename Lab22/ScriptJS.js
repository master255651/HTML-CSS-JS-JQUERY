var students = document.querySelectorAll('.list-group-item');
var containers = document.querySelectorAll('.Block');

function allowDrop(event){
  event.preventDefault();
}

function start(event){
  event.dataTransfer.setData("id", event.target.id);
}

function drop(event){
  let itemId = event.dataTransfer.getData('id');

  if(event.currentTarget.id == 'Trash'){
    var elem = document.getElementById(itemId);
    elem.parentNode.removeChild(elem);
    return;
  }

  event.currentTarget.append(document.getElementById(itemId));
}

containers.forEach(container => {
  container.ondragover = allowDrop;
})

students.forEach(student => {
  student.ondragstart = start;
})

containers.forEach(container => {
  container.ondrop = drop;
})