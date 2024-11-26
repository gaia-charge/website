import { SENTRY_DSN } from "$env/dynamic/private";

export const variables = {
  sentry: {
    dsn: SENTRY_DSN,
  },
};
