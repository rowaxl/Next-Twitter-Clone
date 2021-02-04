import { createServer, Model, Factory, trait } from "miragejs"
import { add, parseISO } from 'date-fns'
import faker, { name, internet, lorem } from 'faker'
import { AvatarGenerator } from 'random-avatar-generator'

faker.seed(123)

const generator = new AvatarGenerator()

let startingDate = parseISO('2021-01-01')
let server = createServer({
  timing: 1000,
  models: {
    tweet: Model,
  },

  factories: {
    tweet: Factory.extend({
      name() {
        return name.findName()
      },
      userName() {
        return internet.userName()
      },
      text() {
        return lorem.sentence()
      },
      avatarUrl() {
        return generator.generateRandomAvatar()
      },
      date(i) {
        return add(startingDate, { days: i }).toISOString()
      },

      fromKim: trait({
        name: 'Wonjae Kim',
        userName: 'rowaxl0',
        avatarUrl: 'https://pbs.twimg.com/profile_images/1355966530652045313/LaqS48cW_400x400.jpg'
      })
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