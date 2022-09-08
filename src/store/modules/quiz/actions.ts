export default {
    // get quiz from id 
    // i sent id and make filter or find to this quiz
    getCurrentQuiz(context: any,payload:any){        
        const id = payload
        const quiz = context.state.quiz
        const payloadQuiz = quiz.filter((element:any) => {
            if(element.id === +id ){
                return element   

            }
        }) 
        context.commit("getCurrentQuiz",payloadQuiz)
        console.log(payloadQuiz,"payload");
        const length = payloadQuiz[0].questions.length 
        context.commit("getLength",length)
    },
    startExam(context: any,payload:any){       
        context.dispatch("getIndex",{index:0})
    },
    // start with index 0 
    getIndex(context: any,payload:any){
        context.commit("getCurrentIndex",payload.index)
        context.dispatch("getQuestion",{index:payload.index})

    },
    // stat with CurrentIndex
    getQuestion(context: any,payload:any){
        console.log(context.state.currentQuiz[0].questions,"currentQuiz");
        const Question = context.state.currentQuiz[0].questions[payload.index]
        context.commit("getCurrentQuestion",Question)

    },
    // 

    // callCurrentIndex and take index +1 and send this index 
    // to Current Question 
    nextQuestion(context: any,payload:any){
        const i = context.state.currentQuizIndex +1
        context.dispatch("getIndex",{index:i})

    },
    // callCurrentIndex and take index -1 and send this index 
    // to Current Question 
    perviousQuestion(context: any,payload:any) {
        const i = context.state.currentQuizIndex -1
        context.dispatch("getIndex",{index:i})
    },
    grade(context: any,payload:any) {
      context.commit("setGrade",payload)
    },
    check(context: any,payload:any) {
        context.commit("setCheck",payload)
      }
};
