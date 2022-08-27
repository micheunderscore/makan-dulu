const webhooks = {
  APP_UNINSTALLED: {
    path: "/api/webhooks",
    // webhookHandler: async (topic, shop, body) => {
    webhookHandler: async () => {
      console.log("App uninstalled");
    },
  },
};

export default webhooks;
