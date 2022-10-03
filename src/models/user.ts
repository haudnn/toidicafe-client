// export interface User {
//   id: number | string;
//   displayName: string;
//   password: string;
//   email: string;
//   phone: number;
//   avatar: string;
//   verified: boolean;
//   facebook: string;
//   instagram: string;
//   following: Array<string>;
//   followers: Array<string>;
//   bookmarks: Array<string>;
//   token: string;
//   refresh_token: string;  
// }
export interface User { 
  bookmarks: Array<string>
  avatar : string;
  displayName: string;
  _id: string
}
