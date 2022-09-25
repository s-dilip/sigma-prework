const inpArray = [-11, 2, 300, 4, 5]; //Test Input. Result: [ -11, 300 ]

let highest;
let lowest;

let cHigh = Number(inpArray[0]);
for (let i = 0; i < inpArray.length; i++) {
  if (cHigh < Number(inpArray[i])) {
    cHigh = Number(inpArray[i]);
  }
  highest = cHigh;
}

let cLow = Number(inpArray[0]);
for (let i = 0; i < inpArray.length; i++) {
  if (cLow > Number(inpArray[i])) {
    cLow = Number(inpArray[i]);
  }
  lowest = cLow;
}

const returnArray = [lowest, highest];

console.log(returnArray);
