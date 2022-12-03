import {readFileSync} from "fs";
const textFile = readFileSync("./inputs/day3.txt").toString("utf-8");
const rucksacks = textFile.split(/\r?\n/);

function calculateScore(letter) {
  let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let number
  for(let i = 1; i < lowercase.length; i++){
    if(lowercase.includes(letter)) number = lowercase.indexOf(letter) + 1
    if(uppercase.includes(letter)) number = uppercase.indexOf(letter) + 27
  }
  return number
}


function compareCompartments(firstCompartment, secondCompartment, third) {
  let commonLetter;
  for(let letter of firstCompartment ){
    if(secondCompartment.includes(letter) && third === undefined) commonLetter = letter
    else if(secondCompartment.includes(letter) && third.includes(letter)) commonLetter = letter
  }
  return calculateScore(commonLetter)
}

function splitCompartments(rucksack) {
  if(rucksack.length === 3 ) {
    return compareCompartments(rucksack[0], rucksack[1], rucksack[2])
  }
  const half = Math.ceil(rucksack.length / 2)
  const firstCompartment = rucksack.slice(0, half)
  const secondCompartment = rucksack.slice(half)
  return compareCompartments(firstCompartment, secondCompartment)
}

function filterData(rucksacks) {
  let newArr = [];
  for(let rucksack of rucksacks) {
    newArr.push(splitCompartments(rucksack))
  }
  return newArr.reduce((a, b) => a + b)
}

function createGroups(rucksack) {
  let groupsOfThree = []
  for(let i = 0; i < rucksack.length; i+=3){
    const group = rucksack.slice(i, i + 3)
    groupsOfThree.push(group)
  }
  return groupsOfThree
}

function filterData2(rucksack) {
  let newArr =[];
  let groupsOfThree = createGroups(rucksack)
  for(let group of groupsOfThree) {
    newArr.push(splitCompartments(group))
  }
  return newArr.reduce((a, b) => a + b)
}


console.log(filterData(rucksacks))
console.log(filterData2(rucksacks))