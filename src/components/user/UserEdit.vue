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
    <div class="information">
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
                <p>{{ self_information.age }}</p>
              </el-form-item>
              <el-form-item label="生日">
                <p>{{ self_information.birthday }}</p>
              </el-form-item>
              <el-form-item label="邮箱">
                <p>{{ self_information.email }}</p>
              </el-form-item>
              <el-form-item label="民族">
                <p>{{ self_information.nation }}</p>
              </el-form-item>
              <el-form-item label="性别">
                <p>{{ self_information.sex }}</p>
              </el-form-item>
              <el-form-item label="政治面貌">
                <p>{{ self_information.polite }}</p>
              </el-form-item>
            </el-form>
            <el-form label-position="left" size="medium" v-if="edit">
              <el-form-item label="年龄">
                <el-input-number placeholder="年龄" size="small" style="width: 80%" v-model="self_information.age">
                </el-input-number>
              </el-form-item>
              <el-form-item label="生日">
                <el-date-picker type="date" placeholder="选择日期" size="small" style="width: 80%" value-format="MM月dd日" v-model="self_information.birthday"></el-date-picker>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input size="small" style="width: 80%" v-model="self_information.email"></el-input>
              </el-form-item>
              <el-form-item label="民族">
                <el-input size="small" style="width: 80%" v-model="self_information.nation"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="self_information.sex">
                  <el-radio label="男" value="男"></el-radio>
                  <el-radio label="女" value="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="政治面貌">
                <el-input size="small" style="width: 60%" v-model="self_information.polite"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" icon="el-icon-edit" size="medium" @click="handleEdit" v-if="!edit">点击编辑</el-button>
            <el-button type="primary" icon="el-icon-edit" size="medium" @click="handleEdit" v-if="edit">确认编辑</el-button>
          </div>
        <el-divider></el-divider>
        <div class="done-course">
          <h3>已修课程</h3>
          <div class="course-content">
            <div class="course-name">计算机组成原理</div>
            <div class="course-name">电子工艺实践</div>
            <div class="course-name">大学物理</div>
            <div class="course-name">高等数学</div>
            <div class="course-name">数据结构</div>
            <div class="course-name">算法设计</div>
            <div class="course-name">高级语言程序设计</div>
            <div class="course-name">数理逻辑</div>
            <div class="course-name">马克思主义原理</div>
            <div class="course-name">概率论</div>
            <div class="course-name">大学语文</div>
            <div class="course-name">英语听说</div>
            <div class="course-name">线性代数</div>
          </div>
        </div>
      </div>
      <div class="main-information">
        <div class="progress">
          <h1>本学期进度</h1>
          <div class="progress-container">
            <div class="single-progress" v-for="(item, index) in progress_data" :key="index">
              <el-progress type="dashboard" :percentage="item.percentage" :color="colors"></el-progress>
              <h4>{{ item.name }}</h4>
            </div>
          </div>
        </div>
        <div class="notice-container">
          <el-tabs v-model="tab" tab-position="top">
            <el-tab-pane name="消息通告">
              <span slot="label"><i class="el-icon-s-promotion"></i>消息通告</span>
              <div class="notice-list">
                <el-card shadow="hover">
                  <span class="notice-body">
                      我校春季学期本科生选课从12月26开始
                    </span>
                  <span style="float: right">
                    2020-12-25
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    哈尔滨工业大学（深圳）2019-2020学年本科教学质量报告发布
                  </span>
                  <span style="float: right">
                    2020-12-25
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    2021年元旦放假期间本科生停课
                  </span>
                  <span style="float: right">
                    2020-12-21
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    12月12日四六级考试期间部分教学楼封楼
                  </span>
                  <span style="float: right">
                    2020-12-09
                  </span>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane name="近期事项">
              <span slot="label"><i class="el-icon-date"></i>近期事项</span>
              <div class="notice-list">
                <el-card shadow="hover">
                  <span class="notice-body">
                      大学英语四六级
                    </span>
                  <span style="float: right">
                    2020-12-24
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    编译原理结课考试
                  </span>
                  <span style="float: right">
                    2020-12-22
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    计算机网络实验2
                  </span>
                  <span style="float: right">
                    2020-12-21
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    操作系统实验验收
                  </span>
                  <span style="float: right">
                    2020-12-17
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    大学生体质测试
                  </span>
                  <span style="float: right">
                    2020-12-15
                  </span>
                </el-card>
                <el-card shadow="hover">
                  <span class="notice-body">
                    乒乓球考试
                  </span>
                  <span style="float: right">
                    2020-12-13
                  </span>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
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
      self_information: {
        age: 20,
        birthday: '8月30日',
        sex: "男",
        email: "1323794482@qq.com",
        polite: "共青团员",
        nation: "汉"
      },
      percentage: 10,
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      progress_data: [
        {
          name: "学期进度",
          percentage: 80,
        }, {
          name: "操作系统",
          percentage: 90,
        }, {
          name: "计算机网络",
          percentage: 100,
        }, {
          name: "软件工程",
          percentage: 60,
        }, {
          name: "信息安全概论",
          percentage: 50,
        }, {
          name: "人工智能",
          percentage: 70,
        }, {
          name: "马克思主义原理",
          percentage: 100,
        }
      ],
      tab: '消息通告'
    };
  },
  methods: {
    handleEdit() {
      this.edit = !this.edit;
    },
  },
  mounted() {
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
     overflow: auto;
   }

   .information {
     display: flex;
     width: 100%;
     margin-top: 20px;
   }

   .aside-information {
     width: 30%;
     height: 100%;
     margin: 0 0 0 30px;
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
    font-size: 15px;
    font-weight: lighter;
  }

  .aside-information > .el-divider {
    margin: 10px 0;
  }

  .aside-information .done-course h3 {
    font-size: 18px;
    font-weight: normal;
    color: rgb(96, 98, 102);
  }

  .aside-information .done-course .course-content {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .aside-information .done-course .course-content .course-name {
    display: inline-block;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 4px;
    margin-right: 10px;
    font-weight: lighter;
    font-size: 14px;
    user-select: none;
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

  .main-information {
    padding-left: 2%;
    margin-right: 30px;
    width: 65%;
    min-height: 400px;
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
  }

  .progress {
    white-space: nowrap;
    width: 100%;
    overflow: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .progress .el-progress {
    padding: 0 10px;
  }

  .progress .single-progress:first-child .el-progress {
    padding-left: 20px;
  }

  .progress .single-progress:last-child .el-progress {
    padding-right: 20px;
  }

  .progress h1 {
    padding: 15px 15px 15px 15px;
  }

  .progress .progress-container {
    display: flex;
  }
  .progress .progress-container .single-progress {
    text-align: center;
    padding-bottom: 10px;
  }

  .progress .progress-container .single-progress h4 {
    font-weight: lighter;
  }

  .notice-container {
    margin-top: 10px;
  }

  .notice-container .notice-list .el-card {
    margin: 0 10px 10px;
    user-select: none;
  }
</style>