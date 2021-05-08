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
                // for(let textIndex = 0; textIndex < text.length; textIndex++){
                //     // Add keySentence + text keySentenceSentece to returnSubjectPredicateSentences
                //     if(text[textIndex] == keySentence[0]){

                //     }
                // }
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




module.exports = {
    createPredicateSentences
}