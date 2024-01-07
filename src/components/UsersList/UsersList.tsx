import { useUsersContext } from "@/providers/UsersProvider/UsersProvider";
import { UsersListItem } from "../UsersListItem/UsersListItem";
import { Fragment } from "react";
import clsx from "clsx";
import styles from "./UsersList.module.css";

export const UsersList = () => {
  const { users } = useUsersContext();

  return (
    <div className={clsx("d-flex column spacing-20", styles.userList)}>
      {users.map((user) => (
        <Fragment key={user.id}>
          <UsersListItem user={user} />
        </Fragment>
      ))}
    </div>
  );
};
