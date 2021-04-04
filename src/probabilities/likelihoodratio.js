function calculateLR_Dodgy(lrWeight=5, prior=0.5){
    // P' = P0 × LR/(1 − P0 + P0×LR)
    return  prior * lrWeight/((1- prior) + (prior * lrWeight))
}

