<template>
  <div class="container">
    <span>用户信息</span>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style scoped>
</style>