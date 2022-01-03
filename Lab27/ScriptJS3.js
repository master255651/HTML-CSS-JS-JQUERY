$('#send').on('click', ShowResults);

var answers = [2, 3, 3];
var correctAnswers = 0;

function ShowResults(){
  correctAnswers = 0;
  resetColors();
  for(let i = 0; i < 3; i++){
    let radio = $(`input[name=radio${i+1}]:checked`);
    radio.val() === undefined ? $(`#q${i+1}`).css("color","red") : $(`#q${i+1}`).css("color","black");
    radio.val() == answers[i] ? radio.parent().css("color","green") : radio.parent().css("color","red");
    if(radio.val() == answers[i]) correctAnswers++;
  }
  ShowTextPercent();
}

function resetColors(){
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j ++){
      $(`input[name="radio${i+1}"][value="${j+1}"]`).parent().css("color","black");
    }
  }
}

function ShowTextPercent(){
  let percent = parseFloat((100/3)*correctAnswers).toFixed(2);
  $("#resultText").text("Correct answers: " + percent + "%");
}