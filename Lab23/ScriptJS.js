function StartAsync() {
  var canvas = document.getElementById('Canvas');

  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    context.beginPath();
      context.rect(100, 100, 300, 250);
      context.fillStyle = "blue";
      context.fill()
    context.closePath();

    context.beginPath();
      context.rect(400, 200, 100, 150);
      context.closePath();
      context.lineWidth = "5";
      context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
      context.rect(500, 300, 100, 50);
      context.fillStyle = "green";
      context.fill()
    context.closePath();

    context.beginPath();
      context.arc(250, 400, 50, 0, Math.PI*2, false);
      context.fillStyle = "pink";
      context.fill();
    context.closePath();
    
    context.beginPath();
      context.arc(500, 400, 50, 0, Math.PI*2, false);
      context.fillStyle = "pink";
      context.fill();
    context.closePath();

    context.beginPath();
      context.moveTo(100, 450);
      context.lineTo(600, 450);
      context.closePath();
      context.strokeStyle = "brown";
    context.stroke();
  }
}

StartAsync();