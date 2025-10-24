import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'Konsol',
  name: 'Konsol',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'nbot-konsol',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    package: 'com.nbot.konsol.app',
  },
  ios: {
    bundleIdentifier: 'com.nbot.konsol.app',
  },
  web: {
    favicon: './assets/images/favicon.png',
    output: 'static',
    bundler: 'metro',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#FFFFFF',
        dark: {
          backgroundColor: '#000000',
          image: './assets/images/splash-icon.png',
        },
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
      },
    ],
    'expo-web-browser',
    'expo-font',
    'expo-secure-store',
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {},
    eas: {},
  },
})
