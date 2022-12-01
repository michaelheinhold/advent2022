import {readFileSync} from 'fs';
const textFile = readFileSync('./inputs/day1.txt').toString('utf-8');
const elves = textFile.split(/\r?\n\r?\n/);

function solutions(text) {
  const combinedCals = text.map(elf => {
    const eachItem = elf.split(/\r?\n/)
    let totalCals = 0;
    eachItem.map(e => totalCals += +e)
    return totalCals
  })
  const largeToSmall = combinedCals.sort((a, b) => b - a)
  const topThree = largeToSmall.slice(0, 3)
  const threeLargestSums = topThree[0] + topThree[1] + topThree[2]
  console.log(largeToSmall[0])
  console.log(threeLargestSums)
}

solutions(elves);