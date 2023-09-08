export default {
  api: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    endpoint: {
      CreateTodo: '/todo',
      GetTodos: '/todos',
      UpdateTodo: '/todo/:id'
    },
  },
};
