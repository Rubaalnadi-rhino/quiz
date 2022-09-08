<template>
  <div class="container">
    <div class="title">
      <p>Quiz</p>
    </div>
    <div class="result">
      <p>{{ result }}</p>
    </div>
    <div class="grade">
      <p>Your Grade is {{ getGrade }} / {{ getLength }}</p>
    </div>
  </div>
</template>
  <script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  data() {
    return {
      result: ""
    };
  },
  computed: {
    ...mapGetters({
      getGrade: "quiz/getGrade",
      getLength: "quiz/getLength"
    }),
  },
  methods: {
    ...mapActions({
    }),
    checkGrade() {
      if (this.getGrade > 2 || this.getGrade === this.getLength) {
        this.result = "Great job! You pass"
      } else {
        this.result = "You fail"
      }
    }
  },
  created() {
    this.checkGrade()
  }
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
  
  .result ,  .grade {
    margin-top: 20px;
    display: flex;
    width: 786px;
    height: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 372;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #4C4C4C;
  }
  </style>
  