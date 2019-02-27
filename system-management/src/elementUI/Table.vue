<template>
  <div id="ei">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column sortable prop="name" label="姓名"></el-table-column>
      <el-table-column
        sortable
        prop="age"
        label="年龄"
        :filters="[{text: '10-30', value: '10-30'}, {text: '31-50', value: '31-50'}, {text: '51-80', value: '51-80'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column sortable prop="sex" label="性别"></el-table-column>
      <el-table-column sortable prop="tel" label="电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/users").then(res => {
        this.tableData = res.data;
      });
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      let newValue = value.split('-');
      return (row[property] >= newValue[0]  && row[property] <= newValue[1]);
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style scoped>
</style>
