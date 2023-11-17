import { USER_AVERAGE_SESSIONS_MOCKED } from "../mocks/mockAverageSessions";
import {
  UserActivitySchema,
  UserAverageSessionSchema,
  UserPerformanceSchema,
  UserSchema,
} from "../schema/userSchema";

const API_URL = "http://localhost:3000";
const ID_FROM_URL = window.location.pathname.split("/").pop();

export const fetchUserMainData = async (id: number) => {
  const response = await fetch(`${API_URL}/user/${id}`);
  const data = await response.json();
  const modifiedData = data.data;
  if (modifiedData?.score) {
    modifiedData.todayScore = modifiedData.score;
    delete modifiedData.score;
  }
  const parsedData = UserSchema.safeParse(modifiedData);
  return parsedData;
};

export const fetchUserList = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const fetchUserActivity = async (id: number) => {
  if (!id) {
    return null;
  }
  const response = await fetch(`${API_URL}/user/${id}/activity`);
  const serializedResponse = await response.json();
  const parsedData = UserActivitySchema.safeParse(serializedResponse.data);
  return parsedData;
};

export const fetchUserPerformance = async (id: number, useMock: boolean) => {
  if (!id) {
    return null;
  }
  let data: unknown = null;

  if (useMock) {
    data = USER_AVERAGE_SESSIONS_MOCKED.find(
      (session) => session.userId === parseInt(ID_FROM_URL || "")
    );
  } else {
    const response = await fetch(`${API_URL}/user/${id}/performance`);
    const serializedResponse = await response.json();
    data = serializedResponse.data;
  }

  const parsedData = UserPerformanceSchema.safeParse(data);
  return parsedData;
};

export const fetchUserAverageSessions = async (id: number) => {
  if (!id) {
    return null;
  }
  const response = await fetch(`${API_URL}/user/${id}/average-sessions`);
  const serializedResponse = await response.json();
  const parsedData = UserAverageSessionSchema.safeParse(
    serializedResponse.data
  );
  return parsedData;
};
