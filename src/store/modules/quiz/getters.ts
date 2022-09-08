export default {
    quiz(state: any): Promise<any> {
        return state.quiz;
    },
    getCurrentQuiz(state: any): Promise<any> {
        return state.currentQuiz;
    },
    // currentQuizIndex
    getCurrentIndex(state: any): Promise<any> {
        return state.currentQuizIndex;
    },
    getCurrentQuestion(state: any): Promise<any> {
        return state.currentQuestion;
    },
    getLength(state : any){
        return state.length;
    },
    getGrade(state : any){
        return state.grade;
    },
    getCheck(state : any){
        return state.check;
    }
};
