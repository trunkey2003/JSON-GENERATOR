const { v4: uuidv4 } = require('uuid'); //USE TO GENERATE OBJECT ID

const handleData = (data) => {
    console.clear();
    
    //PREVIEW INPUT
    console.log("Preview input: ");
    console.log(data);

    // YOUR CODE STARTS HERE

    //PREVIEW OUTPUT
    console.log("Preview output: ");
    console.log(data);

    return convertJavascriptToJSON(data);
}


// JSON-GENERATOR USEFUL SCRIPT 
 
const convertJSONToJavaScript = (jsonObj) => {
  return JSON.parse(jsonObj);
}

const convertJavascriptToJSON = (jsObj) => {
  return JSON.stringify(jsObj);
}

const removePropertyByKey = (jsObj, key) => {
  delete jsObj[key];
} 

const changePropertyKey = (jsObj, oldKey, newKey) =>{
  jsObj[newKey] = jsObj[oldKey];
  removePropertyByKey(jsObj, oldKey);
}

// ENJOY USING JSON GENERATOR

module.exports = {
    handleData,
    convertJSONToJavaScript,
}


