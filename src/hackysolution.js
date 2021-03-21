/**
 * This is just a hacky solution to get the rough idea
 * out of my head
 */
const { getPageText, getPageLinks } = require("./webscraping/wikiscrape.js");

function ifSentence(ant, antV=true, cons, consV=true){ 
    return { 
        antecedent: ant,
        antVal: antV,
        consequent: cons,
        conseqVal:  consV           
    }
}

function ifToString(ifSentence){ 
    rv = "if ";
    !ifSentence.antVal ? rv += "not " : rv ;
    rv += ifSentence.antecedent + " then ";
    !ifSentence.conseqVal ? rv += "not " : rv ; 
    rv += ifSentence.consequent;
    return rv;
}

function genMinorPremise(ifSentence, desiredConcl){ 
    rv = "";
    if((("not " + ifSentence.antecedent) === desiredConcl) ){ 
        !ifSentence.conseqVal? rv += "not " : rv ;
        rv += "not " +ifSentence.consequent;  
    } else if((("not " + ifSentence.consequent) === desiredConcl)) {
        rv += desiredConcl;
    } else { 
        if(ifSentence.antecedent === desiredConcl){ 
            if(!ifSentence.antVal){ 
                rv += "not not " + ifSentence.antecedent;
            } else {
                !ifSentence.conseqVal ? rv += "not " : rv ;  
                rv += " not " + ifSentence.consequent;
            }
        } else if(ifSentence.consequent === desiredConcl) { 
            if(!ifSentence.conseqVal){
                rv += "not not " + ifSentence.consequent;
            }else{
                !ifSentence.antVal ? rv += "not " : rv ;
                rv += ifSentence.antecedent; 
            }
        }
    }
    return rv;
}

function flattenUniq(arrays) {
    var args = Array.prototype.slice.call(arguments);
    var array = [].concat.apply([], args)
    var result = array.reduce(function(prev, curr){
      if (prev.indexOf(curr) < 0) prev.push(curr);
      return prev;
    },[]);
    return result;
}

async function run(){ 
    const keySearchTerms = [
        "Christianity",
        "God",
        "Atheism",
        "Philosophy of Religion",
        "Islam",
        "Hinduism",
        "Buddhism", 
        "Theology",
        "Theism",
        "Deism",
        "Pantheism", 
        "Jesus", 
        "Messiah", 
        "Martin Luther", 
        "Pope", 
        "Protestantism", 
        "Catholicism",
        "Jehovas Witnesses", 
        "Anselm", 
        "Thomism", 
        "Augustine"
    ];
    let runTimes = 0;
    let numArgs = 0;
    while(runTimes <= keySearchTerms.length){
        
       numArgs = await createArgumentsFrromWikiPage(keySearchTerms[runTimes], numArgs);
       runTimes += 1;
    }
}

async function createArgumentsFrromWikiPage(searchTerm, numArgs){
    text = await getPageText(searchTerm);
    if(text !== -1){ /**i.e. page hasnt caught an error! */
        res = text.toLowerCase().split(" ");
        predicates = [""];
        for(i = 0; i < res.length; i++){ 
            if((res[i] == "god") && (res[i+1] == "is")){ 
                delta = 2;

                while(!isEndPoint(res[i+delta])){
                    delta += 1;
                }

                predicate = ""; 
                for(k=0; k<=delta ; k++){ 
                    predicate += res[i + k] + " ";
                }
                predicates.push(predicate);
            }
        }
        predicates.shift();
        let ifSent = "";
        let desired = "not God exists";
        let minor = "";
        for(j = 0; j < predicates.length; j++){ 
            rand = Math.floor((Math.random() * 100) + 1);

            if((rand%2) === 0){ 
                ifSent = ifSentence((predicates[j]), true, desired, true);
            }else{
                ifSent = ifSentence(desired , true, ( predicates[j]), true);
            }
            minor = genMinorPremise(ifSent, desired);
            console.log("Argument - [%d]", (numArgs+1));
            numArgs +=1;
            console.log("====================");
            console.log(ifToString(ifSent));
            console.log(minor);
            console.log(desired);
            console.log("====================");
        }
        return numArgs;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEndPoint(str){ 
    let rv = true;
    let falseEndings = [
        "not",
        "lly",
        "-it",
        "not",
        "the", 
        "not",
        "quite",
        "also", 
        "both",
        "simultaneously", 
        "directly",
        "if", 
        "utterly", 
        "from",
        "source",
        "empirical",
        "beyond",
        "seen",
        "like", 
        "often",
        "used", 
        "most",
        "infinitely", 
        "truth", 
        "human", 
        "compatible"
    ];

    let exactMatches = [
        "on", 
        "his",
        "so", 
        "an", 
        "of",
        "this",
        "or",
        "in",
        "a",
        "one",
        "as", 
        "to"
    ];
    falseEndings.forEach((ending)=>{
        if(str.includes(ending)){
            // return false;
            rv = false;
        }
    });

    exactMatches.forEach((ending)=>{
        if(str === ending){
            // return false;
            rv = false;
        }
    }); 

    return rv;
}

run();
