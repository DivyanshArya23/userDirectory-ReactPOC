"use client";
import { CountryClock } from "@/components/CountryClock/CountryClock";
import { PostsList } from "@/components/PostsList/PostsList";
import { UserCard } from "@/components/UserCard/UserCard";
import { usePostsContext } from "@/providers/PostsProvider/PostsProvider";
import { useUsersContext } from "@/providers/UsersProvider/UsersProvider";
import { useRouter } from "next/navigation";

const UserPage = ({ params }: { params: { userId: string } }) => {
  const router = useRouter();
  const userId = params.userId;
  const { groupedUsers } = useUsersContext();
  const { posts } = usePostsContext();
  const currUser = groupedUsers[Number(userId)];
  const currUserPosts = posts[Number(userId)];

  return (
    <div className="d-flex column spacing-20">
      <div className="d-flex justify-conter">
        <h2>Profile Page</h2>
      </div>
      <div className="d-flex row flex-wrap justify-space-between">
        <div>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Back
          </button>
        </div>
        <CountryClock />
      </div>

      <div className="d-flex column spacing-20">
        <UserCard user={currUser} />
        <PostsList posts={currUserPosts} />
      </div>
    </div>
  );
};

export default UserPage;
