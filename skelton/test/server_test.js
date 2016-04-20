const chai = require('chai');
const expect = chai.expect;

describe('header data should be saved', () => {
  it('should have files in \/response', () => {
    var imageCount;
    before(() => {
      $.ajax({
        url: '/response/',
        success: function(data) {
          imageCount = $(data).length();
        }
      });
    });
    expect(imageCount).to.not.equal(0);
  });
});
