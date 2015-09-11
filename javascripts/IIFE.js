var FruitMaker = (function (){
  var fruit = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function() {
      return fruit;
    },
    addFruit: function(newFruit) {
      fruit.push(newFruit);
      return fruit;
    }
  };
})();
