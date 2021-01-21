import * as async from './async'

async.fonctionAsynchrone1()
  .then(result => console.log(result))
  .then(result => async.fonctionAsynchrone2())
  .then(result => console.log(result))
  .then(result => async.fonctionAsynchrone3())
  .then(result => console.log(result))
  .catch(error => console.error(error))