<template>
  <div class="container">
    <div class="top">
      <div class="avatar-container">
        <div class="avatar-block">
          <el-avatar
              shape="square"
              :size="100"
              :fit="fit"
              src= 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'>
          </el-avatar>
        </div>
        <div class="brief-information">
          <h1>王小虎</h1>
          <span>WXH</span>
          <p><span>学号</span><span class="code">180110617</span></p>
        </div>
      </div>
      <div class="hello-world">
        <p v-for="(h, index) in hello.split('\n')" :key="index">
          {{h}}
        </p>
      </div>
    </div>
    <div class="aside-information">
      <div class="top-2">
        <el-form label-position="top" size="medium">
          <el-form-item label="年级">
            <p>大三</p>
          </el-form-item>
        </el-form>
        <el-divider direction="vertical"></el-divider>
        <el-form label-position="top" size="medium">
          <el-form-item label="院系">
            <p>计算机</p>
          </el-form-item>
        </el-form>
      </div>
      <el-divider></el-divider>
      <div class="self-information">
        <el-form label-position="left" size="medium" v-if="!edit">
          <el-form-item label="年龄">
            <p>20</p>
          </el-form-item>
          <el-form-item label="生日">
            <p>8月30日</p>
          </el-form-item>
          <el-form-item label="邮箱">
            <p>1323794482@qq.com</p>
          </el-form-item>
          <el-form-item label="民族">
            <p>汉族</p>
          </el-form-item>
          <el-form-item label="性别">
            <p>男性</p>
          </el-form-item>
          <el-form-item label="政治面貌">
            <p>群众</p>
          </el-form-item>
        </el-form>
        <el-form label-position="left" size="medium" v-if="edit">
          <el-form-item label="年龄">
            <el-select placeholder="年龄">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group>
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-edit" size="medium" @click="handleEdit">点击编辑</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      fit: 'cover ',
      hello: `
              _   _      _ _    __        __         _     _
              | | | | ___| | | __\\ \\      / /__  _ __| | __| |
              | |_| |/ _ \\ | |/ _ \\ \\ /\\ / / _ \\| '__| |/ _\` |
              |  _  |  __/ | | (_) \\ V  V / (_) | |  | | (_| |
              |_| |_|\\___|_|_|\\___/ \\_/\\_/ \\___/|_|  |_|\\__,_|
            `,
      edit: false,
    };
  },
  methods: {
    handleEdit() {
      this.edit = !this.edit;
    },
  },
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style>
  .container {
  }

  .top {
    display: flex;
  }

  .avatar-container {
    display: flex;
    width: 50%;
  }

  .avatar-container .avatar-block {
    margin-left: 30px;
  }

  .avatar-container .brief-information {
    margin-left: 20px;
    position: relative;
    height: 100px;
    width: 100%;
  }

  .avatar-container .brief-information h1 {
    font-size: 24px;
    font-weight: normal;
  }

  .avatar-container .brief-information span {
    font-weight: lighter;
    font-size: 13px;
    color: #B3C0D1;
  }

  .avatar-container .brief-information p span {
    font-size: 15px;
    color: #99a9bf;
  }

  .avatar-container .brief-information span.code {
    margin-left: 5px;
    font-weight: normal;
    color: #333333;
  }

  .avatar-container .brief-information p {
    position: absolute;
    bottom: 0;
  }

  .hello-world {
    /*width: 50%;*/
  }

   .hello-world p {
     margin: 0px auto;
     font-family: monospace;
     white-space: pre;
     user-select: none;
     font-size: 12px;
     line-height: 14px;
     max-height: 100px;
     overflow: auto;
   }

   .aside-information {
     width: 300px;
     margin: 20px 0 0 30px;
     padding: 20px 40px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   }

  .aside-information .top-2 {
    display: flex;
    justify-content: space-between;
  }

  .aside-information .top-2 .el-divider--vertical {
    height: 65px;
  }

  .aside-information .el-form-item {
    margin: 0;
  }

  .aside-information .el-form-item .el-form-item__label {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .aside-information .el-form-item p {
    font-size: 18px;
    font-weight: lighter;
  }

  .aside-information > .el-divider {
    margin: 10px 0;
  }

  .self-information .el-form-item .el-form-item__label {
    margin: 0 10px 0 0;
    font-size: 15px;
  }

  .self-information .el-form-item .el-form-item__content {
    font-size: 15px;
  }

  .self-information .el-button {
    width: 100%;
    margin-top: 10px;
  }
</style>