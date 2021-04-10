const prompts = require("prompts");
const fs = require('fs');

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
        message: 'How many arguments do you want to generate?',
        validate: value => value > 0  ? true : "must be greater than zero"
      });
    return response;
}

async function getTopic(){ 
  let response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick a color',
    choices: getTopicOptions ,
    initial: 1
  });
return response;
}

function getTopicOptions(){ 
  const jsonObj = JSON.parse(fs.readFileSync('../webscraping/keyterms.json', 'utf8'));
  let returnArr = [''];
  for (var key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
        returnArr.push({
          title: key , 
          description: ('Topics to do with: ' + p[key]), 
          value: p[key], 
          disabled: false
        })
    }
  }
  returnArr.shift();
  return returnArr;
}

module.exports = {
    yesNo,
    getNumRuns,
    getTopic
}