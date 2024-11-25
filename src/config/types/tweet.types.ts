export interface TweetTypes {
    id: string;
    content: string;
    type: string;
    createdAt: string;
    userId: string;
}

export type TweetId = Pick<TweetTypes, "id">