export default (expenses, { text, endDate, startDate, sortBy }) => {
  return expenses
    .filter((ex) => {
      const startDateMatch =
        typeof startDate !== 'number' || ex.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || ex.createdAt <= endDate
      const textMatch = ex.description
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      } else return 0
    })
}
