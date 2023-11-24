import { USER_AVERAGE_SESSIONS_MOCKED } from "../mocks/mockAverageSessions";
import { USER_ACTIVITY } from "../mocks/mockUserActivity";
import { USER_MAIN_DATA_MOCKED } from "../mocks/mockUserMainData";
import { USER_PERFORMANCE_MOCKED } from "../mocks/mockUserPerformance";
import {
  User,
  UserActivitySchema,
  UserAverageSessionSchema,
  UserPerformanceSchema,
  UserSchema,
} from "../schema/userSchema";

const API_URL = "http://localhost:3000";
const ID_FROM_URL = window.location.pathname.split("/").pop();

/***
 * @module services/api
 * @desc This module provides helper functions for the usage of the API.
 * @since 1.0.0
 * @exports {Function} fetchUserMainData - Fetches the main data of a user.
 * @exports {Function} fetchUserList - Fetches the list of users.
 * @exports {Function} fetchUserActivity - Fetches the activity of a user.
 * @exports {Function} fetchUserPerformance - Fetches the performance of a user.
 * @exports {Function} fetchUserAverageSessions - Fetches the average sessions of a user.
 */

export const fetchUserMainData = async (id: number, useMock: boolean) => {
  try {
    if (!id) {
      return null;
    }
    let data = null;

    if (useMock) {
      data = USER_MAIN_DATA_MOCKED.find(
        (user) => user.id === parseInt(ID_FROM_URL || "")
      );
      const sanitizedData = { ...data } as Partial<User>;
      if ("score" in sanitizedData) {
        sanitizedData.todayScore = sanitizedData.score as number;
        delete sanitizedData.score;
      }
      data = sanitizedData;
    } else {
      const response = await fetch(`${API_URL}/user/${id}/activity`);
      const serializedResponse = await response.json();
      data = serializedResponse.data;
    }

    const parsedData = UserSchema.safeParse(data);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserList = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const fetchUserActivity = async (id: number, useMock: boolean) => {
  try {
    if (!id) {
      return null;
    }
    let data: unknown = null;

    if (useMock) {
      data = USER_ACTIVITY.find(
        (activity) => activity.userId === parseInt(ID_FROM_URL || "")
      );
    } else {
      const response = await fetch(`${API_URL}/user/${id}/activity`);
      const serializedResponse = await response.json();
      data = serializedResponse.data;
    }

    const parsedData = UserActivitySchema.safeParse(data);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserPerformance = async (id: number, useMock: boolean) => {
  try {
    if (!id) {
      return null;
    }
    let data: unknown = null;

    if (useMock) {
      data = USER_PERFORMANCE_MOCKED.find(
        (performance) => performance.userId === parseInt(ID_FROM_URL || "")
      );
    } else {
      const response = await fetch(`${API_URL}/user/${id}/performance`);
      const serializedResponse = await response.json();
      data = serializedResponse.data;
    }

    const parsedData = UserPerformanceSchema.safeParse(data);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserAverageSessions = async (
  id: number,
  useMock: boolean
) => {
  try {
    if (!id) {
      return null;
    }
    let data: unknown = null;

    if (useMock) {
      data = USER_AVERAGE_SESSIONS_MOCKED.find(
        (averageSessions) =>
          averageSessions.userId === parseInt(ID_FROM_URL || "")
      );
    } else {
      const response = await fetch(`${API_URL}/user/${id}/average-sessions`);
      const serializedResponse = await response.json();
      data = serializedResponse.data;
    }

    const parsedData = UserAverageSessionSchema.safeParse(data);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};
