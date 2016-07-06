const defaultSomeValues = {
  string: () => Array(Math.ceil(Math.random()*19)).fill('').map((v)=>String.fromCharCode(Math.floor(Math.random()*26)+97)).join(''),
  number: () => Math.ceil(Math.random()*98),
  digit: () => Math.floor(Math.random()*9)
}

function newSomeValues(values = {}) {
  const someValues = Object.assign({}, defaultSomeValues, values)

  return new Proxy(someValues, {
    get: (target, name) => {
      if (typeof target[name] === 'function') {
        target[name] = target[name]()
      }
      return target[name]
    }
  })
}

module.exports = newSomeValues
