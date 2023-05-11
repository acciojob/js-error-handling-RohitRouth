class OutOfRangeError extends Error {
  constructor() {
    super('Expression should only consist of integers and +-/* characters');
    this.name = 'OutOfRangeError';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super('Expression should not have an invalid combination of expression');
    this.name = 'InvalidExprError';
  }
}

function evalString(expr) {
  if (expr.match(/[^0-9+\-*/\s()]/g)) {
    throw new OutOfRangeError();
  }

  if (expr.match(/[*+\/-][*+\/]/g)) {
    throw new InvalidExprError();
  }

  if (expr.match(/^[*+\/]/)) {
    throw new SyntaxError('Expression should not start with invalid operator');
  }

  if (expr.match(/[*+\/-]$/)) {
    throw new SyntaxError('Expression should not end with invalid operator');
  }

  try {
    return eval(expr);
  } catch (e) {
    throw new SyntaxError('Expression is not valid');
  }
}
