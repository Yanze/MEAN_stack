var _ = {
  map: function(list, callback) {
    var newArr = [];
    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        newArr.push(callback(list[i]));
      }
      return newArr;
    }
    if (typeof(list) === 'object') {
      for (var key in list) {
        newArr.push(callback(list[key]));
      }
      return newArr;
    }

  },

  reduce: function(arr, callback) {
    var memo = 0;
    for (var i = 0; i < arr.length; i++) {
      memo = callback(memo, arr[i]);
    }
    return memo;
  },


  find: function(arr, callback){
    var found;
    for(var i = 0; i < arr.length; i++){
      if(callback(arr[i])){
        found = arr[i];
        break;
      }
    }
    return found;
  },


  filter: function(arr, callback) {
    var myArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        myArr.push(arr[i]);
      }
    }
    return myArr;
  },


  reject: function(arr, callback) {
    var rejected = [];
    for(var i = 0; i < arr.length; i++){
      if(!callback(arr[i])){
        rejected.push(arr[i]);
      }
    }
    return rejected;
  }
};
// you just created a library with 5 methods!

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
// console.log(odds);

// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
// console.log(even);

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; }); //should return [2, 4, 6] after you finish implementing the code above
// console.log(evens);
// var add2 = _.map([1,2,3,4], function(num){return num + 2;});
// console.log(add2);
//
// var add2 = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// console.log(add2);

var reduceArr = _.reduce([1, 2, 3, 4, 5, 6, 7, 8], function(num1, num2) {
  return num1 - num2;
});
// console.log(reduceArr);
