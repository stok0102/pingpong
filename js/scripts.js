//Business Logic
var array = []
function pingpong(n) {
  // debugger;
  for (var i = 1; i <= n; i++) {
    if (!(i%15)) {
      array.push("pingpong");
    }
    else if (!(i%3)) {
      array.push("ping");
    }
    else if (!(i%5)) {
      array.push("pong");
    }
    else {
      array.push(i);
    }
  }
  console.log(array);
  return array;
}
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#input").val();
    var result = pingpong(inputText);
    $("#result").text(result);
  });
});
