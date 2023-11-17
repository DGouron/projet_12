import { useEffect, useState } from "react";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import Welcome from "./widgets/Welcome";
import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserMainData,
  fetchUserPerformance,
} from "../../services/api";
import {
  User,
  UserActivity,
  UserAverageSession,
  UserPerformance,
  UserSchema,
} from "../../schema/userSchema";
import { checkMockedRoute } from "../../helpers/usage";
import InfoCard from "./widgets/InfoCard";
import DailyActivity from "./widgets/DailyActivity";
import SessionDuration from "./widgets/SessionLength";
import Performance from "./widgets/Performance";
import AverageScore from "./widgets/AverageScore";

function Dashboard() {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );
  const [userActivity, setUserActivity] = useState<UserActivity | undefined>(
    undefined
  );
  const [userPerformance, setUserPerformance] = useState<
    UserPerformance | undefined
  >(undefined);

  const [userAverageSessions, setUserAverageSessions] = useState<
    UserAverageSession | undefined
  >(undefined);

  const handleFetchUserData = async () => {
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

  const handleFetchUserActivity = async () => {
    if (checkMockedRoute()) {
      console.log("mocked");
    } else {
      // add promise resolve with timeout for mocking loading
      if (!currentUserData) {
        return;
      }
      const parsedData = await fetchUserActivity(currentUserData.id);
      if (parsedData && !parsedData.success) {
        console.error(parsedData.error);
        return;
      } else {
        setUserActivity(parsedData?.data);
      }
    }
  };

  const handleFetchUserPerformance = async () => {
    // add promise resolve with timeout for mocking loading
    if (!currentUserData) {
      return;
    }
    const parsedData = await fetchUserPerformance(
      currentUserData.id,
      checkMockedRoute()
    );
    if (parsedData && !parsedData.success) {
      console.log("parsedData in error => ", parsedData);
      console.error(parsedData.error);
      return;
    } else {
      setUserPerformance(parsedData?.data);
    }
  };

  const handleFetchUserAverageSessions = async () => {
    // add promise resolve with timeout for mocking loading
    if (!currentUserData) {
      return;
    }
    const parsedData = await fetchUserAverageSessions(currentUserData.id);
    if (parsedData && !parsedData.success) {
      console.log("parsedData in error => ", parsedData);
      console.error(parsedData.error);
      return;
    } else {
      setUserAverageSessions(parsedData?.data);
    }
  };

  useEffect(() => {
    handleFetchUserData();
  }, []);

  useEffect(() => {
    if (currentUserData) {
      handleFetchUserActivity();
      handleFetchUserPerformance();
      handleFetchUserAverageSessions();
    }
  }, [currentUserData]);

  return (
    <div className="w-full h-full px-56 mt-14">
      <Welcome currentUserData={currentUserData} />
      <div className="w-full flex flex-col xl:flex-row gap-8 mt-20">
        <div className="flex flex-col flex-[1_1_60%] xl:flex-auto h-full">
          <DailyActivity activityData={userActivity} />
          <div className="flex flex-col xl:flex-row justify-between mt-8">
            <SessionDuration userAverageSessions={userAverageSessions} />
            {userPerformance && (
              <Performance userPerformance={userPerformance} />
            )}
            {currentUserData && (
              <AverageScore latestScore={currentUserData?.todayScore || 0} />
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <InfoCard
            icon="calories"
            title="Calories"
            value={currentUserData?.keyData?.calorieCount + "kCal" || ""}
          />
          <InfoCard
            icon="protein"
            title="Protéines"
            value={currentUserData?.keyData?.proteinCount + "g" || ""}
          />
          <InfoCard
            icon="carbs"
            title="Glucides"
            value={currentUserData?.keyData?.carbohydrateCount + "g" || ""}
          />
          <InfoCard
            icon="fat"
            title="Lipides"
            value={currentUserData?.keyData?.lipidCount + "g" || ""}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
