'use strict';
const calcByOperation = (left, right, operation) => {
  left = Number(left);
  right = Number(right);
  switch (operation) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
};
const guardAndGetErrMsg = (numLeft, numRight, operation) => {
  let errMsg = '';
  if ('' === numLeft) {
    errMsg += 'A numLeft is empty<br>';
  }
  if ('' === numRight) {
    errMsg += 'A numRight is empty<br>';
  }
  if ('+' !== operation && '-' !== operation && '*' !== operation && '/' !== operation) {
    errMsg += 'Invalid operation : ' + operation + '<br>';
  }
  if ('0' === numRight && '/' === operation) {
    errMsg += 'Cannot divide by zero<br>';
  }
  return errMsg;
};
const calc = operation => {
  const text0 = document.getElementById('text0');
  const numLeft = document.getElementById('numLeft').value;
  const numRight = document.getElementById('numRight').value;
  const errMsg = guardAndGetErrMsg(numLeft, numRight, operation);
  if ('' !== errMsg) {
    /* NG */
    text0.innerHTML = errMsg;
    return;
  }
  /* OK */
  const num = calcByOperation(numLeft, numRight, operation);
  text0.innerHTML = num;
};
