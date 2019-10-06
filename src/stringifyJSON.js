// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var array = [];
  /*Checks Primitive */
  if ((obj === null) || (typeof obj === "number") || (typeof obj === "boolean")) {
    return `${obj}`;
  } else if (typeof obj === "string") {
    return `"${obj}"`;
  }
  /* Checks Array */
  else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }
    return `[${array}]`;
  }
  /* Checks Object */
  else if (typeof obj === "object") {
    for (var key in obj) {
      if ((typeof obj[key] === "undefined") || (typeof obj[key] === "function")) {
        return obj[key] = "{}";
      } else {
        array.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return `{${array}}`;
  }
};