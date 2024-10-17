const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const charactersExcNumbSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let displayEl = document.getElementById("display-el");
let displayElTwo = document.getElementById("display-el-two");

let setPasswordLength = document.getElementById("set-length");
let symbolsNumbersBox = document.getElementById("set-syms-numb");

function generatePassword() {
  let passwordLength = setPasswordLength.value;
  let password = "";
  let secondPassword = "";

  if (symbolsNumbersBox.checked) {
    for (let i = 0; i < passwordLength; i++) {
      let generateIndex = Math.floor(Math.random() * characters.length);
      let generateIndexTwo = Math.floor(Math.random() * characters.length);
      password += characters[generateIndex];
      secondPassword += characters[generateIndexTwo];
    }
  } else if (!symbolsNumbersBox.checked) {
    for (let i = 0; i < passwordLength; i++) {
      let generateIndex = Math.floor(
        Math.random() * charactersExcNumbSymbols.length
      );
      let generateIndexTwo = Math.floor(
        Math.random() * charactersExcNumbSymbols.length
      );
      password += charactersExcNumbSymbols[generateIndex];
      secondPassword += charactersExcNumbSymbols[generateIndexTwo];
    }
  }

  displayEl.textContent = password;
  displayElTwo.textContent = secondPassword;
}

function copyText() {
  //Copy the text inside the text field
  navigator.clipboard.writeText(password);

  //Alert that the text has been copied
  alert("Copied to Clipboard: " + password);
}
