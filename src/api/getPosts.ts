import { ENDPOINTS } from "@/constants";

export const getPosts = async (postId?: number) => {
  const res = await fetch(
    `${ENDPOINTS.POSTS}${postId ? `?userId=${postId}` : ""}`
  );
  const posts = await res.json();

  return posts;
};
