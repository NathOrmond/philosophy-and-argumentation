const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");
const { yesNo, getNumRuns, getTopic, getForAgainst } = require("./common/menus.js");
const { smallStepSemanticMachine } = require("./smallstepsemantics/smallstepsemanticsmachine.js");
const { calculateLR_Dodgy } = require("./probabilities/likelihoodratio.js");

async function main(){ 
    const LIMIT_RUNS = 1000;
    let topic = await getTopic();
    let forAgainst = await getForAgainst();
    let numRuns = await getNumRuns();
    let machine = smallStepSemanticMachine;
    let run = true;
    if(numRuns.value > LIMIT_RUNS){
        let message = 'Due to a large number of arguments computations may take a while to complete - would you like to proceed';
        let rv = await yesNo(message);
        run = rv.value;
    }
    run ? primaryLoop(topic, forAgainst, numRuns, machine) : console.log('Aborting run this time');
}

async function primaryLoop(topic, forAgainst, numRuns, machine){
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