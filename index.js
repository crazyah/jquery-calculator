$(document).ready(function () {
  var $screen = $("#screen");

  function getNumber() {
    return +$screen.text();
  }
  function setNumber(number) {
    $screen.text(number);
  }
  $("#clear").click(function () {
    setNumber(0);
  });

  for (let i = 0; i < 10; i++) {
    $("#btn-" + i).click(function () {
      var number = getNumber()
        setNumber(+(String(number) + i));
    });
  }
  $("#negative").click(function () {
    setNumber(getNumber() * -1);
  });

  $("#percentage").click(function () {
    setNumber(getNumber() * 0.01);
  });
});
