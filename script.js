class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  const operators = ["+", "-", "*", "/"];
  const startOperator = ["+", "*", "/"];
  const endOperator = ["+", "-", "*", "/"];

  // Check for invalid operators
  for (let i = 0; i < expression.length - 1; i++) {
    const currentChar = expression.charAt(i);
    const nextChar = expression.charAt(i + 1);
    if (operators.includes(currentChar) && operators.includes(nextChar)) {
      throw new InvalidExprError();
    }
  }

  // Check for start and end operators
  if (startOperator.includes(expression.charAt(0))) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  if (endOperator.includes(expression.charAt(expression.length - 1))) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  // Check for invalid characters
  const regex = /^[0-9+\-*/\s]+$/;
  if (!regex.test(expression)) {
    throw new OutOfRangeError(expression);
  }

  return eval(expression);
}

try {
  console.log(evalString("3 + 4"));
  console.log(evalString("1-1"));
  console.log(evalString("2 /2"));
  console.log(evalString("23+35"));
  console.log(evalString("3-3"));
  console.log(evalString("22*3"));
  console.log(evalString("45 / 5"));
  console.log(evalString("4 + 4 / 4"));
  console.log(evalString("4 +"));
  console.log(evalString("+3"));
  console.log(evalString("3 + +4"));
  console.log(evalString("3++4"));
  console.log(evalString("4+4-"));
} catch (error) {
  console.log(error.message);
}
