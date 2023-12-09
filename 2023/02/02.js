import fs from "fs";

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// [ [3 blue, 4 red], [1red, 2 gree], [6 blue, 2 gree] ]

const MAX = {
  blue: 14,
  green: 13,
  red: 12,
};

const firstPart = (file) => {
  const lines = fs.readFileSync(file, "utf8").trim().split("\n");

  let sum = 0;

  const games = lines.map((line) => line.split(": ")[1]);

  for (let i = 0; i < games.length; i++) {
    const subsets = games[i].split("; ");
    let isValid = true;

    for (let j = 0; j < subsets.length; j++) {
      const cubes = subsets[j].split(", ");
      cubes.forEach((cube) => {
        const [count, color] = cube.split(" "); // ['1', 'red']
        if (parseInt(count) > MAX[color]) {
          isValid = false;
        }
      });
    }

    // increment
    if (isValid) {
      sum += i + 1;
    }
  }

  return sum;
};
console.log(firstPart("./input.txt"));
