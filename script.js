let inputField = '';
let expressionToEvaluate = '';

document.querySelector('.simpleCalculator').addEventListener('click', function(event) {
  if ((event.target.className === 'number') || (event.target.className === 'function')){
    inputField += event.target.textContent;
    document.querySelector('.viewer').textContent = inputField;
  }

  else if (event.target.className === 'clear') {
    inputField = '0';
    document.querySelector('.viewer').textContent = inputField;
  }
  
  else if (event.target.className === 'equals') {
    inputField = math.eval(inputField);
    document.querySelector('.viewer').textContent = inputField;
  }
});
