import {readFileSync} from 'fs';
const textFile = readFileSync('./inputs/day1.txt').toString('utf-8');
const elves = textFile.split(/\r?\n\r?\n/);

function solutions(text) {
  const combinedCals = text.map(elf => elf.split(/\r?\n/).map(Number).reduce((a, b) => a + b));
  const largeToSmall = combinedCals.sort((a, b) => b - a)
  const threeLargestSums = largeToSmall.slice(0, 3).reduce((a, b) => a + b)
  console.log(largeToSmall[0])
  console.log(threeLargestSums)
}

solutions(elves);