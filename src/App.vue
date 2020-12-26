<template>
  <div id="app">
    <el-container>
      <el-aside :width="!isCollapsed ? '200px' : '63px'">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapsed" :router="true">
          <el-menu-item index="/study/situation">
              <i class="el-icon-collection"></i>
              <span slot="title">总体情况</span>
          </el-menu-item>
          <el-menu-item index="/study/course/select">
              <i class="el-icon-tickets"></i>
              <span slot="title">选课</span>
          </el-menu-item>
          <el-menu-item index="/user/17">
              <i class="el-icon-user"></i>
              <span slot="title">个人信息</span>
          </el-menu-item>
<!--          <el-menu-item index="/user/fee">-->
<!--            <i class="el-icon-shopping-bag-1"></i>-->
<!--            <span slot="title">费用缴纳</span>-->
<!--          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 15px">
          <span class="collapse-button">
            <el-button
                type="success"
                :icon="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                circle
                @click="reverseCollapse">
            </el-button>
          </span>
          <el-dropdown>
            <i class="el-icon-user" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <div class="main-container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    reverseCollapse: function () {
      this.isCollapsed = !this.isCollapsed;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.el-container {
  width: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-header span.collapse-button {
  float: left;
  transform: translateY(calc(30px - 50%));
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-aside {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

.el-aside, .el-menu {
  color: #333;
  /*min-height: 100vh;*/
  transition: 0.3s;
}

.main-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
}

</style>
