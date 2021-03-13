const LOGIC= {
  AND: and(),
  OR: or(),
  NOT: not(),
  THEN:implication(),
  IS: is()
};

const wffSentinel = -1;

function implication(){
  return [  [true, true, true],
            [true, false, false],
            [false, true, true],
            [false, false, true]
         ];
}

function and(){
  return [  [true, true, true],
            [true, false, false],
            [false, true, false],
            [false, false, true]
         ];
}

function or(){
  return [  [true, true, true],
            [true, false, true],
            [false, true, true],
            [false, false, false]
         ];
}

function not(){
  return [  [true, false],
            [false, true]
         ];
}

function is(){
  return [  [true, true, true],
            [true, false, false],
            [false, true, false],
            [false, false, true]
         ];
}

function createAtom(pred, obj){
  return {
    wff1: obj, 
    wff2: pred,
    logic: LOGIC.IS,
    reducible: false
  };
}

function materialImplication(antecedent, consequent){
  return{
    wff1: obj, 
    wff2: pred,
    logic: LOGIC.THEN,
    reducible: ((antecedent.logic === LOGIC.IS) && (consequent.logic === LOGIC.IS))
  };
}

function conjunction(conjunct1, conjunct2){
  return{
    wff1: obj, 
    wff2: pred,
    logic: LOGIC.AND,
    reducible: ((conjunct1.logic === LOGIC.IS) && (conjunct2.logic === LOGIC.IS))
  }
}

function disjunction(disjunct1, disjunct2){
  return{
    wff1: obj, 
    wff2: pred,
    logic: LOGIC.OR,
    reducible: ((disjunct1.logic === LOGIC.IS) && (disjunct2.logic === LOGIC.IS))
  }
}

function negation(wffIn){
  return{
    wff1: wffSentinel, 
    wff2: wffIn,
    logic: LOGIC.NOT,
    reducible: true 
  }
}

function checkReducibility(wff1, wff2){
 return ((wff1.logic === LOGIC.IS) && (wff2.logic === LOGIC.IS))
}

function checkValidity(wff){
  if(wff.reducible === true){
    // recursively reduce
  } else {
    // add to validity table
  }
  //return validity table
}

function consistencyChecker(wffIn, existingTable=undefined){
  let consistencyChecker = {
    // var : [{}]
  };
  if(existingTable !== undefined){
    consistencyChecker = existingTable;
  }

}

// module.exports = {
//   LOGIC,
//   wffSentinel, 
//   createAtom, materialImplication, conjunction, disjunction, negation, checkValidity
// }

console.log(implication());
console.log(LOGIC.materialImplication);