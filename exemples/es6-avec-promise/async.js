let delai = 3000

export function fonctionAsynchrone1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resultat 1"), delai)
  })
}

export function fonctionAsynchrone2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resultat 2"), delai)
  })
}

export function fonctionAsynchrone3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("echec 3"), delai)
  })
}