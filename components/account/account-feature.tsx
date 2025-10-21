import { AccountUiBalance } from '@/components/account/account-ui-balance'
import { AccountUiTokenAccounts } from '@/components/account/account-ui-token-accounts'
import { useGetBalanceInvalidate } from '@/components/account/use-get-balance'
import { useGetTokenAccountsInvalidate } from '@/components/account/use-get-token-accounts'
import { AppPage } from '@/components/app-page'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/app-view'
import { useWalletUi } from '@/components/solana/use-wallet-ui'
import { WalletUiConnectButton } from '@/components/solana/wallet-ui-dropdown'
import { ellipsify } from '@/utils/ellipsify'
import { PublicKey } from '@solana/web3.js'
import { useCallback, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { useAppTheme } from '../app-theme'
import { AccountUiButtons } from './account-ui-buttons'

export function AccountFeature() {
  const { account } = useWalletUi()
  const { spacing } = useAppTheme()
  const [refreshing, setRefreshing] = useState(false)
  const invalidateBalance = useGetBalanceInvalidate({ address: account?.publicKey as PublicKey })
  const invalidateTokenAccounts = useGetTokenAccountsInvalidate({ address: account?.publicKey as PublicKey })
  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await Promise.all([invalidateBalance(), invalidateTokenAccounts()])
    setRefreshing(false)
  }, [invalidateBalance, invalidateTokenAccounts])

  return (
    <AppPage>
      {account ? (
        <ScrollView
          contentContainerStyle={{}}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />}
        >
          <AppView style={{ alignItems: 'center', gap: 4 }}>
            <AccountUiBalance address={account.publicKey} />
            <AppText style={{ opacity: 0.7 }}>hoes be mad fr{ellipsify(account.publicKey.toString(), 8)}</AppText>
          </AppView>
          <AppView style={{ marginTop: spacing.md, alignItems: 'center' }}>
            <AccountUiButtons />
          </AppView>
          <AppView style={{ marginTop: spacing.md, alignItems: 'center' }}>
            <AccountUiTokenAccounts address={account.publicKey} />
          </AppView>
        </ScrollView>
      ) : (
        <AppView style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <AppText variant="titleMedium">Connect your wallet.</AppText>
          <WalletUiConnectButton />
        </AppView>
      )}
    </AppPage>
  )
}
