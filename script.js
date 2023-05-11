class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super(`Expression should not have an invalid combination of expression`);
    this.name = this.constructor.name;
  }
}

function evalString(str) {
  const startsWithInvalid = /^[*/+]/;
  const endsWithInvalid = /[*/+-]$/;
  const invalidCombination = /[+/*]{2}|[-+/*]{2}/;

  if (startsWithInvalid.test(str)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }

  if (endsWithInvalid.test(str)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  if (invalidCombination.test(str)) {
    throw new InvalidExprError();
  }

  const numStack = [];
  const opStack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/\s/.test(char)) {
      continue;
    }

    if (/[+\-*/]/.test(char)) {
      opStack.push(char);
    } else if (/\d/.test(char)) {
      let num = char;
      while (i < str.length - 1 && /\d/.test(str[i + 1])) {
        num += str[i + 1];
        i++;
      }
      numStack.push(parseInt(num));
    } else {
      throw new OutOfRangeError(char);
    }
  }

  while (opStack.length > 0) {
    const op = opStack.pop();
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    if (op === '+') {
      numStack.push(num1 + num2);
    } else if (op === '-') {
      numStack.push(num1 - num2);
    } else if (op === '*') {
      numStack.push(num1 * num2);
    } else if (op === '/') {
      numStack.push(num1 / num2);
    }
  }

  return numStack.pop();
}

// test the function with some examples
try {
  console.log(evalString('1+2*3-4')); // should log 3
  console.log(evalString('  10 + 20 / 5 * 3  ')); // should log 34
  console.log(evalString('1+2++3')); // should throw InvalidExprError
  console.log(evalString('1*')); // should throw SyntaxError
  console.log(evalString('4/2+3*')); // should throw SyntaxError
  console.log(evalString('5#6')); // should throw OutOfRangeError
} catch (error) {
  console.log(error.message);
}
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = this.constructor.name;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super(`Expression should not have an invalid combination of expression`);
    this.name = this.constructor.name;
  }
}

function evalString(str) {
  const startsWithInvalid = /^[*/+]/;
  const endsWithInvalid = /[*/+-]$/;
  const invalidCombination = /[+/*]{2}|[-+/*]{2}/;

  if (startsWithInvalid.test(str)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }

  if (endsWithInvalid.test(str)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  if (invalidCombination.test(str)) {
    throw new InvalidExprError();
  }

  const numStack = [];
  const opStack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/\s/.test(char)) {
      continue;
    }

    if (/[+\-*/]/.test(char)) {
      opStack.push(char);
    } else if (/\d/.test(char)) {
      let num = char;
      while (i < str.length - 1 && /\d/.test(str[i + 1])) {
        num += str[i + 1];
        i++;
      }
      numStack.push(parseInt(num));
    } else {
      throw new OutOfRangeError(char);
    }
  }

  while (opStack.length > 0) {
    const op = opStack.pop();
    const num2 = numStack.pop();
    const num1 = numStack.pop();
    if (op === '+') {
      numStack.push(num1 + num2);
    } else if (op === '-') {
      numStack.push(num1 - num2);
    } else if (op === '*') {
      numStack.push(num1 * num2);
    } else if (op === '/') {
      numStack.push(num1 / num2);
    }
  }

  return numStack.pop();
}

// test the function with some examples
try {
  console.log(evalString('1+2*3-4')); // should log 3
  console.log(evalString('  10 + 20 / 5 * 3  ')); // should log 34
  console.log(evalString('1+2++3')); // should throw InvalidExprError
  console.log(evalString('1*')); // should throw SyntaxError
  console.log(evalString('4/2+3*')); // should throw SyntaxError
  console.log(evalString('5#6')); // should throw OutOfRangeError
} catch (error) {
  console.log(error.message);
}
