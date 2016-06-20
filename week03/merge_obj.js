var merge = function() {
    window.arguments = arguments;
    var obj = {},
        i = 0,
        il = arguments.length,
        key;
    for (; i < il; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return obj;
};


var foo = { bar: 1, baz: 2};

var isEnumerable = {}.propertyIsEnumerable;

for (var prop in foo){
    console.log(prop); // outputs 'bar' and 'baz'
}
    
// console.log(foo.propertyIsEnumerable("bar")); 
var a = new Array("apple", "banana", "cactus");
document.write(a.propertyIsEnumerable("apple"));


/*
* Recursively merge properties of two objects 
*/
function MergeRecursive(obj1, obj2) {
  for (var p in obj2) {
    try {
      // Property in destination object set; update its value.
      if ( obj2[p] != null &&  typeof obj2[p] === 'object' ) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}



// var o1 = {  
//         a : 1,
//         b : 2,
//         c : {
//           ca : 1,
//           cb : 2,
//           cc : {
//             cca : 100,
//             ccb : 200 } } };

// var o2 = {  
//         a : 10,
//         c : {
//           ca : 10,
//           cb : 20, 
//           cc : {
//             cca : 101,
//             ccb : 202 } } };

// var o3 = MergeRecursive(o1, o2);
// console.log(MergeRecursive(o1, o2));
// console.log(merge(o1, o2));


function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if ( ! (prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
