function newFunc(number) {
  var superList = number;
    return superList;
}



module.exports = {
  theList: function sortList(number2) {
    var lastList = newFunc(number2).sort();
    return lastList;
  }
}