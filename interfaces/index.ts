export interface IUser {
  id: string
  avatarURL: string
  name: string,
}

export interface ITweet {
  id: string
  text: string
  user: IUser
  date: string
  liked: number
  retweeted: number
}

export type NotifyCategory = 'like' | 'retweet'

export interface INotify {
  tweetID: string
  from: IUser
  category: NotifyCategory[]
}