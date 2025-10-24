import { UiIconSymbol } from '@/components/ui/ui-icon-symbol'
import { AuthBoundary } from '@privy-io/expo'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <AuthBoundary loading={<></>} error={<>Error</>} unauthenticated={<></>}>
      <Tabs screenOptions={{ headerShown: false }}>
        {/* The index redirects to the account screen */}
        <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: 'none' } }} />
        <Tabs.Screen
          name="games"
          options={{
            title: 'Games',
            tabBarIcon: ({ color }) => <UiIconSymbol size={28} name="wallet.pass.fill" color={color} />,
          }}
        />
      </Tabs>
    </AuthBoundary>
  )
}
