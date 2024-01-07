import clsx from "clsx";
import styles from "./UserCard.module.css";
import { User } from "../types";

export const UserCard = ({ user }: { user: User }) => {
  const {
    name,
    username,
    company: { catchPhrase },
    address,
    email,
    phone,
  } = user;

  const { suite, street, city, zipcode } = address;

  return (
    <div className={clsx("d-flex row justify-space-between", styles.userCard)}>
      <div className="d-flex column justify-end">
        <div>{name}</div>
        <div>
          {username} | {catchPhrase}
        </div>
      </div>
      <div className="text-right">
        <div>
          {suite}, {street}
        </div>
        <div>
          {city}-{zipcode}
        </div>
        <div>
          {email} | {phone}
        </div>
      </div>
    </div>
  );
};
