$(document).ready(function () {
  var $screen = $("#screen");
  var operator = null;
  var x = 0;
  var y = 0;
  var keepY = 0;
  var keepOperator = null;
  var shouldResetX = false;

  function calculate(x, operator, y) {
    var z;
    switch (operator) {
      case "plus":
        z = x + y;
        break;
      case "minus":
        z = x - y;
        break;
      case "multiplication":
        z = x * y;
        break;
      case "division":
        z = x / y;
        break;
    }
    return z;
  }
  function equal() {
    var z;
    if (operator) {
      if (y === 0) {
        y = x;
      }
      z = calculate(x, operator, y);

      setNumber(z);
      x = z;
      keepY = y;
      keepOperator = operator;
      shouldResetX = true;
      y = 0;
      operator = null;
    } else {
      if (keepOperator) {
        z = calculate(x, keepOperator, keepY);
        setNumber(z);
        x = z;
      }
    }
  }
  function setNumber(number) {
    if (isNaN(number)) {
      $screen.text("錯誤");
    } else {
      $screen.text(number);
    }
  }

  $("#clear").click(function () {
    setNumber(0);
    operator = null;
    x = 0;
    y = 0;
    keepY = 0;
    keepOperator = null;
    shouldResetX = false;
  });

  for (let number = 0; number < 10; number++) {
    $("#btn-" + number).click(function () {
      if (operator) {
        y = +(String(y) + number);
        setNumber(y);
      } else {
        if (shouldResetX) {
          x = number;
          shouldResetX = false;
        } else {
          x = +(String(x) + number);
        }
        setNumber(x);
      }
    });
  }
  $("#negative").click(function () {
    if (operator) {
      y = y * -1;
      setNumber(y);
    } else {
      x = x * -1;
      setNumber(x);
    }
  });

  $("#percentage").click(function () {
    if (operator) {
      y = y * 0.01;
      setNumber(y);
    } else {
      x = x * 0.01;
      setNumber(x);
    }
  });

  $(".operator").click(function () {
    if (operator && y) {
      equal();
    }
    y = 0;
    operator = $(this).get(0).id;
  });

  $("#equal").click(equal);
});
