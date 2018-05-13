export function countTotalVisits (stats) {
  return stats.length
}

export function countTotalFriends (users) {
  return users.length
}

export function countUserVisits (users, stats) {
  const userVisits = []
  users.forEach(user => {
    const userVisit = {}
    userVisit.name = user.name
    userVisit.count = countMatch(user.user_id, stats)
    userVisits.push(userVisit)
  })
  return userVisits
}

function countMatch (targetId, stats) {
  let count = 0
  stats.forEach(visitRecode => {
    if (visitRecode.user_id === targetId) {
      count++
    }
  })
  return count
}
