export type ActivitySession = {
  day: string;
  kilogram: number;
  calories: number;
};
export type Activity = {
  userId: number;
  sessions: ActivitySession[];
};