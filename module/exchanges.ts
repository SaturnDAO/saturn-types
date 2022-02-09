import type { Blockchains, ContractName, ExchangeSetting } from '.'
import { Mimas, Saturn } from './abis'

export const etc: ExchangeSetting[] = [
  {
    contractAddress: '0x5ef83ab1155786f146c5a00722bef7ab683dc0de',
    startBlock: 9742381,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Atlas',
    blockchain: 'ETC',
    description: undefined,
    abi: Saturn,
    topics: {
      newOrder: '0x9684ab37f360879637d39ea3a41f58c0705a15f80d518ec92bd1c7383ef8a61a',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0x01f5d7c359dba416997ea6c723ea4663e9ad524f956ed8bb3b5234e6475a7285',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
  {
    contractAddress: '0x3ec00ee8a4fbe81e7eea328029ce490654e8e11a',
    startBlock: 6929592,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Enceladus',
    blockchain: 'ETC',
    description: undefined,
    abi: Mimas,
    topics: {
      newOrder: '0x506cb18801692179462f2b7b4b6f10bea763984f94a1f1f3cd858e3a645b2329',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0xe6f814da7244d1ae6c61b54b5684858ba39cad7b9a91884be10060664987d754',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
  {
    contractAddress: '0xa4632e7e8c8559ce094394adea72efc4cb3d2c87',
    startBlock: 6735073,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Mimas',
    blockchain: 'ETC',
    description: undefined,
    abi: Mimas,
    topics: {
      newOrder: '0x506cb18801692179462f2b7b4b6f10bea763984f94a1f1f3cd858e3a645b2329',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0xe6f814da7244d1ae6c61b54b5684858ba39cad7b9a91884be10060664987d754',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
]

export const eth: ExchangeSetting[] = [
  {
    contractAddress: '0xaa5bbd5a177a588b9f213505ca3740b444dbd586',
    startBlock: 9443707,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Atlas',
    blockchain: 'ETH',
    description: undefined,
    abi: Saturn,
    topics: {
      newOrder: '0x9684ab37f360879637d39ea3a41f58c0705a15f80d518ec92bd1c7383ef8a61a',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0x01f5d7c359dba416997ea6c723ea4663e9ad524f956ed8bb3b5234e6475a7285',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
  {
    contractAddress: '0x1f0d1de1558582ad6f13763f477119a1455502af',
    startBlock: 9084062,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Enceladus',
    blockchain: 'ETH',
    description: undefined,
    abi: Mimas,
    topics: {
      newOrder: '0x506cb18801692179462f2b7b4b6f10bea763984f94a1f1f3cd858e3a645b2329',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0xe6f814da7244d1ae6c61b54b5684858ba39cad7b9a91884be10060664987d754',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
  {
    contractAddress: '0x13f64609bf1ef46f6515f8cd3115433a93a00dc6',
    startBlock: 9084062,
    deployHash: undefined,
    deployer: undefined,
    delployTime: undefined,
    name: 'Mimas',
    blockchain: 'ETH',
    description: undefined,
    abi: Saturn,
    topics: {
      newOrder: '0x506cb18801692179462f2b7b4b6f10bea763984f94a1f1f3cd858e3a645b2329',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0xe6f814da7244d1ae6c61b54b5684858ba39cad7b9a91884be10060664987d754',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  },
]

export const aoa: ExchangeSetting[] = []

// Testnets
export const phx: ExchangeSetting[] = []
export const dao: ExchangeSetting[] = []

export const aoat: ExchangeSetting[] = [
  {
    contractAddress: '0xf656f14c2e2aa3150953a5e43b9ce572f85afbc2',
    startBlock: 69530485,
    name: 'Atlas',
    blockchain: 'AOAT',
    description: 'Deployed on AOA Testnet, Saturn Token: 0x0aB58249a2e7791D02cA7708A2E917CDa02e961d, treasury/admin: 0x25A2949C00Ace12d41c107fF201a28ee995EBBd8',
    topics: {
      newOrder: '0x9684ab37f360879637d39ea3a41f58c0705a15f80d518ec92bd1c7383ef8a61a',
      orderCancelled: '0xaa2a006d186dc89a3d6851834c85d16226329ac40bcad6531a5756a38ed1c90f',
      trade: '0x01f5d7c359dba416997ea6c723ea4663e9ad524f956ed8bb3b5234e6475a7285',
      mined: '0x5a9ec13c12ca9563a7b3108125f74c57ed388bb313394ea50f7e4a71b01497c2'
    }
  }
]

export const ropsten: ExchangeSetting[] = []

export default {
  ETC: etc,
  ETH: eth,
  AOA: aoa,

  PHX: phx,
  DAO: dao,
  AOAT: aoat,
  ROPSTEN: ropsten,

  get: function (blockchain: Blockchains, contractName?: ContractName): ExchangeSetting[] {
    let dataset: ExchangeSetting[] = this[blockchain] || []
    if (contractName) dataset = dataset
      .filter(x => x.name.toLowerCase() === contractName.toLowerCase())
  
    return dataset.sort((a, b) => a.blocknumber - b.blocknumber)
  },
  latest: function (blockchain: Blockchains): ExchangeSetting {
    return this.get(blockchain)[0]
  },
  getAbi: function (exchangeAddress: string, blockchain?: Blockchains) {
    const search = blockchain ? this[blockchain] : [
      ...etc, ...eth, ...aoa, ...phx, ...dao, ...aoat, ...ropsten
    ]
    
    return search
      .filter(e => e.contractAddress === exchangeAddress.toLowerCase()).pop()
  }
}