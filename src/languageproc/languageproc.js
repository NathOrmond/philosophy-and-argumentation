const { getJSONString } = require("../json/jsonreader.js");
const CONNECTIVES_JSON_PATH = './src/json/connectives.json'

async function createPredicateSentences(text, subjects, forAgainst, targetNum){ 
    let returnSubjectPredicateSentences = [''];
    if(text !== undefined){
        text = text.split(' ');
        let connectivesJSON = await getJSONString(CONNECTIVES_JSON_PATH);
        for(subject in subjects){
            if(returnSubjectPredicateSentences.length != targetNum){  
                let keySentence = "";
                keySentence += `${subjects[subject]} is` ;
                if (!forAgainst){ 
                    keySentence += " not";
                }
                keySentence = keySentence.split(' ');
                console.log(keySentence)
                // Find instance of keySentence in text
                for(let textIndex = 0; textIndex < text.length; textIndex++){
                    if(text[textIndex] == keySentence[0]){
                        // Add keySentence + text keySentenceSentece to returnSubjectPredicateSentences
                    }
                }
            } else {
                break;
            }
        }
    } else { 
        console.log("No text received looping around to try again")
    }
    returnSubjectPredicateSentences !== [''] ? 
        returnSubjectPredicateSentences.shift() : returnSubjectPredicateSentences = undefined;
    return returnSubjectPredicateSentences;
}

function isEndPoint(str, connectivesJSON){ 
    let isEndPoint = true;
    let falseEndings = "false-endings"
    let exactMatches = "exact-matches"
    falseEndings = connectivesJSON[falseEndings]
    falseEndings.forEach((ending)=>{
        if(str.includes(ending)){
            isEndPoint = false;
            break;
        }
    });
    if(isEndPoint){
        exactMatches = connectivesJSON[exactMatches]
        exactMatches.forEach((ending)=>{
            if(str === ending){
                isEndPoint = false;
                break;
            }
        }); 
    }
    return isEndPoint;
}

module.exports = {
    createPredicateSentences
}