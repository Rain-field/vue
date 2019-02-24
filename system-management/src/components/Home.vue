<template>
  <div class="home">
    <input type="text" placeholder="搜索" v-model="filterInput">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filterData(users,filterInput)" :key="index">
          <td>{{user.name}}</td>
          <td>{{user.sex}}</td>
          <td>{{user.age}}</td>
          <td>{{user.tel}}</td>
          <td>{{user.email}}</td>
          <td><Button type="primary" v-on:click="detailData(user.id)">详情</Button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [],
      filterInput:''
    };
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/users").then(response => {
        this.users = response.data;
      });
    },
    detailData(id) {
        this.$router.push({path:"/detail/"+id});
    },
    // 搜索
    filterData(users,value) {
        return users.filter(function(user){
            return (user.name.match(value)) || (user.sex.match(value)) || (String(user.age).match(value))|| (user.tel.match(value))|| (user.email.match(value));
        })
    }
  },
  created() {
    this.getData();//一定要使用this
  }
};
</script>

<style scoped>
.home {
  box-sizing: border-box;
  padding: 20px;
}
table {
  margin-top: 20px;
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  width: 100%;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
}
table tr,
th {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #dbdbdb;
  background-color: #dedede;
}
table tr td{
  text-align: center;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #dbdbdb;
  background-color: #ffffff;
}
</style>
