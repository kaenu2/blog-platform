export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}

export interface IAuthor {
  username: string;
  bio?: string;
  image: string;
  following: boolean;
}

// export interface Root {
//     article: Article
// }
