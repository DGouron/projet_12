import {
  UserActivitySchema,
  UserPerformanceSchema,
  UserSchema,
} from "../schema/userSchema";

const API_URL = "http://localhost:3000";
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

export const fetchUserPerformance = async (id: number) => {
  if (!id) {
    return null;
  }
  const response = await fetch(`${API_URL}/user/${id}/performance`);
  const serializedResponse = await response.json();
  const parsedData = UserPerformanceSchema.safeParse(serializedResponse.data);
  return parsedData;
};
