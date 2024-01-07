import { getPosts } from "@/api/getPosts";
import { Post, PostGroupedByUserId } from "@/components/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
const initialPostsContext: { posts: PostGroupedByUserId } = { posts: {} };

const PostsContext = createContext(initialPostsContext);

type PostsProvider = {
  children: ReactNode;
};

export const PostsProvider = ({ children }: PostsProvider) => {
  const [posts, setPosts] = useState<PostGroupedByUserId>({});

  const fetchAllPosts = useCallback(async () => {
    const allPosts: Post[] = await getPosts();

    const groupedPosts = allPosts.reduce((acc, item) => {
      if (acc[item.userId]?.length) {
        return { ...acc, [item.userId]: [...acc[item.userId], item] };
      } else {
        return { ...acc, [item.userId]: [item] };
      }
    }, {} as PostGroupedByUserId);
    setPosts(groupedPosts);
  }, []);

  useEffect(() => {
    if (!Object.keys(posts).length) {
      fetchAllPosts();
    }
  }, [fetchAllPosts, posts]);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  const ctx = useContext(PostsContext);

  if (ctx === undefined) {
    throw new Error("Component is not wrapped in PostsProvider");
  }

  return ctx;
};
