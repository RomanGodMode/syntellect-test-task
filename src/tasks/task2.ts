export const getHandshakeCount = (totalPeopleCount: number) => {
  let peopleCount = 1
  let handshakeCount = 0

  for (let i = 1; i < totalPeopleCount; i++) {
    handshakeCount += peopleCount
    peopleCount++
  }

  return handshakeCount
}

console.log(getHandshakeCount(1))
console.log(getHandshakeCount(2))
console.log(getHandshakeCount(3))
console.log(getHandshakeCount(10))

