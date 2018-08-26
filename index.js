// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name);
}

function appendDriver(name) {
  let newArr = drivers.slice(0)
  newArr.push(name);
  return newArr;
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver(name) {
  return drivers.slice(0, -1)
}

function removeFirstDriver(name) {
  return drivers.slice(1)
}
