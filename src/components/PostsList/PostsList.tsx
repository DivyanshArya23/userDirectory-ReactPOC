import { Fragment } from "react";
import { PostCard } from "../PostCard/PostCard";
import { Post } from "../types";
import clsx from "clsx";
import styles from "./PostsList.module.css";

export const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={clsx("flex-wrap", styles.postsList)}>
      {posts?.map((post) => (
        <Fragment key={post.id}>
          <PostCard post={post} />
        </Fragment>
      ))}
    </div>
  );
};
