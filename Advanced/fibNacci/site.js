function fib(){
  var prev = 0;
  var current = 1;
  function nacci(){
    var res = current;
    var fibnacci = prev + current;
    prev = current;
    current = fibnacci;
    return res;
  }
  return nacci;
}

var counter = fib();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
