import feathers from '@feathersjs/client'
import rest from '@feathersjs/rest-client'

const app = feathers()

const restClient = rest('http://localhost:3030')
app.configure(restClient.fetch(fetch))

// const datastore = (async () => {
//   return {
//     app,
//     posts: await app.service('posts').find({})
//   }
// })()

export default {
  app,
  pages: app.service('pages')
}