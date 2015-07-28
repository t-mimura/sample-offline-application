var sum = function() {
  var result = 0;
  [].forEach.call(arguments, function(i) {
    var n = Number(i);
    if (!isNaN(n)) {
      result += n;
    }
  });
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/*
var onUpdareReady = function() {
  if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
    alert("application is updated. please reload!");
  }
};
window.applicationCache.addEventListener("updateready", function() {
  onUpdareReady();
});
onUpdareReady();
*/
