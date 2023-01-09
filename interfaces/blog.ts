export interface BlogPost {
  id?: number;
  url?: string;
  discussionUrl?: string;
  title: string;
  html?: string;
  bodyText: string;
  tags: string[];
  createdAt: string;
  lastEditedAt?: string;
  author: {
    url: string;
    name: string;
    avatar: string;
  };
}
