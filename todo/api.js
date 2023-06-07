// const baseUrl = ' http://localhost:4001'

// export const getAllTodos = async (): Promise<ITask[]> => {
//   const res = await fetch(`${baseUrl}/tasks`)
//   const todos = await res.json()
//   return todos
// }
const baseUrl = 'http://localhost:4001'

export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}/tasks`)
  const todos = await res.json()
  return todos
}
