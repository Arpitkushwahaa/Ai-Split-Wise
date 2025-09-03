// This configuration tells Convex to authenticate tokens from Clerk
export default {
  providers: [
    {
      // The domain should match the issuer domain from Clerk
      domain: "relaxed-wahoo-3.clerk.accounts.dev",
      applicationID: "convex",
    },
    {
      domain: "https://relaxed-wahoo-3.clerk.accounts.dev",
      applicationID: "convex",
    }
  ],
};
