function implication(){
  return [[true, true, true],
          [true, false, false],
          [false, true, true],
          [false, false, true]
         ];
}
function and(){
  return [[true, true, true],
          [true, false, false],
          [false, true, false],
          [false, false, true]
         ];
}
function or(){
  return [[true, true, true],
          [true, false, true],
          [false, true, true],
          [false, false, false]
         ];
}
function not(){
  return [[true, false],
          [false, true]
         ];
}
function is(){
  return [[true, true, true],
          [true, false, false],
          [false, true, false],
          [false, false, true]
         ];
}

function wff(variables, values, logic){

}

// ---------------- Dev Scripts
let arg = argument();
console.log(prem.logic);