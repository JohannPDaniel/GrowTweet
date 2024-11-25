export interface Headers {
    token: string;
    userId: string;
    tweetId: string;
    followerId: string
}

export type token = Pick<Headers, "token">
export type HeadersForTweet = Pick<Headers, "token" | "userId">