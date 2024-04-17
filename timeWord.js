const numWord = {
  0: "oh ",
  1: "one ",
  2: "two ",
  3: "three ",
  4: "four ",
  5: "five ",
  6: "six ",
  7: "seven ",
  8: "eight ",
  9: "nine ",
  10: "ten ",
  11: "eleven ",
  12: "twelve ",
  13: "thirteen ",
  14: "fourteen ",
  15: "fifteen ",
  16: "sixteen ",
  17: "seventeen ",
  18: "eighteen ",
  19: "nineteen ",
  20: "twenty ",
  30: "thirty ",
  40: "fourty ",
  50: "fifty ",
};

function timeWord(str) {
  // if oddballs return oddball string
  if (str === "00:00") {
    return "midnight";
  }
  if (str === "12:00") {
    return "noon";
  }

  // split to 2 vars [hours, minutes] and convert to number
  let [hours, minutes] = str.split(":");
  // create output and add hour number words to ouput
  hours = Number(hours);
  let output = "";
  if (hours <= 11) {
    output += hours === 0o0 ? "twelve " : numWord[hours];
  } else {
    let nonMilitaryHours = hours - 12;
    output += nonMilitaryHours === 0o0 ? "twelve " : numWord[nonMilitaryHours];
  }
  // add minutes number words to output
  if (minutes === `00`) {
    output += "o'clock ";
  } else {
    const tens = Number(minutes.at(0));
    const ones = Number(minutes.at(1));
    if (tens !== 0 && numWord[Number(minutes)]) {
      output += numWord[minutes];
    } else {
      output += numWord[tens * 10] + numWord[ones];
    }
  }

  output += hours <= 11 ? "am" : "pm";
  return output;
}

module.exports = timeWord;
