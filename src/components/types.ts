export type User = {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostGroupedByUserId = Record<Post["userId"], Post[]>;
export type UsersGroupedByUserId = Record<User["id"], User>;

export type Time = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
  timeInMs: number;
};
