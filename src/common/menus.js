const prompts = require("prompts");
const fs = require('fs');
// const config = require('./webscraping/keyterms.json');

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

// async function getTopic(){ 
//   let options = await getTopicOptions();
//   let response = await prompts({
//     type: 'select',
//     name: 'value',
//     message: 'Pick a color',
//     choices: options,
//     initial: 1
//   });
//   console.log(response);
//   return response;
// }

async function getTopic(){ 
  let options = await getTopicOptions();
  let response = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick a topic to argue for',
    choices: options,
    initial: 1
  });
  return response;
}

async function getTopicOptions(){ 
  let returnArray = [''];
  try {
    const jsonString = await fs.readFileSync('./src/keyterms.json');
    const topics = JSON.parse(jsonString);
    for (var key in topics) {
      if (topics.hasOwnProperty(key)) {
          returnArray.push({
            title: key , 
            description: ('Topics to do with: ' + topics[key]), 
            value: topics[key]
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
    getTopic
}