const prompts = require("prompts");

async function yesNo(msg){
    let response = await prompts({
        type: 'confirm',
        name: 'value',
        message: msg,
        initial: true
      });
    return response;
}

async function getNumRuns(){
    let response = await prompts({
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => value > 0  ? true : "must be greater than zero"
      });
    return response;
}

module.exports = {
    yesNo,
    getNumRuns
}