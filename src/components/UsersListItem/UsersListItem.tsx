import { usePostsContext } from "@/providers/PostsProvider/PostsProvider";
import { User } from "../types";
import styles from "./UsersListItem.module.css";
import clsx from "clsx";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const UsersListItem = ({ user }: { user: User }) => {
  const router = useRouter();
  const { posts } = usePostsContext();
  const { id, name } = user;

  const userPostsCount = posts[id]?.length;

  const onCardClick = useCallback(() => {
    router.push(`/user/${id}`);
  }, [id, router]);

  return (
    <div
      className={clsx("d-flex row justify-space-between pointer", styles.card)}
      onClick={onCardClick}
    >
      <div className="d-flex">Name : {name}</div>
      <div className="d-flex">Posts : {userPostsCount}</div>
    </div>
  );
};
