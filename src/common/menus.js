const prompts = require("prompts");
const { getJSONString } = require("../json/jsonreader.js");

const TOPICS_JSON = "./src/json/topicterms.json";

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

async function getForAgainst(){ 
  let response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick how you would like your arguments to be generated',
    choices:[
      {
      title: 'Argue in favour of position', 
      value: true 
      },
      {
        title: 'Argue against position', 
        value: false
      }
    ],
    initial: 0
  });
  return response;
}

async function getTopic(){ 
  let options = await getTopicOptions();
  let response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick a topic to argue for',
    choices: options,
    initial: 0
  });
  return response;
}

async function getTopicOptions(){ 
  let returnArray = [''];
  try {
    const topics = await getJSONString(TOPICS_JSON);
    for (var key in topics) {
      if (topics.hasOwnProperty(key)) {
          returnArray.push({
            title: key , 
            description: ('Topics to do with: ' + topics[key]), 
            value: key
          });
      }
    }
    returnArray.shift();
  } catch(err) {
    console.log(err);
    returnArray = undefined;
  }
  return returnArray;
}

module.exports = {
    yesNo,
    getNumRuns,
    getTopic,
    getForAgainst
}