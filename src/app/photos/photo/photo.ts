export interface Photo {
    url: string;
    description: string;
    id: number;
    postDate: Date;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}
