const round = () => {
  const inputNumber1 = prompt("Input Number1");
  if (inputNumber1 === null) {
    alert("Aborted");
    return;
  }
  if (!isNaN(inputNumber1) && !isNaN(parseFloat(inputNumber1))) {
    const number1 = parseFloat(inputNumber1);
    const inputNumber2 = prompt("Input Number2");
    if (inputNumber1 === null) {
      alert("Aborted");
      return;
    }
    {
      if (!isNaN(inputNumber2) && !isNaN(parseFloat(inputNumber2))) {
        const number2 = parseFloat(inputNumber2);
        const result = number1 * number2 * 0.3;
        console.log(Math.round(result));
      } else alert("wrong value");
    }
  } else alert("wrong value");
};

const randomBetweenInclude = () => {
  const inputNumber1 = prompt("Input Number1");
  if (inputNumber1 === null) {
    alert("Aborted");
    return;
  }
  if (!isNaN(inputNumber1) && !isNaN(parseFloat(inputNumber1))) {
    const number1 = parseFloat(inputNumber1);
    const inputNumber2 = prompt("Input Number2");
    if (inputNumber1 === null) {
      alert("Aborted");
      return;
    }
    {
      if (!isNaN(inputNumber2) && !isNaN(parseFloat(inputNumber2))) {
        const number2 = parseFloat(inputNumber2);
        if (number1 < number2) {
          min = Math.ceil(number1);
          max = Math.floor(number2);
          console.log(Math.floor(Math.random() * (max - min + 1)) + min);
        } else {
          min = Math.ceil(number2);
          max = Math.floor(number1);
          console.log(Math.floor(Math.random() * (max - min + 1)) + min);
        }
      } else alert("wrong value");
    }
  } else alert("wrong value");
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const consoleRandom = (arr) => {
  if (arr.length === 1) {
    console.log(arr[0]);
  } else {
    console.log(arr.random());
  }
};

const randomBetweenExclude = () => {
  const arr = [];
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
            arr.push(i);
          }
          consoleRandom(arr);
        } else {
          if (number1 - number2 <= 1) {
            console.log("No between");
            return;
          }
          for (let i = number2 + 1; i < number1; i++) {
            arr.push(i);
          }
          consoleRandom(arr);
        }
      } else alert("wrong value");
    }
  } else alert("wrong value");
};
