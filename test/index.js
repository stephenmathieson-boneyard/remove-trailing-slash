
var slashes = require('..');

describe('remove-trailing-slash', function () {
  it('should be ok to pass strings without slashes', function () {
    slashes('dsfjlksdjf').should.be.equal('dsfjlksdjf');
    slashes('hello world').should.be.equal('hello world');
  });

  it('should not remove leading slashes', function () {
    slashes('/hello').should.be.equal('/hello');
  });

  it('should remove a trailing slash', function () {
    slashes('http://google.com/').should.be.equal('http://google.com');
  });

  it('should remove trailing slashes', function () {
    slashes('http://google.com//').should.be.equal('http://google.com');
    slashes('http://google.com//////////////////').should.be.equal('http://google.com');
  });
});
