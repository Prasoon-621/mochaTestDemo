const { expect } = require('chai');
const app = require('../server');

describe('FIRST Test Suite', () => {
  it('should pass', () => {
    const sum = 1 + 1;
    expect(sum).to.equal(2);
  });
});