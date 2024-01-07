import { UsersList } from "../UsersList/UsersList";

export const UsersDirectory = () => {
  return (
    <div className="d-flex column">
      <h1 className="text-center">UsersDirectory</h1>
      <UsersList />
    </div>
  );
};
