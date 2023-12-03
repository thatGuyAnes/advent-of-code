const fs = require("fs");
const readline = require("readline");

const getFirstNumber = (line) => {
  for (i in line) {
    if (parseInt(line[i])) {
      return line[i];
    }
  }
};

const getLastNumber = (line) => {
  for (let i = line.length - 1; i >= 0; i--) {
    if (parseInt(line[i])) {
      return line[i];
    }
  }
};

const firstLast = (line) => {
  let first = getFirstNumber(line);
  let last = getLastNumber(line);
  return `${first}${last}`;
};

async function getCoordinates(file) {
  const coordinates = [];
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}, type of: ${typeof line[0]}`);
    coordinates.push(firstLast(line));
  }
  return coordinates;
}

const sumOfCoordinates = async () => {
  const coordinates = await getCoordinates("./input.txt");
  return coordinates.reduce((acc, current) => acc + parseInt(current), 0);
};

const main = async () => {
  try {
    const sum = await sumOfCoordinates();
    console.log(sum);
    return sum;
  } catch (error) {
    console.error(error);
  }
};

main();
