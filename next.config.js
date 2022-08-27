module.exports = {
  env: {
    SHOP: process.env.SHOP,
    API_KEY: process.env.API_KEY,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    SCOPES: process.env.SCOPES,
    HOST_NAME: process.env.HOST_NAME,
    HOST_SCHEME: process.env.HOST_SCHEME,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};
