import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AddedBlackLists,
  Approval,
  OwnerChanged,
  RemovedBlackLists,
  Transfer
} from "../generated/Contract/Contract"
import { Transaction } from "../generated/schema"

export function handleAddedBlackLists(event: AddedBlackLists): void {}

export function handleApproval(event: Approval): void {
  

}

export function handleOwnerChanged(event: OwnerChanged): void {}

export function handleRemovedBlackLists(event: RemovedBlackLists): void {}

export function handleTransfer(event: Transfer): void {
  let entity = Transaction.load(event.transaction.hash.toHex())
  let contract = Contract.bind(event.address)
  

  if (entity == null) {
    entity = new Transaction(event.transaction.hash.toHex())
  }

  entity.from = event.transaction.from.toHex()
  entity.to = event.transaction.to.toHex()
  entity.value = event.transaction.value.toBigDecimal()
  entity.name = contract.name()

  entity.save()

  

}
