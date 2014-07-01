// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null) {
  	return 'null';
  } else if (Array.isArray(obj)) {
  	var array = [];

  	for (var i = 0; i < obj.length; i++) {
  		array.push(stringifyJSON(obj[i]));
  	}
  	
  	return "[" + array.toString() + "]";

  } else if (typeof(obj) === "string") {
  	return '"' + obj.toString() + '"';
  } else {
  	return obj.toString();
  }
};
