// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
function destructivelyRemoveLastDriver() {
  drivers.pop();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
// ES2015 introduced the spread operator, which looks like an ellipsis: ....
// The spread operator allows us to spread out the contents of an existing
// Array into a new Array, adding new elements but preserving the original
function appendDriver(name) {
  return [...drivers, name];
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function prependDriver(name) {
  return [name, ...drivers];
}
// To remove elements from an Array nondestructively (without manipulating the
// original Array), we can use the .slice() method. Just as the name implies,
// the .slice() method returns a portion, or slice, of an Array.
function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1); // [array].length is optional
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function removeFirstDriver() {
  return drivers.slice(1);
}
