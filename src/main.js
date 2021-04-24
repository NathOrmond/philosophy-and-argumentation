const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");
const { yesNo, getNumRuns, getTopic, getForAgainst } = require("./common/menus.js");
const { smallStepSemanticMachine } = require("./smallstepsemantics/smallstepsemanticsmachine.js");
const { calculateLR_Dodgy } = require("./probabilities/likelihoodratio.js");
const { createPredicateSentences } = require("./languageproc/languageproc.js");
const fs = require('fs');

async function main(){ 
    const RUNS_LIMITER = 1000;
    let topic = await getTopic();

    // let forAgainst = await getForAgainst();
    // let numRuns = await getNumRuns();
    // let machine = smallStepSemanticMachine;
    // let run = true;
   
   
    // if(numRuns.value > RUNS_LIMITER){
    //     let message = "Due to a large number of arguments computations may take a while to complete - would you like to proceed";
    //     let rv = await yesNo(message);
    //     run = rv.value;
    // }
    // run ? primaryLoop(topic, forAgainst, numRuns, machine) : console.log("Aborting run this time");
}

async function primaryLoop(topic, forAgainst, numRuns, machine){
    for(index = 0; index < numRuns.value; index++){ 

        // let elementIndex = await randomElementGenerator(topic.value);
        // let pageText = await getPageText(topic.value[elementIndex]);
        
        // console.log(`Iteration: ${elementIndex} \nPage Text:\n${pageText}`)
        // let subjectJSON = await getSubjectFromJSON();
        // let subjectPredicateSentences = await createPredicateSentences(pageText, /** subject from topic json subjects **/, forAgainst);
   
      
        // create wffs based on grammatical relations
        // reduce wffs in machine and calculate probabilities and print them and index++ 
        // when out of wffs to reduce incrememt main loop        
    }
}

async function randomElementGenerator(array){ 
    let fred = Math.floor((Math.random() * array.length));
    return fred;
}

async function getSubjectFromJSON(){ 
    const jsonString = await fs.readFileSync('./src/json/argumentsubjects.json');
    return JSON.parse(jsonString);
}

main();