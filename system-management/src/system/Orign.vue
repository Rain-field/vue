<template>
  <div class="orign">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <router-link :to="{name:'Show'}"><Icon type="ios-paper"/>首页</router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link :to="{name:'Add'}"><Icon type="ios-people"/>添加</router-link>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Orign",

};
</script>

<style scoped>

</style>
