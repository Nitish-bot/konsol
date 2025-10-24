import { usePrivy } from '@privy-io/expo'
import { SplashScreen } from 'expo-router'

export function AppSplashController() {
  const { isReady } = usePrivy()

  if (isReady) {
    SplashScreen.hideAsync()
  }

  return null
}
