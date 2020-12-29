const between = () => {
  const inputNumber1 = prompt("Input Number1");
  if (inputNumber1 === null) {
    alert("Aborted");
    return;
  }
  if (!isNaN(inputNumber1) && !isNaN(parseFloat(inputNumber1))) {
    const number1 = Math.floor(parseFloat(inputNumber1));
    const inputNumber2 = prompt("Input Number2");
    if (inputNumber1 === null) {
      alert("Aborted");
      return;
    }
    {
      if (!isNaN(inputNumber2) && !isNaN(parseFloat(inputNumber2))) {
        const number2 = Math.ceil(parseFloat(inputNumber2));
        if (number1 < number2) {
          if (number2 - number1 <= 1) {
            console.log("No between");
            return;
          }
          for (let i = number1 + 1; i < number2; i++) {
            console.log(i);
          }
        } else {
          console.log(number2, number1);
          if (number1 - number2 <= 1) {
            console.log("No between");
            return;
          }
          for (let i = number2 + 1; i < number1; i++) {
            console.log(i);
          }
        }
      } else alert("wrong value");
    }
  } else alert("wrong value");
};

const squareArrow = () => {
  const inputNumber1 = prompt("Input Number1");
  if (inputNumber1 === null) {
    alert("Aborted");
    return;
  }
  if (!isNaN(inputNumber1) && !isNaN(parseFloat(inputNumber1))) {
    const number1 = Number(inputNumber1);
    const inputNumber2 = prompt("Input Number2");
    if (inputNumber1 === null) {
      alert("Aborted");
      return;
    }
    {
      if (!isNaN(inputNumber2) && !isNaN(parseFloat(inputNumber2))) {
        const number2 = Number(inputNumber2);
        console.log(number1 ** number2);
      } else {
        console.log(number1 ** 2);
      }
    }
  } else alert("wrong value");
};

function squareExpression() {
  const inputNumber1 = prompt("Input Number1");
  if (inputNumber1 === null) {
    alert("Aborted");
    return;
  }
  if (!isNaN(inputNumber1) && !isNaN(parseFloat(inputNumber1))) {
    const number1 = Number(inputNumber1);
    const inputNumber2 = prompt("Input Number2");
    if (inputNumber1 === null) {
      alert("Aborted");
      return;
    }
    {
      if (!isNaN(inputNumber2) && !isNaN(parseFloat(inputNumber2))) {
        const number2 = Number(inputNumber2);
        console.log(number1 ** number2);
      } else {
        console.log(number1 * number1);
      }
    }
  } else alert("wrong value");
}
