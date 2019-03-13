function getResult() {
  if ($("[name='a']").val().length > 0 &&
    $("[name='b']").val().length > 0 &&
    $("[name='c']").val().length > 0) {
    // Getting values
    var a = $("[name='a']").val();
    a = parseInt(a, 10);

    var b = $("[name='b']").val();
    b = parseInt(b, 10);

    var c = $("[name='c']").val();
    c = parseInt(c, 10);

    // Check is a == 0
    if (a === 0) {
      alert("a can't be 0");
      return;
    }
    // Counting D
    var d = b * b - 4 * a * c;

    // No roots
    if (d < 0) {
      alert("no roots, d < 0");
      return;
    }

    // 1 root
    if (d === 0) {
      var x = -b / (2 * a);
      alert("One root: " + x);
      return;
    }

    // 2 roots
    if (d > 0) {
      var x1 = (-b - Math.sqrt(d)) / (2 * a);
      var x2 = (-b + Math.sqrt(d)) / (2 * a);
      alert("Two roots: x1 = " + x1 + " x2 = " + x2);
      return;
    }
  } else {
    alert("Fill all fields");
  }
}

function onlyNumbers(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!(/[0-9|.|+|-]/.test(ch))) {
    evt.preventDefault();
  }
}