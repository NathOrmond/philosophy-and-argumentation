const { getPageText } = require("./scrape.js");

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
    text = await getPageText("atheism");

    res = text.toLowerCase().split(" ");
    predicates = [""];
    for(i = 0; i < res.length; i++){ 
        if((res[i] == "god") && (res[i+1] == "is")){ 
            if(res[i+2]=="not"){ 
                if(endingCheck(res[i+3])){ 
                    predicates.push(((res[i + 2])+ " " +(res[i + 3])+ " " +(res[i + 4])));
                } else { 
                    predicates.push(((res[i + 2])+ " " +(res[i + 3])));
                }
                
            } else {
                predicates.push(res[i+2]);
            }
        }
    }
    predicates.shift();

    let ifSent = "";
    let desired = "God exists";
    let minor = "";
    for(j = 0; j < predicates.length; j++){ 
        ifSent = ifSentence(("God is " + predicates[j]), true, desired, true);
        minor = genMinorPremise(ifSent, desired);
        //TODO mix up logical validity with psuedorandom generator!
        console.log(j);
        console.log(ifToString(ifSent));
        console.log(minor);
        console.log(desired);
    }


}

function endingCheck(str){ 
   return( 
       str.includes("lly")
    || str.includes("truth-it")
   );
}

run();
