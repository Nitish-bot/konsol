import { AppTheme } from '@/components/app-theme'
import { SolanaProvider } from '@/components/solana/solana-provider'
import { PrivyProvider } from '@privy-io/expo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ClusterProvider } from './cluster/cluster-provider'

const queryClient = new QueryClient()

export function AppProviders({ children }: PropsWithChildren) {
  let appId = "cmgxt5omw0530l40brsxt2tq1"
  let clientId = "client-WY6ReBEPXKyU4taK7W9yrXh5HUetRv5jw39o2tteGdCti"
  
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
