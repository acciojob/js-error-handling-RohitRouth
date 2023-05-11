class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expr) {
  const invalidStart = /^[*/+]/.test(expr);
  const invalidEnd = /[*+-]$/.test(expr);
  const invalidExpr = /[+*/-]{2}/.test(expr);
  if (invalidExpr) {
    throw new InvalidExprError();
  }
  if (invalidStart) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }
  if (invalidEnd) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }
  const numbers = expr
    .split(/[*/+-]/)
    .filter((x) => x !== "")
    .map(Number);
  const operators = expr.split("").filter((c) => "+-*/".includes(c));
  if (numbers.length !== operators.length + 1) {
    throw new OutOfRangeError();
  }
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    const op = operators[i];
    const num = numbers[i + 1];
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
  }
  return result;
}

try {
  console.log(evalString("1 + 2 * 3 - 4 / 2"));
  console.log(evalString(" 5 * 2 / 10 - 1 "));
  console.log(evalString("1+-3"));
  console.log(evalString(" 4*-3"));
  console.log(evalString("4  - 5")); // this test should fail
  console.log(evalString("5 + 7 / 2 * 3")); // this test should fail
  console.log(evalString("1 ++ 3")); // this test should fail
} catch (err) {
  console.log(err.message);
}
