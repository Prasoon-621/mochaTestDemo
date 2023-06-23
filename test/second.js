const { expect } = require('chai');
const app = require('../server');

describe('SECOND TEST', () => {
  it('should NOT  pass', () => {
    const sum = 1 + 1;
    expect(sum).to.equal(3);
  });
});