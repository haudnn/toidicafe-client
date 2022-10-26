
export interface Response { 
    error?: string
    message?: string
    comment?: any
    comments: Array<any>
}
export interface ReviewPayLoad { 
    shopId: string;
    images: Array<string>;
    title: string;
    body: string;
    anonymous: string;
    star: any
}