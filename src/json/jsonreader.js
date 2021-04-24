const fs = require('fs');

async function getJSONString(filePath){ 
    const jsonString = await fs.readFileSync(filePath);
    return await JSON.parse(jsonString);
}

// async function getJSONString(){ 
//     const jsonString = await fs.readFileSync('./src/json/topicterms.json');
//     return await JSON.parse(jsonString);
// }

module.exports = {
    getJSONString
}