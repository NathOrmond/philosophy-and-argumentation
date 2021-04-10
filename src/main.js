const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");
const { yesNo, getNumRuns, getTopic } = require("./common/menus.js");
const { smallStepSemanticMachine } = require("./smallstepsemantics/smallstepsemanticsmachine.js");
const { calculateLR_Dodgy } = require("./probabilities/likelihoodratio.js");

async function main(){ 
    let topic = await getTopic();
    let numRuns = await getNumRuns();
    let machine = smallStepSemanticMachine;

    for(index = 0; index < numRuns.value; index++){ 
        let elementIndex = await randomElementGenerator(topic.value);
        let pageText = await getPageText(topic.value[elementIndex]);
        // process language into a set of propositions about a subject
        // create wffs based on grammatical relations
        // reduce wffs in machine
        machine();
        // calculate probabilities
    }
}

async function randomElementGenerator(array){ 
    let fred = Math.floor((Math.random() * array.length));
    return fred;
}

main();