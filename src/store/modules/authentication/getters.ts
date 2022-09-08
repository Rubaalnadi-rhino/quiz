export default {
    login(state: any): Promise<any> {
        return state.id;
    },
    user(state : any): Promise<any> {
        return state.user;
    },
    quiz(state: any): Promise<any> {
        return state.quiz;
    },
};
