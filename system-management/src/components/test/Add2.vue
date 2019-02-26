<template>
  <div class="add">
    <div class="container">
      <h2>用户信息</h2>
      <label for>姓名</label>
      <Input type="text" v-model="users.name" autofocus/>
      <label for>年龄</label>
      <Input type="text" v-model="users.age"/>
      <label for>性别</label>
      <Input type="text" v-model="users.sex"/>
      <label for>电话</label>
      <Input type="text" v-model="users.tel"/>
      <label for>邮箱</label>
      <Input type="text" v-model="users.email"/>
    </div>
      <Button type="primary" v-on:click="addData()">确认提交</Button>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
      return {
          users:{}
      }
  },
  methods: {
      addData(){
          let newData = {
              name:this.users.name,
              age:this.users.age,
              sex:this.users.sex,
              tel:this.users.tel,
              email:this.users.email
          }
          this.$axios.post("http://localhost:3000/users",newData).then(response => {
              this.$Message.success("添加成功");
          }).then( ()=> {
              this.$router.push({path:"/test/app"});
          })
      }
  },
};
</script>

<style scoped>
.add{
    box-sizing: border-box;
}
.container{
    background: #f8f8f9;
    padding: 20px;
}
.container label{
    display: inline-block;
    margin-top: 10px;
}
.container input{
    width: 100%;
    margin-top: 5px;
}
Button{
    margin-left: 20px;
}
</style>
