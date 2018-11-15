export const api = {}

;['get'].forEach(method => {
  api[method] = () => Promise.resolve({})
})
