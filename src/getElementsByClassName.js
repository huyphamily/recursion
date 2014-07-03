// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  function check (node) {
    if (node !== undefined) {
  		if (node.length) {
  			for (var i = 0; i < node.length; i++) {
  				check(node[i]);
  			}
  		} else {
  			if (node.classList) {
  				if (node.classList.contains(className)) {
  					result.push(node);
  				}
  				check(node.childNodes);
  			}
 	 	}
 	 }
 	}
  check(document.body);
  return result;
};
