<template>
  <div class='container'>
    <el-select v-model="semester" clearable placeholder="请选择学期" @change="getCourse">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-tabs v-model="nowTab">
      <el-tab-pane label="已选" name="已选"></el-tab-pane>
      <el-tab-pane label="必修" name="必修"></el-tab-pane>
      <el-tab-pane label="限选" name="限选"></el-tab-pane>
      <el-tab-pane label="文理通识" name="文理通识"></el-tab-pane>
    </el-tabs>
    <el-table
        :data="courseData"
        style="width: 100%">
<!--      <el-table-column type="expand">-->
<!--        <template slot-scope="props">-->
<!--          <el-form label-position="left" inline class="demo-table-expand">-->
<!--            <el-form-item label="商品名称">-->
<!--              <span>{{ props.row.name }}</span>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column
        label="名字"
        prop="name">
      </el-table-column>
      <el-table-column
          label="授课教师"
          prop="teacher">
      </el-table-column>
      <el-table-column
          label="所属学院"
          prop="institute">
      </el-table-column>
      <el-table-column
          label="所属体系"
          prop="system">
      </el-table-column>
      <el-table-column
          label="开课时间"
          prop="time">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CourseSelect",
  data () {
    return {
      semester: '',
      options: [],
      nowTab: '',
      courseData: []
    }
  },
  methods: {
    getCourse() {
      fetch('./data/course.json')
        .then(stream => stream.json())
        .then(data => {
          if (!data.data[this.semester]) return;
          this.courseData = data.data[this.semester].map(value => ({
            name: value.name,
            teacher: value.teacher.join(' '),
            institute: value.institute,
            system: value.system,
            time: value.time.join('至')
          }));
        });
    },
  },
  mounted() {
    fetch('./data/semester.json')
      .then(stream => stream.json())
      .then(data => {
        this.options = data.data.map(value => ({
          value: value,
          label: value
        }))
      });
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>