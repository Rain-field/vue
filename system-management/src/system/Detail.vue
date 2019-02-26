<template>
  <div class="detail">
    <div class="container">
      <h2>用户详情</h2>
      <label for>姓名</label>
      <input type="text" v-model="users.name" autofocus>
      <label for>年龄</label>
      <input type="text" v-model="users.age">
      <label for>性别</label>
      <input type="text" v-model="users.sex">
      <label for>电话</label>
      <input type="text" v-model="users.tel">
      <label for>邮箱</label>
      <input type="text" v-model="users.email">
    </div>
    <Button type="primary" @click="ok()">保存</Button>
    <Button type="primary" @click="del()">删除</Button>
    <Button type="primary" v-on:click="cancel()">返回</Button>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      users: {}
    };
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    ok() {
      this.$axios
        .patch(
          "http://localhost:3000/users/" + this.$route.params.id,
          this.users
        )
        .then(result => {
          this.$Message.success("编辑成功");
        })
        .then(() => {
          this.$router.push({ path: "/orign" });
        });
    },
    getData(id) {
      this.$axios.get("http://localhost:3000/users/" + id).then(result => {
        this.users = result.data;
      });
    },
    del() {
      this.$axios
        .delete("http://localhost:3000/users/" + this.$route.params.id)
        .then(result => {
          this.$Message.success("删除成功");
        })
        .then(() => {
          this.$router.push({ path: "/orign" });
        });
    }
  },
  created() {
    this.getData(this.$route.params.id);
  }
  //   updated() {
  //       this.getData(this.$route.params.id);
  //   },
};
</script>

<style scoped>
.detail {
  box-sizing: border-box;
}
.container {
  background: #f8f8f9;
  padding: 20px;
}
.container label {
  display: inline-block;
  margin-top: 10px;
}
.container input {
  width: 100%;
  margin-top: 5px;
}
button {
  margin-left: 20px;
}
</style>
