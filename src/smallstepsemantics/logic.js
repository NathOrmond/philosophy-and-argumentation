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

function wff(atom="Undefined Atom"){
  var vars = [];
  vars.push(atom);
  return { 
    _variables: vars,
    _connectives: [],
    addConnective : function(connective, variable){ 
      this._connectives.push(connective);
      this._variables.push(variable);      
    },
    isReducible: function(){
      return (this.variables.length > 1);
    },
    _negate: false,
    negate : function(){ 
      this._negate = ! this._negate;
    },
    _value: undefined,
    value: function(){ 
      if(this._value === undefined){ 
        console.log("TODO: Some abstract machine to rip along vars/connectives and compute");
        // this._value = (some val)
        if(this.isReducible()){ 
          console.log("TODO: reducible behaviour");
          // recursively reduce
          // in base case return rff.value()
        } else { 
          console.log("TODO: not reducible ");
        }
      } 
      return this._negate ? (!this._value) : (this._value);  
    }, 
    isConsistent: function(){ 
      //TODO
    }
  }
}

module.exports = {
  wff, 
  RULES
};