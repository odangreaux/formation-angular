let delai = 3000

export function fonctionAsynchrone1(callback) {
  setTimeout(function () { callback("resultat 1") }, delai)
}

export function fonctionAsynchrone2(callback) {
  setTimeout(function () { callback("resultat 2") }, delai)
}

export function fonctionAsynchrone3(callback) {
  setTimeout(function () { callback("resultat 3") }, delai)
}