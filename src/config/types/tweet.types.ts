export interface TweetTypes {
    id: string;
    content: string;
    type: string;
    createdAt: string;
    userId: string;
}

export type TweetContent = Pick<TweetTypes, "content" | "type">
