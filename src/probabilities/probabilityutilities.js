function calculateLR_Dodgy(lrWeight=5, prior=0.5){
    // P' = P0 × LR/(1 − P0 + P0×LR)
    return  prior * lrWeight/((1- prior) + (prior * lrWeight))
}


function isConfirmatoryEvidence(hypothesisPrior, evidence){
    return calculateBayesPosterior(hypothesisPrior, evidence) > hypothesisPrior
}

function calculateBayesPosterior(a, b){ 
    return (calculateDependent(b,a) * a)/b
}

function calculateIndependantIntersection(a, b){ 
    return a*b
}

function calculateUnion(a, b){ 
    return a + b - calculateIntersection(a , b)
}

function calculateDependent(a, b){  
    return calculateUnion(a, b)/b
}


module.exports = {
    isConfirmatoryEvidence,
    calculateBayesPosterior,
    calculateIndependantIntersection,
    calculateUnion,
    calculateDependent
};
