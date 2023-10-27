import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  userInfos: z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
  }),
  todayScore: z.number(),
  keyData: z.object({
    calorieCount: z.number(),
    proteinCount: z.number(),
    carbohydrateCount: z.number(),
    lipidCount: z.number(),
  }),
});

export type User = z.infer<typeof UserSchema>;

export const UserAverageSessionSchema = z.object({
  userId: z.number(),
  sessions: z.array(
    z.object({
      day: z.number(),
      sessionLength: z.number(),
    })
  ),
});

export type UserAverageSession = z.infer<typeof UserAverageSessionSchema>;

export const UserPerformanceSchema = z.object({
  userId: z.number(),
  kind: z.object({
    1: z.string(),
    2: z.string(),
    3: z.string(),
    4: z.string(),
    5: z.string(),
    6: z.string(),
  }),
  data: z.array(
    z.object({
      value: z.number(),
      kind: z.number(),
    })
  ),
});

export type UserPerformance = z.infer<typeof UserPerformanceSchema>;

export const UserActivitySchema = z.object({
  userId: z.number(),
  sessions: z.array(
    z.object({
      day: z.string(),
      kilogram: z.number(),
      calorie: z.number(),
    })
  ),
});

export type UserActivity = z.infer<typeof UserActivitySchema>;
