import { useEffect, useState } from "react";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import Welcome from "./widgets/Welcome";
import { fetchUserMainData } from "../../services/api";
import { User, UserSchema } from "../../schema/userSchema";

function Dashboard({ useMockedData }: { useMockedData?: boolean }) {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );

  const fetchUserData = async () => {
    const idFromUrl = window.location.pathname.split("/").pop();
    if (useMockedData) {
      const data: unknown = USER_MAIN_DATA_MOCKED.find(
        (user) => user.id === parseInt(idFromUrl || "")
      );
      const result = UserSchema.safeParse(data);
      if (!result.success) {
        console.error(result.error);
        return;
      }
      setCurrentUserData(result.data);
    } else {
      const parsedData = await fetchUserMainData(parseInt(idFromUrl || ""));
      if (!parsedData.success) {
        console.error(parsedData.error);
        return;
      }
      setCurrentUserData(parsedData.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="w-full h-screen ml-56 mt-14">
      <Welcome currentUserData={currentUserData} />
    </div>
  );
}

export default Dashboard;
