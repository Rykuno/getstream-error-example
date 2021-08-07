import { User } from "../../components/User";
import { useRouter } from "next/router";

const UserPage = () => {
  const { query } = useRouter();

  // feed wont refresh with new `userId` on `FlatFeed` unless a key is passed here
  return <User key={query?.username} />;
};

export default UserPage;
