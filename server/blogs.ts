import { BlogPost } from "../interfaces/blog";
import { discussionGql } from "./gql";

const API_URL: string = "https://api.github.com/graphql";
const GH_TOKEN_KEY = process.env.SECRET_GITHUB_TOKEN_KEY;

const getBlogs = async (): Promise<BlogPost[]> => {
  const respone = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `token ${GH_TOKEN_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: discussionGql() }),
  });

  let res = await respone.json();
  const discussions = res.data.repository.discussions.nodes;
  const posts = discussions.map((discussion: any): BlogPost => {
    const {
      title,
      author,
      number: id,
      bodyHTML: html,
      bodyText,
      createdAt,
      lastEditedAt,
      labels,
      url: discussionUrl,
    } = discussion;
    const url = `/blog/${id}`
    const authorUrl = author.url
    const authorName = author.login
    const authorAvatar = author.avatarUrl
    const tags: string[] = labels.nodes.map((label:{name: string})=> label.name)
    const post = {
      id,
      url,
      discussionUrl,
      title,
      html,
      bodyText,
      tags,
      createdAt,
      lastEditedAt,
      author:{
        url: authorUrl,
        name: authorName,
        avatar: authorAvatar
      }
    }
    return post
  });

  return posts;
};

export default getBlogs;
