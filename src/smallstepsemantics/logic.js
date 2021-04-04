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

function atom(name="Logical Atom"){ 
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
      console.log(this);
    }
  }
}

function molecule(name="Logical Molecule"){
  return { 
    _name: name,
    _variables: [],
    _connectives: [],
    addConnective : function(connective, variable){ 
      this._connectives.push(connective);
      this._variables.push(variable);      
    },
    isReducible: function(){
      return true;
    },
    _negate: false,
    negate : function(){ 
      this._negate = (!this._negate);
    },
    _value: undefined,
    value: moleculeValue, 
    _consistent: undefined,
    isConsistent: function(){ 
      if(this._consistnet === undefined){ 

      }
    },
    to_s: function(){ 
      console.log(this);
    }
  }
}

function moleculeValue(molecule){ 
  if(molecule._value === undefined){ 
    if(molecule.isReducible()){ 
      for(item = 0; item < molecule._variables.length; item++){
        console.log(molecule._variables[item]._name);
      }
    } else { 
      molecule._value = true;
    }
  } else { 
    
  } 
  return molecule._negate ? (!molecule._value) : (molecule._value);  
}

testAtomP = atom("P");
testAtomQ = atom("Q");
testAtomQ.negate();
testAtomP.to_s();
testAtomQ.to_s();

module.exports = {
  molecule,
  atom, 
  RULES
};