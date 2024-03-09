const convert = document.getElementById("convert");
const reset = document.getElementById("reset");

const mapping = {
  "A": "ą",
  "B": "ც",
  "C": "ƈ",
  "D": "ɖ",
  "E": "ɛ",
  "F": "ʄ",
  "G": "ɠ",
  "H": "ɧ",
  "I": "ı",
  "J": "ʝ",
  "K": "ƙ",
  "L": "Ɩ",
  "M": "ɱ",
  "N": "ŋ",
  "O": "ơ",
  "P": "℘",
  "Q": "զ",
  "R": "ཞ",
  "S": "ʂ",
  "T": "ɬ",
  "U": "ų",
  "V": "۷",
  "W": "ῳ",
  "X": "ҳ",
  "Y": "ყ",
  "Z": "ʑ",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
  " ": "`"
};

text.oninput = function() {
  let text = document.getElementById("text").value
  text = text.toUpperCase();
  let array1 = text.split("");
  let array2 = array1.map(x => {
    if (mapping[x]) {
      return mapping[x];
    } else {
      return x;
    }
  });
  let code = array2.join(" ");
  document.getElementById("code").innerText = code;
  localStorage.setItem("text", text);
  localStorage.setItem("code", code);
};

reset.onclick = function() {
  text.value = "";
  code.innerText = "";
  text.focus();
}

window.onload = function() {
  text.value = localStorage.getItem("text");
  code.innerText = localStorage.getItem("code");
  text.focus();
}
