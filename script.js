class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super(`Expression should not have an invalid combination of expression`);
    this.name = "InvalidExprError";
  }
}

function evalString(expr) {
  const operators = ["+", "-", "*", "/"];

  // Check for invalid expressions
  if (!/^[\d\s\+\-\*\/]*$/.test(expr)) {
    throw new OutOfRangeError(expr);
  }
  
  // Check for invalid combinations of operators
  if (/[+\-*\/]{2}/.test(expr)) {
    throw new InvalidExprError();
  }
  
  // Check for invalid starting and ending operators
  if (/^[+\/*]/.test(expr)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  if (/[+\/*-]$/.test(expr)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  return eval(expr);
}

try {
  const result = evalString("1 + 2 * 3 - 4 / 2");
  console.log(result); // expected output: 6
} catch (err) {
  console.error(err);
}
