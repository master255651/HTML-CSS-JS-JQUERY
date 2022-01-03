var colors = ['#aed663', '#820000', '#2816f2'];

function StartAsync() {
  var canvas = document.getElementById('Canvas');
  var canvasText = document.getElementById('TextCanvas');

  if (canvas.getContext) {
    var context = canvas.getContext('2d');
    var contextText = canvasText.getContext('2d');
    var space = 0;
    var heightCell = 25;
    var tableHeight = 500;
    var cellSpacing = 20;
    var fullCellWidth = 100;
    var textSpaceHeight = 15;

    context.clearRect(0, 0, canvas.width, canvas.height);
    contextText.clearRect(0, 0, canvasText.width, canvasText.height);

    for (let i = 1; i < 4; i++) {
      for (let j = 2; j < 5; j++) {
        var cell_value = document.getElementsByTagName("table")[0].rows[i].cells[j].textContent;
        
        context.beginPath();

        let textWidth;
        if(cell_value < 10){
          textWidth = 20;
        }
        else{
          textWidth = 10;
        }

        context.font = "30px Verdana";
          context.strokeStyle = colors[(space + 1) % 3];
          context.strokeText(cell_value,
             cellSpacing + fullCellWidth * space + textWidth,
             tableHeight - cell_value * heightCell - textSpaceHeight);

        context.rect(
          cellSpacing + fullCellWidth * space++,
           tableHeight - cell_value * heightCell,
            fullCellWidth - cellSpacing * 2,
             cell_value * heightCell);
             
        context.fillStyle = colors[space % 3];
        context.fill()
        context.closePath();
      }
    }
    
    let spaceText = 0;
    for(let i = 0; i < 3; i ++){
      for (let j = 2; j < 5; j++) {
        var cell_value = document.getElementsByTagName("table")[0].rows[0].cells[j].textContent;
  
        contextText.beginPath();
  
          contextText.font = "23px Verdana";
          contextText.strokeStyle = colors[(spaceText + 1) % 3];
          contextText.strokeText(cell_value,
               10 + 100 * spaceText++,
                35);
  
          contextText.closePath();
      }
    }
  }
}

let table = document.getElementsByTagName("table")[0];
table.addEventListener("click", (element) => {
  if (element.target.nodeName == "TD") {
    let promptValue = prompt("Введите новое значение:");
    element.target.textContent = promptValue;
    StartAsync();
  }
});