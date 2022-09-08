<template>
  <div class="container">
    <div class="title">
      <p>Quiz</p>
    </div>
    <div class="general">
      <p>General Information</p>
    </div>
    <div class="about">
      <p>
        Due to recent issues involving delivery of broken furniture, we ask that you immediately review your delivery
        and packing policies. If the next shipment arrives with broken or scratched pieces it will be time to terminate
        our contract. Please let us know how you plan to address this issue. Due to recent issues involving delivery of
        broken furniture, we ask that you immediately review your delivery and packing policies. If the next shipment
        arrives with broken or scratched pieces it will be time to terminate our contract. Please let us know how you
        plan to address this issue.
      </p>
    </div>
    <div v-for="q in currentQuiz" :key="q.id" class="info">
      <div class="info-content">
        <div class="info-content-details">
          <p>Name: {{ q.name }}</p>
        </div>
        <div class="info-content-details">
          <p>Number of question: {{ q.questions.length }}</p>
        </div>
        <div class="info-content-details">
          <p>Time Limit: {{ q.duration }}</p>
        </div>
      </div>
      <button @click="goToQuiz(q.id)" class="info-start">Start Exam</button>
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
      quiz: "quiz/quiz",
      currentQuiz: "quiz/getCurrentQuiz",
    }),
  },
  methods: {
    ...mapActions({
      getCurrentQuiz: "quiz/getCurrentQuiz",
      startExam: "quiz/startExam",
      check: "quiz/check",
    }),
    goToQuiz(id: number) {
      this.startExam();
      this.$router.push(`/quiz/${id}`);
      this.check(true);
    },
    getQuiz() {
      this.getCurrentQuiz(+this.$route.params.id);
    },
  },
  created() {
    this.getQuiz();
    console.log(this.currentQuiz);
  },
});
</script>
<style scoped lang="scss">
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

.general {
  width: 264px;
  height: 23px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4D4D4D;
  display: flex;
  margin-top: 28px;
}

.about {
  p {
    width: 786px;
    height: 102px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 372;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #4C4C4C;
    margin-top: 22px;
  }
}

.info {
  &-about {
    display: flex;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 22px;


    &-details {
      display: flex;
      width: 264px;
      height: 23px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #4D4D4D;
    }
  }

  &-start {
    width: 10%;
    border: none;
    border-radius: 9px;
    height: 35px;
    margin-top: 58px;
    position: absolute;
    right: 70px;
    color: #fff;
    background: #27BB89;
  }
}
</style>
