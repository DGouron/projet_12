import { UserSchema } from "../schema/userSchema";

const API_URL = "http://localhost:3000";
export const fetchUserMainData = async (id: number) => {
  const response = await fetch(`${API_URL}/user/${id}`);
  const data = await response.json();
  const parsedDate = UserSchema.safeParse(data.data);
  return parsedDate;
};

export const fetchUserList = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};
