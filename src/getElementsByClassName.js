// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

var getElementsByClassName = function (className) {
  var domBody = document.body;
  var output = [];

  function check(node) {
    if (node.classList !== undefined && node.classList.contains(className)) {
      output.push(node);
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      check(node.childNodes[i]);
    }

  }

  check(domBody);
  return output;
};