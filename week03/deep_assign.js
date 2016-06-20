(function()
{
    "use strict";

    function isObject(value)
    {
        return value != null &&  typeof value === 'object';
    }

    var isEnumerable = Object.prototype.propertyIsEnumerable,
        hasProp = Object.prototype.hasOwnProperty;

    Object.defineProperty(Object, "deepAssign",
    {
        value: function deepAssign(target, sources)
        {
            if (target == null) throw new TypeError('First argument can not be null');

            //why do we need to wrap target around with Object?
            var to = Object(target);

            for (var i = 1; i < arguments.length; i++){
                var from = arguments[i];

               Reflect.ownKeys(from)
               .filter(function(key){
                return isEnumerable.call(from, key);
               }) 
               .forEach(function(key) {
                if (isObject(to[key]) && isObject(from[key])) {
                    Object.deepAssign(to[key], from[key]);
                } else {
                      to[key] = from[key];
                  }

               });
            }

            return to;
        },
        writable: true,
        configurable: true
    })


})()


var o1 = {  
        a : 1,
        b : 2,
        c : {
          ca : 1,
          cb : 2,
          cc : {
            cca : 100,
            ccb : 200 } } };

var o2 = {  
        a : 10,
        c : {
          cca : 10,
          ccb : 20, 
          ccc : {
            ccca : 101,
            cccb : 202 } } };