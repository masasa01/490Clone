'use strict';
//import axios from 'axios';

const axios = require('axios');
const tool = React.createElement;

function useReact () {
  var response = document.querySelector('#search');

  var display = document.querySelector('#answer')
  var displayText = response.value;

  var answer = tool("p", null, displayText);
  ReactDOM.render(answer, display);

}

function sendToServer() {
  var returnValue = document.querySelector('#search');

  var display = document.querySelector('#answer')
  var displayText = response.value;

  axios.post('http://localhost:9000/index.html', displayText)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function recieveFromServer() {
  axios.get('http://localhost:9000/index.html')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

  var fromServer = response;
  var answer = tool("p", null, fromServer);
  ReactDOM.render(answer, display);
}
