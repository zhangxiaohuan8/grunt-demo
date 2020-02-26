var add = require('../calc');

var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('0 + 0 = 0', function() {
    expect(add(0, 0)).to.be.equal(0);
  });

  it('5 + 3 = 8', function() {
    expect(add(5, 3)).to.be.equal(8);
  });
  it('a + b = NaN',function(){
      expect(isNaN(add('a','b'))).to.be.ok;
  });
});