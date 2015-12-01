function personConstructor(name) {
  var obj = {
    name: name,
    distance_travelled: 0,
    say_name: function() {
      alert(obj.name);
    },
    say_something: function(str) {
      console.log(name + " says " + str);
    },
    walk: function() {
      alert(name + " is walking");
      obj.distance_travelled += 3;
    },
    run: function() {
      alert(name + " is running");
      obj.distance_travelled += 10;
    },
    crawl: function() {
      alert(name + " is crawling");
      obj.distance_travelled += 1;
    }
  };
  return obj;
}
var res = personConstructor("Jay");
console.log(res);
res.run();
res.say_something("hello");
console.log(res.distance_travelled);


function Ninja(name, cohort) {
  var allLevel = ["yellow-belt", "red-belt", "black-belt"];
  var counter = 0;
  var obj = {
    name: name,
    cohort: cohort,
    beltLevel: allLevel[counter],
    levelUp: function() {
      counter += 1;
      this.beltLevel = allLevel[counter];
    }
  };
  return obj;
}

var ninja2 = Ninja("Naldo", 2017);
console.log(ninja2);
ninja2.levelUp();
ninja2.levelUp();
console.log(ninja2.beltLevel);
