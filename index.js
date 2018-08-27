// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  let newArray = [...drivers, name]
  return newArray
}

function prependDriver(name) {
  let newArray = [name, ...drivers]
  return newArray
}

function removeLastDriver() {
  let newArray = drivers.slice(0, drivers.length-1)
  return newArray
}

function removeFirstDriver() {
  let newArray = drivers.slice(1)
  return newArray
}
