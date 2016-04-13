const chai = require("chai");
const expect = chai.expect;

describe("header data should be saved", () => {
  it("should have files in \/response", () => {
    var image_count;
    before(() => {
      $.ajax({
        url: "/response/",
        success: function(data) {
          image_count = $(data).length();
        }
      });
    });
    expect(image_count).to.not.equal(0);
  });
});
