const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");
const { yesNo, getNumRuns, getTopic, getForAgainst } = require("./common/menus.js");
const { smallStepSemanticMachine } = require("./smallstepsemantics/smallstepsemanticsmachine.js");
const { calculateLR_Dodgy } = require("./probabilities/likelihoodratio.js");
const { createPredicateSentences } = require("./languageproc/languageproc.js");
const { getJSONString } = require("./json/jsonreader.js");

const RUNS_LIMITER = 1000;
const ARG_SENTENCE_SUBJECTS_JSON = "./src/json/argumentsubjects.json"
const ARG_TOPICS_JSON = "./src/json/topicterms.json";

async function main(){  
    let topic = await getTopic();
    let forAgainst = await getForAgainst();
    let numRuns = await getNumRuns();
    let machine = smallStepSemanticMachine;
    let run = true;
    if(numRuns.value > RUNS_LIMITER){
        let message = "Due to a large number of arguments computations may take a while to complete - would you like to proceed";
        let rv = await yesNo(message);
        run = rv.value;
    }
    run ? primaryLoop(topic, forAgainst, numRuns, machine) : console.log("Aborting run this time");
}

async function primaryLoop(topic, forAgainst, numRuns, machine){
    for(index = 0; index < numRuns.value; ){ 
        let randomTopic = await randomTopicGenerator(topic.value);
        let pageText = await getPageText(randomTopic);
        let sentenceSubjectsJSON = await getJSONString(ARG_SENTENCE_SUBJECTS_JSON);
        sentenceSubjectsJSON = sentenceSubjectsJSON[topic.value];
        let subjectPredicateSentences = await createPredicateSentences(pageText, sentenceSubjectsJSON, forAgainst.value, numRuns.value);
        
        break;
        
        if(subjectPredicateSentences === undefined) {
            continue;
        } 
        // create wffs based on grammatical relations
        // if(wffs === undefined){ 
        //     continue;
        // } else { 
        //     index += wffs.length
        // }
    }

    // print desired num of wffs and their probabilities
        // reduce wffs in machine and calculate probabilities and print them and index++ 
        // when out of wffs to reduce incrememt main loop

}

async function randomTopicGenerator(topic){ 
    let json = await getJSONString(ARG_TOPICS_JSON);
    let array = json[topic];
    let randomElementIndex = Math.floor((Math.random() * array.length));
    return array[randomElementIndex];
}

main();