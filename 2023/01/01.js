import fs from "fs";

const firstPart = (file) => {
  const LINES = fs.readFileSync(file, "utf8").trim().split("\n");
  const result = LINES.map((line) => {
    let first = line.split("").find((el) => parseInt(el));
    let last = line.split("").findLast((el) => parseInt(el));
    return Number(first + last);
  });
  return result.reduce((sum, el) => sum + el, 0);
};

// console.log(firstPart("./input.txt"));

const findFirstNumber = (input) => {
  const numbers = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const pattern = new RegExp(Object.keys(numbers).join("|"), "gi");

  const replace = input.replace(
    pattern,
    (match) => numbers[match.toLowerCase()],
  );

  let firstDigitMatch = replace.match(/\d/);
  let first = firstDigitMatch ? parseInt(firstDigitMatch[0]) : 0;
  return first;
};

const findLastNumber = (input) => {
  const numbers = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const pattern = new RegExp(
    Object.keys(numbers)
      .map((key) => key.split("").reverse().join(""))
      .join("|"),
    "gi",
  );
  const reversedInput = input.split("").reverse().join("");
  const replace = reversedInput.replace(
    pattern,
    (match) => numbers[match.toLowerCase().split("").reverse().join("")],
  );
  let firstDigitMatch = replace.match(/\d/);
  return firstDigitMatch ? parseInt(firstDigitMatch[0]) : 0;
};

// console.log(findLastNumber("85ntwonexlm"));
// console.log(findFirstNumber("85ntwonexlm"));

const secondPart = (file) => {
  const LINES = fs.readFileSync(file, "utf8").trim().split("\n");
  const result = LINES.map((line) => {
    let first = findFirstNumber(line);
    let last = findLastNumber(line); //    console.log(first * 10 + last);
    return first * 10 + last;
  });
  return result.reduce((sum, el) => sum + el);
};

console.log(secondPart("./input.txt"));
