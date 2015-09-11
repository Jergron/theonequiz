var FruitMaker = (function (fruit) {

  fruit.slices = function (name, number) {
    var fruitSlices = [];
    for (var i = 0; i < number; i++) {
      fruitSlices.push(name);
    }
    return fruitSlices;
  }



  return fruit;
})(FruitMaker);

var fruitStuff = FruitMaker.slices("apples", 2);
console.log("fruitStuff", fruitStuff);
