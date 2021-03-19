import { createServer, Model, Factory, trait } from "miragejs"
import { add, sub } from 'date-fns'
import faker, { name, internet, lorem, random, time } from 'faker'
import { AvatarGenerator } from 'random-avatar-generator'

faker.seed(123)

const generator = new AvatarGenerator()

let startingDate = new Date()

const randomDate = () => {
  let i = Math.floor(Math.random() * 5)
  return add(startingDate, { days: i }).toISOString()
}

let server = createServer({
  timing: 1000,
  models: {
    tweet: Model,
    notification: Model,
    message: Model,
  },

  factories: {
    tweet: Factory.extend({
      id() {
        return random.uuid()
      },
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
        return randomDate()
      },
      replied() {
        return Math.floor(Math.random() * 10)
      },
      liked() {
        return Math.floor(Math.random() * 100)
      },
      retweeted() {
        return Math.floor(Math.random() * 100)
      }
    }),
    notification: Factory.extend({
      user() {
        return {
          id: internet.userName(),
          name: name.findName(),
          avatarURL: generator.generateRandomAvatar()
        }
      },
      category() {
        const categories = ['like', 'retweet', 'mention']
        const i = Math.floor(Math.random() * categories.length)
        return categories[i]
      },
      tweet() {
        return {
          id: random.uuid(),
          user: {
              id: internet.userName(),
              name: name.findName(),
              avatarURL: generator.generateRandomAvatar()
          },
          text: lorem.sentence(),
          date: randomDate(),
          replied: Math.floor(Math.random() * 10),
          liked: Math.floor(Math.random() * 100),
          retweeted: Math.floor(Math.random() * 100),
        }
      },
    }),
    message: Factory.extend({
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
      date() {
        const recent = time.recent()

        const a = Math.floor(Math.random() * 24 * 3600 * 1000)

        return recent - a
      }
    })
  },

  routes() {
    this.passthrough((request) => {
      if (request.url === "/_next/static/development/_devPagesManifest.json")
        return true;
    });
    this.namespace = 'api'
    this.get('tweets', 'tweet')
    this.get('notifications', 'notification')
    this.get('messages', 'message')

    this.passthrough()
  }, 

  seeds(server) {
    server.createList('tweet', 10)
    server.createList('notification', 10)
    server.createList('message', 10)
  }
})

setInterval(() => {
  server.create("tweet");
}, 5000);