
function World(callback) {
  this.url = '';
  this.transformUrl = function(url) { return url; }

  // note: newer versions of cucumber don't pass a callback like this it seems
  if (callback) callback();
}

module.exports = function() {
  this.World = World;
};
