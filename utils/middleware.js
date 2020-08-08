export default myMiddleware = (store) => (next) => (action) => {
  if (action.type === '') {
    // TODO
  }
  return next(action);
};
