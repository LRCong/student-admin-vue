<template>
  <div class="container">
    <div class="chart-container">
      <div id="credit-form"></div>
      <div id="credit-target">
        <el-form label-position="top" label-width="80px" size="mini">
          <el-form-item v-for="(item,index) in percentages" :label="item.name" :key="index">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="item.value" :color="colors"></el-progress>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="information-container">
      <div class="information-content">
        <div v-if="!fold">
          <h1>课程事项：</h1>
          <span>哈尔滨工业大学（深圳）实行全面选课制。学生必须按规定时间在教学管理系统中完成各类课程的选课任务，方能参加课程的学习和考核。未经选课直接参加课程学习和考核的学生，其相应课程的考试成绩无效。</span>
        </div>
        <el-form label-position="top" v-if="fold">
          <el-form-item v-for="(value, name, index) in information" :key="index" :label="name">
            <p>{{ value }}</p>
          </el-form-item>
        </el-form>
      </div>
      <div class="fold-button">
        <el-divider>
          <el-button
            type="primary"
            :icon="fold ? 'el-icon-minus' : 'el-icon-plus'"
            circle
            @click="reverseFold"></el-button>
        </el-divider>
      </div>
    </div>
    <div class="system-information">
      <div class="tree-choose">
        <el-tree :data="systemData" @node-click="handleClick"></el-tree>
        <el-divider direction="vertical"></el-divider>
      </div>
      <div class="course-content">
        <el-table
            :data="courseDisplay"
            :height="'100%'"
            style="width: 100%;">
          <el-table-column
              v-for="(value, name, index) in systemCourse[0]"
              :fixed="name === '课程名称'"
              :prop="name"
              :label="name === 'group' ? '模块' : name"
              :key="index"
              width="160">
          </el-table-column>
        </el-table>

      </div>
    </div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts');
require('echarts-liquidfill');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');

export default {
  name: "GeneralSituation",
  data: function () {
    return {
      creditForm: {},
      creditTarget: {},
      percentages: [],
      colors: [
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#5cb87a', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#6f7ad3', percentage: 100}
      ],
      information: {},
      fold: false,
      systemData: [],
      systemCourse: [],
      currentNode: ''
    };
  },
  computed: {
    courseDisplay() {
      if (this.currentNode === "领域课程" || this.currentNode === "方向课程")
        return this.systemCourse.filter(value =>
            value.group.substr(value.group.length - 2) === this.currentNode.substr(0, 2))
      return this.systemCourse.filter(value => value.group === this.currentNode);
    }
  },
  methods: {
    getData() {
      fetch("./data/situation.json")
        .then(value => value.json())
        .then(value => {
          this.creditForm = value.data.creditForm;
          this.creditTarget = value.data.creditTarget;
          this.information = value.data.information;
          this.systemData = value.data.system;
          this.systemCourse = value.data.systemCourse;
        })
        .then(() => {
          this.drawCreditFrom();
          this.drawCreditTarget();
        });
    },
    drawCreditFrom() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('credit-form'));
      // 绘制图表
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: this.creditForm.x
        },
        series: [
          {
            name: '学分构成',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            data: this.creditForm.x.map((value, index) => ({
              name: value,
              value: this.creditForm.y[index]
            })),
            left: "15%"
          }
        ]
      };
      myChart.setOption(option);
    },
    drawCreditTarget() {
      this.percentages = this.creditForm.x.map((value, index) => ({
        name: value,
        value: Math.floor(this.creditForm.y[index] * 100 / this.creditTarget.y[index]) > 100 ?
          100 : Math.floor(this.creditForm.y[index] * 100 / this.creditTarget.y[index]),
      }));
    },
    reverseFold() {
      this.fold = !this.fold;
    },
    handleClick(value) {
      this.currentNode = value.label;
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chart-container {
    display: flex;
    width: 100%;
  }

  #credit-form {
    width: 40%;
    height: 400px;
  }

  #credit-target {
    width: 60%;
    height: 400px;
    display: flex;
  }

  #credit-target .el-form {
    width: 100%;
  }

  #credit-target .el-form .el-form-item {
    margin: 10px;
  }

  .information-container {
    position: relative;
    width: 80%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
    flex-direction: column;
    transition: 2s;
  }

  .information-container .fold-button {
    width: 100%;
    height: 50px;
  }

  .information-container .information-content {
    padding: 20px;
    overflow: hidden;
  }

  .system-information {
    width: 90%;
    height: 400px;
    margin-top: 30px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
  }
  .system-information .tree-choose {
    display: flex;
    height: 100%;
    width: 22%;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .system-information .tree-choose .el-divider--vertical{
    height: 100%;
    position: absolute;
    right: 0;
  }

  .system-information .course-content {
    width: 75%;
  }
</style>