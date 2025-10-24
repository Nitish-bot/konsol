import { clusterApiUrl } from '@solana/web3.js'

export class AppConfig {
  static name = 'konsol'
  static uri = 'https://nbot-konsol.com'
  static clusters = [
    {
      id: 'solana:devnet',
      name: 'Devnet',
      endpoint: clusterApiUrl('devnet'),
      network: 'api.devnet.solana',
    },
  ]
}
