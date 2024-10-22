<template>
  <div class="main-page">
    <div class="title-area">
      <h1 class="title">Welcome to Game</h1>
      <img
        src="../assets/question.png"
        style="width: 45px; height: 45px; margin: auto; cursor: pointer"
        @click="gameInfo()"
      />
    </div>

    <div style="margin-bottom: 3%">
      <img src="../assets/memory.png" class="game-icon" />
    </div>
    <div>
      <button class="start-button">Start Game</button>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    function gameInfo() {
      router.push({ name: "game-info" });
    }

    return {
      gameInfo,
    };
  },
};
</script>
<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: #ffbd73 1px solid;
  width: 50%;
  height: 80vh;
  margin: auto;
}

.title-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 35%;
}

.title {
  color: #ff9d3d;
  margin-left: 10%;
}

.question-icon {
  width: 45px;
  height: 45px;
}

.icon-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-icon-wrapper {
  margin-bottom: 20px;
}

.game-icon {
  width: 100px;
  height: 100px;
}

.start-button {
  border-radius: 20px;
  border: transparent solid 2px;
  background-color: #c4e1f6;
  color: #ff9d3d;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.start-button:hover {
  background-color: #ff9d3d;
  color: #c4e1f6;
}
</style>
