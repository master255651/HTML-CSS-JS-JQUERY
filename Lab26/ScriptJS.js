//1
$('#images')
    .mouseover(() => {
        $("#firstImage").attr("src","secondImage.png");
        $("#secondImage").attr("src","firstImage.png");
    })
    .mouseout(() => {
        $("#firstImage").attr("src","firstImage.png");
        $("#secondImage").attr("src","secondImage.png");
    })

// 2
$("#FindZero").click(function(){
  $("#table tr").each(function () {
    $('td').each(function () {
        if (this.textContent == 0) {
            $(this).css({
                'background': "#ff0000",
            });
        }
    })
  })
});

//3
$("#AddNewRow").click(function(){
  $('<input type="text" value="test"><br>').appendTo('#inputs');
});

//4
$('#task4')
    .mouseover(() => {
        $('#h1').css('opacity', '1');
        $('#href').css('opacity', '1');
    })
    .mouseleave(() => {
      $('#h1').css('opacity', '0');
      $('#href').css('opacity', '0');
    })

//5
let sum = 0;
$('input[type="checkbox"]').on("change", function() {
  sum = 0;
    $('input[type="checkbox"]:checked').each(function() {
      sum += parseFloat($(this).val());
    });
    $('#sum').val(sum);
});

//6
$("#execute").click(function(){
  let code = $('#query').val();
  eval(code);
});