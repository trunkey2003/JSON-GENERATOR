const {convertJSONToJavaScript} = require('./HandleData');
const {handleData} = require('./HandleData');

const fs = require('fs')

const readFile = new Promise((resolve, reject) => {
  fs.readFile(`${__dirname}/input.json`, (err, data) =>{
    if (err) reject(err);
    resolve(convertJSONToJavaScript(data));
  })
});

const outputFile = (data) => {
  fs.writeFile(`${__dirname}/output.json`, data, err => {
    if (err) throw err;
    console.log();
    console.log(`Your brand new JSON File is located at ${__dirname}/output.json`);
    console.log();
  })
}

const Main = async() =>{
  try {
    const data = await readFile;
    outputFile(handleData(data));
  } catch (err) {
    throw err;
  }
}


Main();

