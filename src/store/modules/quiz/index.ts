import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      quiz: [
        {
          id: 1,
          name: "Quiz1",
          duration: 30 + "s",
          questions: [
            {
              q: "Which paragraph works better in a business setting?",
              option: [
                "Your merchandise arrived in a sorry state, forcing us to do many repairs. Please fix this and let us know.",
                "Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
              ],
              correctAnswer: 0,
            },
            {
              q: "this question does not belong here because it?",
              option: [
                "Your merchandise arrived in a sorry state, forcing us to do many repairs. Please fix this and let us know.",
                "Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                "If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
              ],
              correctAnswer: 1,
            },
            {
                q: "this question does not belong here because it is??",
                option: [
                  "Your merchandise arrived in a sorry state, forcing us to do many repairs. Please fix this and let us know.",
                  "Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                  "If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                ],
                correctAnswer: 2,
              },
              {
                q: "this question does not belong here because it.",
                option: [
                  "Your merchandise arrived in a sorry state, forcing us to do many repairs. Please fix this and let us know.",
                  "Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                  "If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                ],
                correctAnswer: 0,
              },
              {
                q: "this question does not belong here because it is!",
                option: [
                  "Your merchandise arrived in a sorry state, forcing us to do many repairs. Please fix this and let us know.",
                  "Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                  "If the next shipment arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you plan to address this issue.",
                ],
                correctAnswer: 2,
              },
          ],
        },
        {
          id: 2,
          name: "Quiz2",
          duration: 30 + "s",
          questions: [
            {
              q: "What the capital of jordan test2 ?",
              option: ["Amman", "Irbid", "Ajloun"],
              correctAnswer: "Amman",
            },
            {
              q: "What the capital of jordan ruba?",
              option: ["Amman", "Irbid", "Ajloun"],
              correctAnswer: "Ajloun",
            },
            {
              q: "What the capital of jordan hi?",
              option: ["Amman", "Irbid", "Ajloun"],
              correctAnswer: "Ajloun",
            },
            {
              q: "What the capital of jordan yes?",
              option: ["Amman", "Irbid", "Ajloun"],
              correctAnswer: "Irbid",
            },
            {
              q: "What the capital of jordan ok?",
              option: ["Amman", "Irbid", "Ajloun"],
              correctAnswer: "Amman",
            },
          ],
        },
      ],
      currentQuiz: null,
      currentQuestion: null,
      currentQuizIndex: null,
      length: null,
      grade: 0,
      check: false,
    };
  },
  mutations,
  actions,
  getters,
};
