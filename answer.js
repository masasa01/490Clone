'use strict';

const tool = React.createElement;

function useReact () {
  var response = document.querySelector('#search');

  var display = document.querySelector('#answer')
  var displayText = response.value;

  var answer = tool("p", null, displayText);
  ReactDOM.render(answer, display);

}

function sendToServer() {
  var response = document.querySelector('#search');

  var display = document.querySelector('#answer')
  var displayText = response.value;
}

function recieveFromServer() {
  var fromServer = null;
  var answer = tool("p", null, fromServer);
  ReactDOM.render(answer, display);
}
