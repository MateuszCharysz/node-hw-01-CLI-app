const fs = require('node:fs').promises;

const getPromiseData = async promise =>
  await promise.then(data => {
    return data;
  });

const filterArray = (arr, thingToCheck) =>
  arr.filter(({ insideData }) => insideData === thingToCheck);

const filterArrayOpp = (arr, thingToCheck) =>
  arr.filter(({ insideData }) => insideData !== thingToCheck);

const jsonBufferToDataErrorHandling = file => {
  try {
    const parsedFile = JSON.parse(file);
    return parsedFile;
  } catch (error) {
    return error;
  }
};

const getContactsDataInArray = async path => {
  try {
    const bufferdata = await getPromiseData(fs.readFile(path));
    const data = jsonBufferToDataErrorHandling(bufferdata);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const saveArrayToFile = (filePath, arr) => {
  const string = JSON.stringify(arr);
  try {
    fs.writeFile(filePath, string);
  } catch (err) {
    console.error(err)
  }
};

module.exports = {
  getPromiseData,
  filterArray,
  filterArrayOpp,
  getContactsDataInArray,
  saveArrayToFile
};
