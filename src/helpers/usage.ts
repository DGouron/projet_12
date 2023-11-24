/***
 * @module helpers/usage
 * @desc This module provides helper functions for the usage of the application.
 * @since 1.0.0
 * @exports {Function} checkMockedRoute - Checks if the current route is a mocked route.
 * @exports {Function} getUserIDFromURL - Gets the user ID from the URL.
 */

export const checkMockedRoute = (): boolean => {
  return window.location.pathname.includes("mock");
};

export const getUserIDFromURL = (): number => {
  return parseInt(window.location.pathname.split("/").pop() || "");
};
