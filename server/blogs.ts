import { discussionGql } from "./gql";

const API_URL: string = "https://api.github.com/graphql";
const GH_TOKEN_KEY = process.env.SECRET_GITHUB_TOKEN_KEY;

const getBlogs = async () => {
  const respone = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `token ${GH_TOKEN_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: discussionGql() }),
  });

  let res = await respone.json();
  return res.data.repository.discussions;
};

export default getBlogs;
