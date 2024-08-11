export const fetchRandomUsers = async () => {
  const response = await fetch('http://localhost:3004/users')
  const usersData = await response.json()

  const randomUsers = []
  const totalUsers = usersData.length
  const selectedIds = new Set()

  while (randomUsers.length < 3 && selectedIds.size < totalUsers) {
    const randomIndex = Math.floor(Math.random() * totalUsers)
    const randomUser = usersData[randomIndex]

    if (!selectedIds.has(randomUser.id)) {
      randomUsers.push(randomUser)
      selectedIds.add(randomUser.id)
    }
  }

  return randomUsers
}
