import assert from "assert";
import { 
  TestHelpers,
  EigenPodManager_BeaconChainETHDeposited
} from "generated";
const { MockDb, EigenPodManager } = TestHelpers;

describe("EigenPodManager contract BeaconChainETHDeposited event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for EigenPodManager contract BeaconChainETHDeposited event
  const event = EigenPodManager.BeaconChainETHDeposited.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("EigenPodManager_BeaconChainETHDeposited is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await EigenPodManager.BeaconChainETHDeposited.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualEigenPodManagerBeaconChainETHDeposited = mockDbUpdated.entities.EigenPodManager_BeaconChainETHDeposited.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedEigenPodManagerBeaconChainETHDeposited: EigenPodManager_BeaconChainETHDeposited = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      podOwner: event.params.podOwner,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEigenPodManagerBeaconChainETHDeposited, expectedEigenPodManagerBeaconChainETHDeposited, "Actual EigenPodManagerBeaconChainETHDeposited should be the same as the expectedEigenPodManagerBeaconChainETHDeposited");
  });
});
