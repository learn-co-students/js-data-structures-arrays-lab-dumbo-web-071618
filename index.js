// Write your solution here!
  const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {

  drivers.push(name);
}


function destructivelyPrependDriver(name) {

  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {

  drivers.pop();
}

function destructivelyRemoveFirstDriver() {

  drivers.shift();
}



function appendDriver(name){


   const newDriver = drivers.concat(name);


   return newDriver
}


function prependDriver(name) {

  const newDriver = [name, ...drivers]

  return newDriver
}

function removeLastDriver() {

  const slicedDriver = drivers.slice(0, 2)

  return slicedDriver
}

function removeFirstDriver(){

  const slicedDriver = drivers.slice(1)

  return slicedDriver
}
