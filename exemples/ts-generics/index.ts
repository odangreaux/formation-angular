// utilisation des génériques sur les tableaux
const stringArray: Array<string> = ['un', 'deux', 'trois']
const stringElement: string = stringArray[0]
// const intElement: int = stringArray[0] => erreur de compilation

// fonction générique
function auHasard<T>(arg1: T, arg2: T): T {
  const randomTab = new Uint8Array(1)
  window.crypto.getRandomValues(randomTab);
  return arguments[randomTab[0] % 2]
}

console.log(auHasard<string>('un', 'deux'))
console.log(auHasard<string>('un', 'deux'))
console.log(auHasard<string>('un', 'deux'))
console.log(auHasard<string>('un', 'deux'))
console.log(auHasard<string>('un', 'deux'))
//console.log(auHasard<string>('un', 2)) // => erreur de compilation

// classe générique
class Logger<T> {
  log(value: T) {
    console.log(value);
  }
}

const logger = new Logger<string>()
logger.log('bonjour')
//logger.log(1) // => erreur de compilation
