var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Answer to challange 7 in "Basics" section
document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

// Answer to challange 8 in "Basics" section
$("#jquery_output").html("This content generated with jQuery");



// Answer to challange 1 in "Functions and operators" section
function modulus (n1, n2) {
  return n1 % n2;
};

// Answer to challange 2 in "Functions and operators" section
function add(n1, n2) {
  return n1 + n2;
};

function subtract (n1, n2) {
  return n1 - n2;
};

function doMath (n1, n2, fun) {
  return fun(n1, n2);
};

var addNum = doMath(1, 2, add);
console.log("doMath(1, 2, add) =", addNum);

var subtractNum = doMath(2, 1, subtract);
console.log("doMath(2, 1, subtract) =", subtractNum);

// Answer to challange 1 in "Arrays" section
function sortedPlanets() {
  return Planets.sort();
}; 
  console.log("sortedPlanets", sortedPlanets());

// Answer to challange 2 in "Arrays" section
function reversedPlanets() {
  var newPlanets = [];
  for (var i = 0; i < Planets.length; i++) {
    var splitPlanets = Planets[i].split('').reverse().join('');
    newPlanets.push(splitPlanets);
  };
  return newPlanets;
};
console.log("reversedPlanets", reversedPlanets());

// Answer to challange 3 in "Arrays" section
function longPlanets() {
  var longerPlanets = [];
  for (var i = 0; i < Planets.length; i++) {
    if(Planets[i].length >= 7) {
      longerPlanets.push(Planets[i]);
    }    
  }
  return longerPlanets;
};
console.log("longPlanets", longPlanets());


function getAnimals() {
  var array;
  $.ajax({
    url: "data/animals.json",
    type: "GET",
    async: false,
    success: function (data) {
      array = data.animals;
    }
  });
  return array;

};

console.log("animals", getAnimals());














