
export default {
   Login(context: any, payload: any) {
    context.commit("setLogin",payload)
  },
  logOut(context: any, payload: any) {
    context.commit("setLogin",payload)
  },
};
