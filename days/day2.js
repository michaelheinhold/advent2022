import {readFileSync} from "fs";
const textFile = readFileSync("./inputs/day2.txt").toString("utf-8");
const data = textFile.split(/\r?\n/);

let myPoints = 0;
let opponentPoints = 0;

function determineWinner(opponentSelection, mySelection) {
  if (
    (opponentSelection == "B" && mySelection == "Y") ||
    (opponentSelection == "A" && mySelection == "X") ||
    (opponentSelection == "C" && mySelection == "Z")
  ) {
    return {
      ruling: "tie",
      opponentPoints: opponentSelection,
      myPoints: mySelection,
    };
  }
  if (
    (opponentSelection == "A" && mySelection == "Z") ||
    (opponentSelection == "B" && mySelection == "X") ||
    (opponentSelection == "C" && mySelection == "Y")
  ) {
    return {
      ruling: "opponent win",
      opponentPoints: opponentSelection,
      myPoints: 0,
    };
  }
  if (
    (opponentSelection == "C" && mySelection == "X") ||
    (opponentSelection == "B" && mySelection == "Z") ||
    (opponentSelection == "A" && mySelection == "Y")
  ) {
    return {ruling: "my win", opponentPoints: 0, myPoints: mySelection};
  }
}

function determineOutcome(mySelection) {
  if (mySelection == "X") {
    return {ruling: "opponent win"};
  }
  if (mySelection == "Y") {
    return {ruling: "tie"};
  }
  if (mySelection == "Z") {
    return {ruling: "my win"};
  }
}

function gameRound(opponentSelection, mySelection) {
  if (determineWinner(opponentSelection, mySelection).ruling == "tie") {
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "A") {
      opponentPoints += 4;
      myPoints += 4;
    }
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "B") {
      opponentPoints += 5;
      myPoints += 5;
    }
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "C") {
      opponentPoints += 6;
      myPoints += 6;
    }
  } else if (
    determineWinner(opponentSelection, mySelection).ruling == "my win"
  ) {
    if (determineWinner(opponentSelection, mySelection).myPoints == "X") {
      myPoints += 7;
      opponentPoints += 3;
    }
    if (determineWinner(opponentSelection, mySelection).myPoints == "Y") {
      myPoints += 8;
      opponentPoints += 1;
    }
    if (determineWinner(opponentSelection, mySelection).myPoints == "Z") {
      myPoints += 9;
      opponentPoints += 2;
    }
  } else if (
    determineWinner(opponentSelection, mySelection).ruling == "opponent win"
  ) {
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "A") {
      opponentPoints += 7;
      myPoints += 3;
    }
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "B") {
      opponentPoints += 8;
      myPoints += 1;
    }
    if (determineWinner(opponentSelection, mySelection).opponentPoints == "C") {
      opponentPoints += 9;
      myPoints += 2;
    }
  }
}

function gameRoundPartTwo(opponentSelection, mySelection) {
  if (determineOutcome(mySelection).ruling == "tie") {
    if (opponentSelection == "A") {
      opponentPoints += 4;
      myPoints += 4;
    }
    if (opponentSelection == "B") {
      opponentPoints += 5;
      myPoints += 5;
    }
    if (opponentSelection == "C") {
      opponentPoints += 6;
      myPoints += 6;
    }
  } else if (determineOutcome(mySelection).ruling == "my win") {
    if (opponentSelection == "A") {
      myPoints += 8;
      opponentPoints += 1;
    }
    if (opponentSelection == "B") {
      myPoints += 9;
      opponentPoints += 2;
    }
    if (opponentSelection == "C") {
      myPoints += 7;
      opponentPoints += 3;
    }
  } else if (determineOutcome(mySelection).ruling == "opponent win") {
    if (opponentSelection == "A") {
      opponentPoints += 7;
      myPoints += 3;
    }
    if (opponentSelection == "B") {
      opponentPoints += 8;
      myPoints += 1;
    }
    if (opponentSelection == "C") {
      opponentPoints += 9;
      myPoints += 2;
    }
  }
}

for (let round of data) {
  const choices = round.split(" ");
  const opponentSelection = choices[0];
  const mySelection = choices[1];
  gameRoundPartTwo(opponentSelection, mySelection);
}

console.log(myPoints);
