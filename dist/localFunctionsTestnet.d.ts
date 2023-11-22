import { Wallet } from 'ethers';
import type { LocalFunctionsTestnet, FunctionsContracts } from './types';
export declare const startLocalFunctionsTestnet: (admin: Wallet, simulationConfigPath?: string) => Promise<LocalFunctionsTestnet>;
export declare const deployFunctionsOracle: (deployer: Wallet) => Promise<FunctionsContracts>;
