<template>
  <div id="app2">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <router-link to="/test/home"><Icon type="ios-paper"/>首页</router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link to="/test/add"><Icon type="ios-people"/>添加</router-link>
      </MenuItem>
    </Menu>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App2",
  provide() {
      return {
          reload: this.reload
      }
  },
  data() {
      return {
          isRouterAlive: true
      }
  },
  methods: {
      reload() {
          this.isRouterAlive = false,
          this.$nextTick(function(){
              this.isRouterAlive = true
          })
      }
  },
};
</script>

<style scoped>
</style>
