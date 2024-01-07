import clsx from "clsx";
import { Post } from "../types";
import styles from "./PostCard.module.css";

export const PostCard = ({ post }: { post: Post }) => {
  const { title, body } = post;

  return (
    <div className={clsx("", styles.postCard)}>
      <h5 className="text-center">{title}</h5>
      <p>{body.slice(0, 50)}...</p>
    </div>
  );
};
