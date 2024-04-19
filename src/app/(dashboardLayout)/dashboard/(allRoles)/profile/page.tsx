import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return <div>Profile</div>;
};

export default ProfilePage;
