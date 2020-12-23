<template>
  <div id="app">
    <el-container>
      <el-aside :width="!isCollapsed ? '200px' : '63px'">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapsed" default-active="1-2-2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">学习管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">课程</template>
              <el-menu-item index="1-1-1" @click="$router.push('/study/course/select')">选课</el-menu-item>
              <el-menu-item index="1-1-2">课表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">进度</template>
              <el-menu-item index="1-2-1">学分查询</el-menu-item>
              <el-menu-item index="1-2-2" @click="$router.push('/study/situation')">总体情况</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">信息查询</span>
            </template>
            <el-menu-item-group>
              <template slot="title">校园</template>
              <el-menu-item index="2-1-1">校历</el-menu-item>
              <el-menu-item index="2-1-2">空教室查询</el-menu-item>
              <el-menu-item index="2-1-3">日程表</el-menu-item>
              <el-menu-item index="2-1-4">校园动态</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">竞赛项目</template>
              <el-menu-item index="2-2-1">竞赛安排</el-menu-item>
              <el-menu-item index="2-2-2">竞赛动态</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">校园服务</span>
            </template>
            <el-menu-item-group>
              <template slot="title">费用缴纳</template>
              <el-submenu index="3-1-1">
                <template slot="title">学习相关</template>
                <el-menu-item index="3-1-1-1">学费缴纳</el-menu-item>
                <el-menu-item index="3-1-1-2">书本购买</el-menu-item>
              </el-submenu>
              <el-submenu index="3-1-2">
                <template slot="title">生活相关</template>
                <el-menu-item index="3-1-2-1">住宿费</el-menu-item>
                <el-menu-item index="3-1-2-2">水电费</el-menu-item>
                <el-menu-item index="3-1-2-3">饭卡充值</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">项目相关</template>
              <el-menu-item index="3-2-1">立项申请</el-menu-item>
              <el-menu-item index="3-2-2">经费报销</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>通知</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
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

.container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
}

</style>
