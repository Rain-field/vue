<template>
  <div id="ei">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <router-link to="/elementUI"><Icon type="ios-paper"/>表格</router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link to="/elementUI/table"><Icon type="ios-people"/>待续</router-link>
      </MenuItem>
      <MenuItem name="3">
        <router-link to="/elementUI/table"><Icon type="ios-people"/>待续</router-link>
      </MenuItem>
    </Menu>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "Ei",
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
