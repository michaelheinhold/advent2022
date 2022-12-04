import {readFileSync} from "fs";
const textFile = readFileSync("./inputs/day4.txt").toString("utf-8");
const data = textFile.split(/\r?\n/);

let completeOverlapCount = 0;
let overlapCount = 0;
const numbers = [];
for(let i= 0; i < 100; i++) {
  numbers.push(i)
}

// PART 1
function determineCompleteOverlaps(set1, set2) {
  const splitSet1 = set1.split('-').map(Number)
  const splitSet2 = set2.split('-').map(Number)
  let spreadSet1 = [];
  let spreadSet2 = [];
  for(let i = splitSet1[0]; i <= splitSet1[1]; i++){
    spreadSet1.push(i)
  }
  for(let i = splitSet2[0]; i <= splitSet2[1]; i++){
    spreadSet2.push(i)
  }
  if(spreadSet1.includes(splitSet2[0]) && spreadSet1.includes(splitSet2[1])) completeOverlapCount++
  else if(spreadSet2.includes(splitSet1[0]) && spreadSet2.includes(splitSet1[1])) completeOverlapCount++
}

// PART 2
function determineOverlaps(set1, set2) {
  const splitSet1 = set1.split('-').map(Number)
  const splitSet2 = set2.split('-').map(Number)
  let spreadSet1 = [];
  let spreadSet2 = [];
  for(let i = splitSet1[0]; i <= splitSet1[1]; i++){
    spreadSet1.push(i)
  }
  for(let i = splitSet2[0]; i <= splitSet2[1]; i++){
    spreadSet2.push(i)
  }
  if(spreadSet1.includes(splitSet2[0]) || spreadSet1.includes(splitSet2[1])) overlapCount++
  else if(spreadSet2.includes(splitSet1[0]) || spreadSet2.includes(splitSet1[1])) overlapCount++
}

function splitAssignments(data){
  for(let set of data){
    const set1 = set.split(',')[0]
    const set2 = set.split(',')[1]
    determineCompleteOverlaps(set1, set2)
    determineOverlaps(set1, set2)
  }
}

splitAssignments(data)
console.log(completeOverlapCount)
console.log(overlapCount)