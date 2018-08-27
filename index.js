// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

destructivelyAppendDriver = (name) => {
  drivers.push(name)
}

destructivelyPrependDriver = (name) => {
  drivers.unshift(name)
}

destructivelyRemoveLastDriver = () => {
  drivers.pop()
}

destructivelyRemoveFirstDriver = () => {
  drivers.shift()
}

appendDriver = (name) => {
  return [...drivers, name]
}

// console.log(appendDriver("Broom"))

prependDriver = (name) => {
  return [name, ...drivers]
}

removeLastDriver = () => {
  const newDrivers = drivers.slice(0, drivers.length - 1)
  return newDrivers
}

removeFirstDriver = () => {
  const newDrivers = drivers.slice(1)
  return newDrivers
}

// console.log(removeFirstDriver() )
