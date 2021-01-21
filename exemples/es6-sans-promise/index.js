import * as async from './async'

async.fonctionAsynchrone1(function (resultat) {
  console.log(resultat)

  async.fonctionAsynchrone2(function (resultat) {
    console.log(resultat)

    async.fonctionAsynchrone3(function (resultat) {
      console.log(resultat)
    })
  })
})