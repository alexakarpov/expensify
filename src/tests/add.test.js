const add = (a, b) => a + b

const greet = (name = 'Anonymous') => `Hello ${name}`

test('add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('greetings', () => {
  const hello = greet('Alex')
  expect(hello).toBe('Hello Alex')
})

test('greet anon', () => {
  const hello = greet()
  expect(hello).toBe('Hello Anonymous')
})
