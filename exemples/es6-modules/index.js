import * as math from './lib/math'
import log, {message1, message2, level} from './lib/log'

console.log(math.pi)
console.log(math.somme(1, 2))
console.log(math.foisDeux(10))
console.log(math.deux)

console.log(message1)
log(message2)
if(level === 'INFO') {
  log("Hello")
}