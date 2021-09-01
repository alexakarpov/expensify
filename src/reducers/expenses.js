const expensesDefaultState = []

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((ex) =>
        ex.id === action.id ? { ...ex, ...action.updates } : ex
      )
    default:
      return state
  }
}
