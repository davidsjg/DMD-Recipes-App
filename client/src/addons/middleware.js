export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  // console.log("state before: " storeAPI.getState())
  // let result = next(action);
  // console.log("next state", storeAPI.getState());
  // return result;
};
