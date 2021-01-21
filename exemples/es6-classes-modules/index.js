import {Rectangle, Carre} from './geometrie'

let rectangle = new Rectangle(10, 20)
rectangle.quiSuisJe()
console.log(rectangle.aire())

let carre = new Carre(10)
carre.quiSuisJe()
carre.cote = 5
console.log(carre.cote)
console.log(carre.aire())