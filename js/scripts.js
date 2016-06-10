//Business Logic
function pingpong(n) {
  var array = []
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
  return array;
}
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var inputText = $("#input").val();
    var result = pingpong(inputText);
    result.forEach(function(term) {
      $("ul").append("<li>" + term + "</li>");
    });
  });
});
