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

export type NotifyCategory = 'all' | 'like' | 'retweet' | 'mention'

export interface INotify {
  tweet: ITweet
  user: IUser
  category: NotifyCategory
}

export interface IMessage {
  text: string
  user: IUser
  date: number
}