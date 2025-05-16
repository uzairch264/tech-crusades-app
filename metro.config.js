const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require('path');
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});
module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs'],
    },
    watchFolders: [
      path.resolve(__dirname, 'src'),
    ],
  };
 
module.exports = withNativeWind(config, { input: "./global.css" });