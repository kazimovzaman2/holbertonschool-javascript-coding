#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const bodyJson = JSON.parse(body);
    const newDict = {};
    let key = '';

    for (let i = 0; i < bodyJson.length; i++) {
      key = bodyJson[i].userId.toString();
      if (!newDict[key] && jsonObj[i].completed) {
        newDict[key] = 1;
      } else if (jsonObj[i].completed) {
        newDict[key] += 1;
      }
    }

    console.log(newDict);
  }
});
