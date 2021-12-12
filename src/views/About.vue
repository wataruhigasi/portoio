<template>
  <transition v-show="show">
    <div class="vertical kanji">
      <div>
        <p>渡邉 歩</p>
        <p class="alpha">わたなべ あゆむ</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.kanji {
  display: flex;
  margin-top: 20%;
  width: 100%;
  align-items: center;
  font-size: 48px;
}
.alpha {
  font-size: 24px;
}
</style>