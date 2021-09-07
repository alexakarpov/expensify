import moment from 'moment'

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  const filtered = expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMoment = moment(startDate)
    const endDateMoment = moment(endDate)
    const startDateMatch = startDate
      ? startDateMoment.isSameOrBefore(createdAtMoment)
      : true
    const endDateMatch = endDate
      ? endDateMoment.isSameOrAfter(createdAtMoment)
      : true
    const textMatch = text
      ? expense.description.toLowerCase().includes(text.toLowerCase())
      : true

    return startDateMatch && endDateMatch && textMatch
  })

  return filtered.sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
