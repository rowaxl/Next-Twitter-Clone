export interface IUser {
  id: string
  avatarUrl: string
  name: string,
}

export interface ITweet {
  id: string
  text: string
  user: IUser
  date: string
}

export type NotifyCategory = 'like' | 'retweet'

export interface INotify {
  tweetID: string
  from: IUser
  category: NotifyCategory[]
}