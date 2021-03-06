const fs = require('fs');

async function getJSONString(filePath){ 
    const jsonString = await fs.readFileSync(filePath);
    return await JSON.parse(jsonString);
}

module.exports = {
    getJSONString
}