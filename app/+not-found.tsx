import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Stack, useRouter } from 'expo-router'
import { View } from 'react-native'

export default function NotFoundScreen() {
  const router = useRouter()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Button onPressIn={() => router.replace('/')}>
        <Text>This screen does not exist.</Text>
      </Button>
    </View>
  )
}
