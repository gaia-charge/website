import { HUBSPOT_HUB_ID, SENTRY_DSN } from "$env/dynamic/private";

export const variables = {
  hubspot: {
    hubId: HUBSPOT_HUB_ID,
  },
  sentry: {
    dsn: SENTRY_DSN,
  },
};
