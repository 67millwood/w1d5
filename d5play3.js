
var superList = [];
function newFunc(number) {
  var superListbuilt = superList.push(number)
    return superList;
}



module.exports = {
  theList: function sortList(number2) {
    var lastList = newFunc(number2).sort();
    return lastList;
  }
}