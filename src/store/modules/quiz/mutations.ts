export default {
    getCurrentQuiz(state:any,payload:any){
        state.currentQuiz =payload
    },
    getCurrentQuestion(state:any,payload:any){
        state.currentQuestion =payload

    },
    getCurrentIndex(state:any,payload:any){        
        state.currentQuizIndex =payload
    },
    getLength(state:any,payload:any){        
        state.length =payload

    },
    setGrade(state:any,payload:any){
        state.grade += payload
    },
    setCheck(state:any,payload:any){
        state.check = payload
    },

};
