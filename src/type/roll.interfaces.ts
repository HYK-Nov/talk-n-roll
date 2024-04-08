export interface IRoll {
    roll_id: number,
    category: string,
    title: string
}

export interface IRollDetail extends IRoll {
    writer: string,
    content: string,
    published_at: Date,
    updated_at: Date,
    count: number
}

export interface ICommentWrite {
    writer: string,
    content: string,
}

export interface IComment extends ICommentWrite {
    roll_id: number
}

export interface ICommentDetail extends IComment {
    comment_id: number,
    published_at: Date,
    updated_at: Date,
    deleted: boolean
}