// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  var result = drivers.slice(0);
  result.push(name) //=> "Broom"
  return result; //=> (["Milo", "Otis", "Garfield", "Broom"])
}

function prependDriver(name) {
  var result = drivers.slice();
  result.unshift(name)
  return result;
}

function removeLastDriver() {
  var result = drivers.slice();
  result.pop();
  return result;
}

function removeFirstDriver() {
  var result = drivers.slice();
  result.shift();
  return result;
}
