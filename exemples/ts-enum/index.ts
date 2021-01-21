enum Couleur {Rouge, Vert, Bleu}

const uneCouleur: Couleur = Couleur.Vert

console.log(uneCouleur)
console.log(Couleur[uneCouleur])

enum CodeCouleur {R = 'Rouge', V = 'Vert', B = 'Bleu'}
const unCodeCouleur: CodeCouleur = CodeCouleur.R
console.log(unCodeCouleur)
console.log(CodeCouleur[unCodeCouleur]) // la récupération du nom de la valeur de l'enum n'est pas possible avec des enum string