<template>
  <div class="container">
    <p class="title">Quiz list:</p>
    <div v-for="q in quiz" :key="q.id" class="quiz">
      <p @click="goToQuizInfo(q.id)" class="quiz-list">{{ q.name }}</p>
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
    }),
  },
  methods: {
    goToQuizInfo(id: number) {
      this.$router.push(`/quiz/info/${id}`);
    },
  },
});
</script>
<style scoped lang="scss">
  .title{
    display: flex;
  }
.quiz {
  width: 100%;
  height: 40px;
  background: #ebebeb;
  border-radius: 9px;
  margin-bottom: 20px;
  cursor: pointer;
  &-list {
    padding: 10px;
  }
}
</style>
