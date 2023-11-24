import { useEffect, useState } from "react";
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
} from "../../schema/userSchema";
import { checkMockedRoute, getUserIDFromURL } from "../../helpers/usage";
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
    const parsedData = await fetchUserMainData(
      getUserIDFromURL(),
      checkMockedRoute()
    );
    if (parsedData && !parsedData.success) {
      console.error(parsedData.error);
      return;
    }
    if (parsedData && parsedData.data) {
      setCurrentUserData(parsedData.data);
    }
  };

  const handleFetchUserActivity = async () => {
    if (!currentUserData) {
      return;
    }
    const parsedData = await fetchUserActivity(
      currentUserData.id,
      checkMockedRoute()
    );
    if (parsedData && !parsedData.success) {
      console.error(parsedData.error);
      return;
    } else {
      setUserActivity(parsedData?.data);
    }
  };

  const handleFetchUserPerformance = async () => {
    if (!currentUserData) {
      return;
    }
    const parsedData = await fetchUserPerformance(
      currentUserData.id,
      checkMockedRoute()
    );
    if (parsedData && !parsedData.success) {
      console.error(parsedData.error);
      return;
    } else {
      setUserPerformance(parsedData?.data);
    }
  };

  const handleFetchUserAverageSessions = async () => {
    if (!currentUserData) {
      return;
    }
    const parsedData = await fetchUserAverageSessions(
      currentUserData.id,
      checkMockedRoute()
    );
    if (parsedData && !parsedData.success) {
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
    <div className="flex">
      <div className="w-full h-full px-56 mt-32">
        <Welcome currentUserData={currentUserData} />
        <div className="w-full flex max-xl:flex-col gap-8 mt-20">
          <div className="flex flex-col flex-[1_1_60%] xl:flex-auto h-full">
            <DailyActivity activityData={userActivity} />
            <div className="flex max-xl:flex-col justify-between mt-8 gap-8">
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
    </div>
  );
}

export default Dashboard;
