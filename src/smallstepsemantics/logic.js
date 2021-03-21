const RULES = {
  IMPLICATION: implication,
  AND: and, 
  OR: or
}

function implication(wff1, wff2){
  return ((!wff1.value()) || wff2.value());
}
function and(wff1, wff2){
  return (wff1.value() && wff2.value());
}
function or(wff1, wff2){
  return (wff1.value() || wff2.value());
}

function atom(name="Undefined Logical Atom"){ 
  return { 
    _name: name,
    isReducible: function(){ 
      return false;
    }, 
    _negate: false,
    negate : function(){ 
      this._negate = (!this._negate);
    },
    _value: true,
    value: function(){ 
      return this._negate ? (!this._value) : (this._value);  
    },
    _consistent: true, 
    isConsistent(){ 
      return this._consistent;
    },
    to_s: function(){ 
      return "TODO"
    }
  }
}

function molecule(name="undefined Logical Molecule"){
  return { 
    _name: name,
    _variables: [],
    _connectives: [],
    addConnective : function(connective, variable){ 
      this._connectives.push(connective);
      this._variables.push(variable);      
    },
    isReducible: function(){
      return (this._variables.length > 0);
    },
    _negate: false,
    negate : function(){ 
      this._negate = (!this._negate);
    },
    _value: undefined,
    value: function(){ 
      if(this._value === undefined){ 
        if(this.isReducible()){ 
          for(item = 0; item < this._variables.length; item++){
             
            console.log(this._variables[item]._name);
          }
        } else { 
          this._value = true;
        }
      } 
      return this._negate ? (!this._value) : (this._value);  
    }, 
    isConsistent(){ 

    },
    to_s: function(){ 
      return "TODO"
    }
  }
}

testAtomP = atom("P");
testAtomQ = atom("Q");
testAtomQ.negate();
console.log(testAtomP);
console.log(testAtomQ);
console.log(implication(testAtomP, testAtomQ));



module.exports = {
  molecule,
  atom, 
  RULES
};