import { Suspense, useEffect, useState, lazy } from "react";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import Welcome from "./widgets/Welcome";
import { fetchUserMainData } from "../../services/api";
import { User, UserSchema } from "../../schema/userSchema";
import { checkMockedRoute } from "../../helpers/usage";
import { ThreeDot } from "react-loading-indicators";

const DailyActivity = lazy(() => import("./widgets/DailyActivity"));
function Dashboard() {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );

  const fetchUserData = async () => {
    const idFromUrl = window.location.pathname.split("/").pop();
    if (checkMockedRoute()) {
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

  const fetchUserActivity = async () => {
    if (checkMockedRoute()) {
      console.log("mocked");
    } else {
      console.log("not mocked");
      // add promise resolve with timeout for mocking loading
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("resolved");
        }, 10000);
      });
      return "data";
    }
  };
  const ActivitiesFetcher = () => {
    const data = fetchUserActivity();
    console.log(data);
    return <DailyActivity />;
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="w-full h-screen ml-56 mt-14">
      <Welcome currentUserData={currentUserData} />
      <Suspense fallback={<ThreeDot color={"red"} />}>
        <ActivitiesFetcher />
      </Suspense>
    </div>
  );
}

export default Dashboard;
