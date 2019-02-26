<template>
  <div id="app">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%',zIndex:'999'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="app-logo">管理系统</div>
          <div class="app-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon><router-link to="/">首页</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon><router-link to="/add">添加信息</router-link>
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-keypad"></Icon><router-link to="/step">步骤条</router-link>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-keypad"></Icon><router-link to="/test/app">測試</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
          <router-view></router-view>
      </Content>
      <Footer class="app-footer-center">2018-2019 &copy; leiliang</Footer>
    </Layout>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
.app {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.app-logo {
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: deepskyblue;
  text-align: center;
  font-size: 18px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.app-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.app-nav a{
  color:white;
}
.app-footer-center {
  text-align: center;
}
</style>
