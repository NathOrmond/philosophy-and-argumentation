/**
 * TODO: Create an entire programming language with abstract syntax tree for processing
 * valid logical syllogisms... (later)
 */

const LOGIC = {
  IMPL: [ 
          [true, true, true],
          [true, false, false],
          [false, true, true],
          [false, false, true]
        ],
  AND:  [
          [true, true, true],
          [true, false, false],
          [false, true, false],
          [false, false, true]
        ] ,
  OR:   [ 
          [true, true, true],
          [true, false, true],
          [false, true, true],
          [false, false, false]
        ] ,
  NOT:  [ 
          [true, false],
          [false, true]
        ] ,
}

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
  let validWff = (
    variables.length === values.length &&
    Object.keys(logic).length >= (variables.length - 1)
  );
  if(validWff){
    return {
      vars: variables ,
      vals: values,
      logic: logic,
      reducible: (variables.length < 0) 
    }
  }
}

// ---------------- Dev Scripts
let arg = argument();
console.log(prem.logic);