const string2InString1 = () => {
  const arr = [];
  let inputString1 = prompt("Input string 1");
  if (inputString1 === null) {
    alert("Aborted");
    return;
  }
  let inputString2 = prompt("Input Number2");
  if (inputString2 === null) {
    alert("Aborted");
    return;
  }
  const workWithString = (string1, string2) => {
    const plug = string2 === '"' ? "'" : '"';
    if (string1.includes(string2) == false) {
      arr.length === 0
        ? console.log("no matches")
        : console.log(
            `string1 include string2 ${arr.length} times, with index ${arr} `
          );
      return;
    } else {
      arr.push(string1.indexOf(string2) + 1);
      string = string1.replace(string2, plug.repeat(string2.length));
      return workWithString(string, string2);
    }
  };
  workWithString(inputString1, inputString2);
};
const string = "ECMAScript 2015 (6th Edition, ECMA-262)";

const numbersFromString = () => {
  const numberPattern = /\d+/g;

  console.log(string.match(numberPattern));
};

const capitalLetterFromString = () => {
  const capitalPattern = /[A-Z]/g;

  console.log(...string.match(capitalPattern));
};
