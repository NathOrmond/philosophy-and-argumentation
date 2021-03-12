const LOGIC= {
  AND:"and",
  OR:"or",
  NOT:"not",
  THEN:"then",
  IS: "is"
}
Object.freeze(DaysEnum)

const wffSentinel = -1;

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

function and(conjunct1, conjunct2){
  return{
    wff1: obj, 
    wff2: pred,
    logic: LOGIC.AND,
    reducible: ((conjunct1.logic === LOGIC.IS) && (conjunct2.logic === LOGIC.IS))
  }
}

function or(disjunct1, disjunct2){
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

function checkValidity(wff){
  if(wff.reducible === true){
    // recursively reduce
  } else {
    // add to validity table
  }
  //return validity table
}


