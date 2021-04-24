async function createPredicateSentences(text, subjects, forAgainst){ 
    (text !== undefined) ? console.log("text received") : console.log("no text received")
    console.log(subjects)
    console.log(forAgainst)
    let returnSubjectPredicateSentences = {};
    
    for(subject in subjects){ 
        let keySentence = "";
        keySentence += `${subject} is`;
        if (!forAgainst){ 
            keySentence += " not";
        }

        // Find instance of keySentence in text
        // Add keySentence + text keySentenceSentece to returnSubjectPredicateSentences

    }
    return returnSubjectPredicateSentences;
}

module.exports = {
    createPredicateSentences
}