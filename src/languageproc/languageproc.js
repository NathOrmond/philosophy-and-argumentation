async function createPredicateSentences(text, subject, forAgainst){ 
    (text !== undefined) ? console.log("text received") : console.log("no text received")
    console.log(subject)
    console.log(forAgainst)
}

module.exports = {
    createPredicateSentences
}