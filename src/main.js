const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");
const { yesNo, getNumRuns, getTopic } = require("./common/menus.js");
const { smallStepSemanticMachine } = require("./smallstepsemantics/smallstepsemanticsmachine.js");
const { calculateLR_Dodgy } = require("./probabilities/likelihoodratio.js");

async function main(){ 
    let topic = await getTopic();
    console.log(topic);
    // let numRuns = await getNumRuns();
    // let machine = smallStepSemanticMachine;
    // for(index = 0; index < numRuns.value; index++){ 
    //     // get a big ole string from wikipedia
    //     // process language into a set of propositions about a subject
    //     // create wffs based on grammatical relations
    //     // reduce wffs in machine
    //     machine();
    //     // calculate probabilities
    // }
}

main();