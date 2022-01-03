var InProgress = false;
var previousItem;

$("#CreateNewItem").keypress((event) => {
  if(event.keyCode != 13){
    return
  }

  let text = $("#CreateNewItem").val();
  if(text == ""){
    alert("Новый элемент не может быть пустым!");
    return;
  }

  $("#list").append(`<li><input type="checkbox"><input type="text" class="item" value='${text}' readonly><button class="deleteButton"></button></li>`);
  $("#CreateNewItem").val("");
});

$(document).on('dblclick','.item', function(){
  if(InProgress){
    alert("Нельзя редактировать сразу несколько элементов!");
    previousItem.focus();
    return;
  }

  InProgress = true;
  previousItem = $(this);
  $(this).prop("readonly", false);
  $(this).keypress((event) => {
    if(event.keyCode == 13){
      if($(this).val() == ""){
        alert("Новый элемент не может быть пустым!");
      }
      else{
        $("#CreateNewItem").focus();
        $(this).prop("readonly", true);
        InProgress = false;
      }
    }
  })
});

$(document).on('click', '.deleteButton', function() {
  $(this).parent().remove();
});

$(document).on('click', 'input[type=checkbox]', function() {
  let text = $(this).parent('li').children('.item');
  text.css({
    'text-decoration': 'line-through',
    'margin-left' : '25px',
    'opacity': '0.5'
  });
  $(this).css('display', 'none');
});