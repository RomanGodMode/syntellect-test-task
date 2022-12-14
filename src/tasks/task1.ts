export const getDaysCount = () => {
  const GOAL = 100
  const UP_PER_DAY = 50
  const DOWN_AFTER_DAY = 30

  let daysCount = 0
  let passedDistance = 0
  while (true) {
    daysCount++
    passedDistance += UP_PER_DAY

    if (passedDistance >= GOAL)
      return daysCount

    passedDistance -= DOWN_AFTER_DAY
  }
}

console.log(getDaysCount())
