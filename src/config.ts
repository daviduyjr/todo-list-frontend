export default {
  api: {
    baseUrl: import.meta.env.VITE_BASE_URL,
    endpoint: {
      login: '/login',
      CreateTodo: '/create-todo',
      GetTodos: '/',
      UpdateTodo: '/update-todo/:id'
    },
  },
};
