const chai = require('chai');
const expect = chai.expect;

describe('header data should be saved', () => {
  it('should have files in \/response', () => {
    var responseCount;
    before(() => {
      $.ajax({
        url: '/response/',
        success: function(data) {
          responseCount = $(data).length();
        }
      });
    });
    expect(responseCount).to.not.equal(0);
  });
});
