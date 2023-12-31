export interface IProps {
  title: string;
  description: string;
  tagList: string[];
  favoritesCount: number;
  user: IUSer;
  link: string;
  favorited: boolean;
  index: number;
}

export interface IUSer {
  username: string;
  image: string;
  updatedAt: string;
}
