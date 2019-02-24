<template>
  <div class="addBlog">
    <h2>添加博客</h2>
    <p>主题</p>
    <input type="text" v-model="blogs.title">
    <p>内容</p>
    <textarea name="" id="" cols="30" rows="10" v-model="blogs.content"></textarea><br>
    <p>分类</p>
    <div id="checkboxes">
        <label for="vue">Vue.js</label>
        <input type="checkbox" name="vue" v-model="blogs.bocategories">
        <label for="angular">Angular.js</label>
        <input type="checkbox" name="angular" v-model="blogs.bocategories">
        <label for="react">React.js</label>
        <input type="checkbox" name="react" v-model="blogs.bocategories">
        <label for="node">Node.js</label>
        <input type="checkbox" name="node" v-model="blogs.bocategories">
    </div>
    <select id="" v-model="blogs.authors">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
      return {
          blogs:{},
          authors:["雷梁","刘韬","饶鑫","戚皓","辛科","罗一凡"]
      }
  },
};
</script>

<style scoped>

</style>
