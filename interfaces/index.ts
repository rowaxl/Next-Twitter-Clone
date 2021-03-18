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
  replied: number
  liked: number
  retweeted: number
}

export type NotifyCategory = 'like' | 'retweet'

export interface INotify {
  tweet: string
  user: IUser
  category: NotifyCategory
}

export interface IMessage {
  text: string
  user: IUser
  date: number
}