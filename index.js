function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }

  return arr;
}

function johnLennonFacts(arr) {

  var i = 0
  while (i < arr.length) {
    var ele = arr[i];
    return ele + '!!!';
  }
  i++
}