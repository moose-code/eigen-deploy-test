/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  EigenPodManager,
  EigenPodManager_BeaconChainETHDeposited,
  EigenPodManager_BeaconChainETHWithdrawalCompleted,
  EigenPodManager_Initialized,
  EigenPodManager_NewTotalShares,
  EigenPodManager_OwnershipTransferred,
  EigenPodManager_Paused,
  EigenPodManager_PauserRegistrySet,
  EigenPodManager_PodDeployed,
  EigenPodManager_PodSharesUpdated,
  EigenPodManager_Unpaused,
} from "generated";

EigenPodManager.BeaconChainETHDeposited.handler(async ({ event, context }) => {
  const entity: EigenPodManager_BeaconChainETHDeposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    podOwner: event.params.podOwner,
    amount: event.params.amount,
  };

  context.EigenPodManager_BeaconChainETHDeposited.set(entity);
});

EigenPodManager.BeaconChainETHWithdrawalCompleted.handler(async ({ event, context }) => {
  const entity: EigenPodManager_BeaconChainETHWithdrawalCompleted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    podOwner: event.params.podOwner,
    shares: event.params.shares,
    nonce: event.params.nonce,
    delegatedAddress: event.params.delegatedAddress,
    withdrawer: event.params.withdrawer,
    withdrawalRoot: event.params.withdrawalRoot,
  };

  context.EigenPodManager_BeaconChainETHWithdrawalCompleted.set(entity);
});

EigenPodManager.Initialized.handler(async ({ event, context }) => {
  const entity: EigenPodManager_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.EigenPodManager_Initialized.set(entity);
});

EigenPodManager.NewTotalShares.handler(async ({ event, context }) => {
  const entity: EigenPodManager_NewTotalShares = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    podOwner: event.params.podOwner,
    newTotalShares: event.params.newTotalShares,
  };

  context.EigenPodManager_NewTotalShares.set(entity);
});

EigenPodManager.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: EigenPodManager_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.EigenPodManager_OwnershipTransferred.set(entity);
});

EigenPodManager.Paused.handler(async ({ event, context }) => {
  const entity: EigenPodManager_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    newPausedStatus: event.params.newPausedStatus,
  };

  context.EigenPodManager_Paused.set(entity);
});

EigenPodManager.PauserRegistrySet.handler(async ({ event, context }) => {
  const entity: EigenPodManager_PauserRegistrySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pauserRegistry: event.params.pauserRegistry,
    newPauserRegistry: event.params.newPauserRegistry,
  };

  context.EigenPodManager_PauserRegistrySet.set(entity);
});

EigenPodManager.PodDeployed.handler(async ({ event, context }) => {
  const entity: EigenPodManager_PodDeployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    eigenPod: event.params.eigenPod,
    podOwner: event.params.podOwner,
  };

  context.EigenPodManager_PodDeployed.set(entity);
});

EigenPodManager.PodSharesUpdated.handler(async ({ event, context }) => {
  const entity: EigenPodManager_PodSharesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    podOwner: event.params.podOwner,
    sharesDelta: event.params.sharesDelta,
  };

  context.EigenPodManager_PodSharesUpdated.set(entity);
});

EigenPodManager.Unpaused.handler(async ({ event, context }) => {
  const entity: EigenPodManager_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    newPausedStatus: event.params.newPausedStatus,
  };

  context.EigenPodManager_Unpaused.set(entity);
});
