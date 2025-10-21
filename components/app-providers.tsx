import { AppTheme } from '@/components/app-theme'
import { SolanaProvider } from '@/components/solana/solana-provider'
import { PrivyProvider } from '@privy-io/expo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ClusterProvider } from './cluster/cluster-provider'

const queryClient = new QueryClient()

export function AppProviders({ children }: PropsWithChildren) {
  let appId = process.env.EXPO_PUBLIC_PRIVY_APP_ID
  let clientId = process.env.EXPO_PUBLIC_PRIVY_CLIENT_ID
  if (!appId || !clientId) {
    throw new Error('Missing Privy App ID or Client ID in environment variables')
  } else {
    console.log('Privy App ID and Client ID found', { appId, clientId })
  }
  
  return (
    <AppTheme>
      <QueryClientProvider client={queryClient}>
        <ClusterProvider>
          <SolanaProvider>
            <PrivyProvider
              appId={appId}
              clientId={clientId}
              config={{
                embedded: {
                  solana: {
                    createOnLogin: 'users-without-wallets',
                  },
                },
              }}
            >
              {children}
            </PrivyProvider>
          </SolanaProvider>
        </ClusterProvider>
      </QueryClientProvider>
    </AppTheme>
  )
}
