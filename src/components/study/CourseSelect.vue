<template>
  <div class='container'>
    <el-select v-model="semester" clearable placeholder="请选择学期" @change="getCourseData">
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
        :data="displayCourse"
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="课程名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="开课院系">
              <span>{{ props.row.institute }}</span>
            </el-form-item>
            <el-form-item label="所属体系">
              <span>{{ props.row.system }}</span>
            </el-form-item>
            <el-form-item label="课程时间">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="课程简介">
              <span>{{ props.row.introduction }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              v-if="courseData.find(value => value.name === scope.row.name).selected"
              size="mini"
              @click="handleSelect(scope.row.name, false)">退课</el-button>
          <el-button
              v-else
              size="mini"
              type="primary"
              @click="handleSelect(scope.row.name, true)">选课</el-button>
        </template>
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
  computed: {
    displayCourse() {
      if (this.nowTab === '已选') {
        return this.courseData.filter(value => value.selected);
      } else if (this.nowTab === '必修') {
        return this.courseData.filter(value => value.system === '专业必修课')
      } else if (this.nowTab === '文理通识') {
        return this.courseData.filter(value => value.system === '文理通识课')
      } else if (this.nowTab === '限选') {
        return this.courseData.filter(value => value.system === '专业选修课')
      }
      return [];
    }
  },
  methods: {
    getCourseData() {
      fetch('./data/course.json')
        .then(stream => stream.json())
        .then(data => {
          if (!data.data[this.semester]) return;
          this.courseData = data.data[this.semester].map(value => ({
            name: value.name,
            teacher: value.teacher.join(' '),
            institute: value.institute,
            system: value.system,
            time: value.time.join('至'),
            introduction: value.introduction,
            selected: value.selected
          }));
        });
    },
    handleSelect(name, selected) {
      this.courseData.find(value => value.name === name).selected = selected;
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