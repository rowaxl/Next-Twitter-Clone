import { createServer, Model, Factory, trait } from "miragejs"
import { add } from 'date-fns'
import faker, { name, internet, lorem } from 'faker'
import { AvatarGenerator } from 'random-avatar-generator'

faker.seed(123)

const generator = new AvatarGenerator()

let startingDate = new Date()
let server = createServer({
  timing: 1000,
  models: {
    tweet: Model,
  },

  factories: {
    tweet: Factory.extend({
      user() {
        return {
          id: internet.userName(),
          name: name.findName(),
          avatarURL: generator.generateRandomAvatar()
        }
      },
      text() {
        return lorem.sentence()
      },
      date(i) {
        return add(startingDate, { days: i }).toISOString()
      },

      fromKim: trait({
        name: 'Wonjae Kim',
        userName: 'rowaxl0',
        avatarUrl: 'https://pbs.twimg.com/profile_images/1355966530652045313/LaqS48cW_400x400.jpg'
      })
    }),
    notifications: Factory.extends({
      user() {
        return {
          id: internet.userName(),
          name: name.findName(),
          avatarURL: generator.generateRandomAvatar()
        }
      },
      category() {
        const categories = ['like', 'retweet']
        const i = Math.floor(Math.random() * categories.length)
        return categories[i]
      },
      date(i) {
        return add(startingDate, { days: i }).toISOString()
      },
    })
  },

  routes() {
    this.passthrough((request) => {
      if (request.url === "/_next/static/development/_devPagesManifest.json")
        return true;
    });
    this.namespace = 'api'
    this.get('tweets')

    this.passthrough()
  },

  seeds(server) {
    server.createList('tweet', 10)
  }
})

setInterval(() => {
  server.create("tweet");
}, 5000);