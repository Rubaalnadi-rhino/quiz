<template>
  <div class="btn">
    <button v-if="getCurrentIndex != 0" @click="prev" class="btn-button">Previous</button>
    <button v-if="getCurrentIndex != null && getCurrentIndex != getLength - 1" @click="next" class="btn-button">
      next
    </button>
    <button v-if="getCurrentIndex === getLength - 1" @click="endQuiz" class="btn-button">
      End Exam
    </button>
  </div>
  <div class="container">
    <div class="title">
      <p>Quiz</p>
    </div>
    <div class="questions">
      <p class="questions-question">
        {{ getCurrentQuestion.q }}
      </p>
      <div class="questions-options">
        <div v-for="(q, index) in getCurrentQuestion?.option" :key="index" class="questions-options-content">
          <input type="radio" name="option" :value="q.correctAnswer" @click="getAnswer(index)" />
          <label>{{ q }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getCurrentQuestion: "quiz/getCurrentQuestion",
      getCurrentIndex: "quiz/getCurrentIndex",
      getLength: "quiz/getLength",
      getGrade: "quiz/getGrade",
    }),
  },
  methods: {
    ...mapActions({
      nextQuestion: "quiz/nextQuestion",
      perviousQuestion: "quiz/perviousQuestion",
      setGrade: "quiz/grade",
      check: "quiz/check",
    }),
    getAnswer(option: any) {
      if (option === this.getCurrentQuestion.correctAnswer) {
        this.setGrade(1), console.log(this.getGrade);
      }
      console.log(this.getGrade);
    },
    next() {
      this.nextQuestion();
    },
    prev() {
      this.perviousQuestion();
    },
    endQuiz() {
      this.$router.push({ name: "quiz-end" });
    },
  },
  created() {
    console.log(this.getCurrentIndex);
    console.log(this.getLength);
  },
});
</script>
<style scoped lang="scss">
p {
  font-size: 20px;
}

.title {
  display: flex;
  border-left: 1.7px solid #000;
  width: 264px;
  height: 23px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #4D4D4D;

  p {
    margin-left: 9px;
  }
}

.questions {
  border-radius: 12px;
  margin-top: 20px;

  &-question {
    display: flex;
    padding-top: 15px;
    padding-left: 15px;
    width: 375px;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4C4C4C;
    margin-bottom: 21px;
  }

  &-options {
    display: flex;
    flex-direction: column;
    justify-content: end;

    &-content {
      display: flex;
      margin-left: 29px;
      margin-bottom: 12px;
      align-items: baseline;

      label {
        color: #4C4C4C;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        margin-left: 5px;
        width: 35%;
      }
    }
  }
}

.btn {
  display: flex;
  justify-content: end;
  gap: 20px;
  border: none;
  &-button {
    border: none;
    border-radius: 9px;
    width: 10%;
    white-space: nowrap;
    color: #fff;
    background: #27BB89;
  }
}

input[type="radio"] {
  background-color: #ddd;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  height: 15px;
  margin-right: 15px;
  position: relative;
  width: 15px;
  -webkit-appearance: none;
}

input[type="radio"]:after {
  content: '';
  display: block;
  height: 7px;
  left: 4px;
  position: relative;
  top: 4px;
  width: 7px;
}

input[type="radio"]:checked:after {
  background-color: #27BB89;
  display: inline-block;
  height: 15px;
  margin-left: -3px;
  margin-top: -4px;
  position: absolute;
  width: 15px;
  border-radius: 3px;
}
</style>
