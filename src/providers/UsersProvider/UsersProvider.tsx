import { getAllUsers } from "@/api/getUsers";
import { User, UsersGroupedByUserId } from "@/components/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
const initialUsersContext: {
  users: User[];
  groupedUsers: UsersGroupedByUserId;
} = { users: [], groupedUsers: {} };

const UsersContext = createContext(initialUsersContext);

type UsersProviderProps = {
  children: ReactNode;
};
export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [groupedUsers, setGroupedUsers] = useState<UsersGroupedByUserId>({});

  const groupUsers = (usersArray: User[]) => {
    return usersArray.reduce((acc, item) => {
      return { ...acc, [item.id]: item };
    }, {} as UsersGroupedByUserId);
  };

  const fetchAllUsers = useCallback(async () => {
    if (!allUsers.length) {
      const fetchedUsers = await getAllUsers();
      const groupedUsersObj = groupUsers(fetchedUsers);
      setGroupedUsers(groupedUsersObj);
      setAllUsers(fetchedUsers);
    }
  }, [allUsers]);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <UsersContext.Provider value={{ users: allUsers, groupedUsers }}>
      {allUsers?.length ? children : null}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const ctx = useContext(UsersContext);

  if (ctx === undefined) {
    throw new Error("Component is not wrapped in UsersProvider");
  }

  return ctx;
};
