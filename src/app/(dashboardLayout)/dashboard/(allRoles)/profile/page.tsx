import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

const ProfilePage = async () => {
  await getServerSession(authOptions);
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return <div>Profile</div>;
};

export default ProfilePage;
