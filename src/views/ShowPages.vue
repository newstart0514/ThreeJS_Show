<template>
  <router-view></router-view>
  <n-button type="primary" class="nextBtn">
    next&nbsp;<n-icon size="20"><ArrowForwardCircleOutline/></n-icon>
  </n-button>
  <n-button type="info" class="lastBtn">
    <n-icon size="20"><ArrowBackCircleOutline/></n-icon>&nbsp;previous
  </n-button>
</template>

<script lang="ts">
import {ArrowForwardCircleOutline, ArrowBackCircleOutline } from '@vicons/ionicons5'
  export default {
    name: 'ShowPages',
    components: {
      ArrowForwardCircleOutline,
      ArrowBackCircleOutline
    }
  }
</script>

<style scoped>
.nextBtn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.lastBtn {
  position: fixed;
  left: 30px;
  bottom: 30px;
}
</style>
