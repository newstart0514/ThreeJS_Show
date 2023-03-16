<template>
  <div class="homeInfo">
    <div class="infoBox">
      <n-avatar
          round
          :size="128"
          src="https://avatars.githubusercontent.com/u/90978564?v=4"
      />
    </div>
    <div class="infoText">欢迎来到幽离的奇妙之旅</div>
    <n-button ghost type="success" strong round class="homeBtn" @click="goToShowPages">开始探索</n-button>
  </div>
  <homeBackground/>
</template>

<script lang="js">
import homeBackground from "@/components/homeBackground.vue";

export default {
  name: "Home",
  components: {homeBackground},
  methods: {
    goToShowPages() {
      this.$router.replace('/show')
    }
  }
}
</script>

<style scoped>
.infoBox {
  width: 128px;
  height: 128px;
  z-index: 2;
}
.homeInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 20%;
}
.infoText {
  width: 275px;
  height: 25px;
  font-size: 25px;
  z-index: 2;
  color: white;
  margin-top: 2%;
}
.homeBtn {
  z-index: 2;
  position: relative;
  top: 34%;
}
</style>