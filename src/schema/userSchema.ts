import { z } from "zod";
/***
 * User Schema
 * @typedef {Object} User
 * @property {number} id
 * @property {Object} userInfos
 * @property {string} userInfos.firstName
 * @property {string} userInfos.lastName
 * @property {number} userInfos.age
 * @property {number} todayScore
 * @property {Object} keyData
 * @property {number} keyData.calorieCount
 * @property {number} keyData.proteinCount
 * @property {number} keyData.carbohydrateCount
 * @property {number} keyData.lipidCount
 * @since 1.0.0
 * @exports {Object} UserSchema - User schema
 * @exports {Function} UserSchema.parse - Parses the data against the schema.
 * @exports {Function} UserSchema.safeParse - Parses the data against the schema and returns a safe result.
 */
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

/***
 * User Average Session Schema
 * @typedef {Object} UserAverageSession
 * @property {number} userId
 * @property {Array} sessions
 * @property {number} sessions.day
 * @property {number} sessions.sessionLength
 * @since 1.0.0
 * @exports {Object} UserAverageSessionSchema - User average session schema
 * @exports {Function} UserAverageSessionSchema.parse - Parses the data against the schema.
 * @exports {Function} UserAverageSessionSchema.safeParse - Parses the data against the schema and returns a safe result.
 */
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

/***
 * User Performance Schema
 * @typedef {Object} UserPerformance
 * @property {number} userId
 * @property {Object} kind
 * @property {string} kind.1
 * @property {string} kind.2
 * @property {string} kind.3
 * @property {string} kind.4
 * @property {string} kind.5
 * @property {string} kind.6
 * @property {Array} data
 * @property {number} data.value
 * @property {number} data.kind
 * @since 1.0.0
 * @exports {Object} UserPerformanceSchema - User performance schema
 * @exports {Function} UserPerformanceSchema.parse - Parses the data against the schema.
 * @exports {Function} UserPerformanceSchema.safeParse - Parses the data against the schema and returns a safe result.
 */
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

/***
 * User Activity Schema
 * @typedef {Object} UserActivity
 * @property {number} userId
 * @property {Array} sessions
 * @property {string} sessions.day
 * @property {number} sessions.kilogram
 * @property {number} sessions.calories
 * @since 1.0.0
 * @exports {Object} UserActivitySchema - User activity schema
 * @exports {Function} UserActivitySchema.parse - Parses the data against the schema.
 * @exports {Function} UserActivitySchema.safeParse - Parses the data against the schema and returns a safe result.
 */
export const UserActivitySchema = z.object({
  userId: z.number(),
  sessions: z.array(
    z.object({
      day: z.string(),
      kilogram: z.number(),
      calories: z.number(),
    })
  ),
});

export type UserActivity = z.infer<typeof UserActivitySchema>;
