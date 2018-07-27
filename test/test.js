var assert = require("chai").assert;
var conversor = require('..');

describe("#conversor",function(){
  it('Conversión de Libras a Kg',function(){
    assert.equal(54.432, (120 * 0.4536));
  })

  it('Conversión de Kg a Libras',function(){
    assert.equal(264.55026455026456, (120 / 0.4536));
  })
});
