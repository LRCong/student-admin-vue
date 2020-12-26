<template>
  <div class="fee-container">
    <div class="top">
      <el-progress type="circle" :percentage="25"></el-progress>
    </div>
    <div class="top-anime">
      <div class="anime-container">
        费用缴纳
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Fee"
}
</script>

<style scoped>
  .top-anime {
    position: relative;
    height: 200px;
  }

  .top-anime .anime-container {
    position: absolute;
    user-select: none;
    background-color: #67C23A;
    height: 60px;
    width: 100px;
    font-weight: normal;
    font: 15px '微软雅黑';
    text-align: center;
    line-height: 60px;
    animation: progress 2s;
    transition: 1s;
    border-radius: 10px;
  }

  .top-anime .anime-container:hover {
    transform: rotate(360deg);
    background-color: #409EFF;
  }

  @keyframes progress {
    0% {
      transform: rotate(0deg);
      left: 0;
    }
    50% {
      transform: rotate(360deg);
      left: 400px;
      background-color: #409EFF;
    }
    100% {
      transform: rotate(0deg);
      left: 0;
    }
  }

</style>