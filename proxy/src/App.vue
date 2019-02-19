<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    // fetch
    
    // post方法
    // fetch("apis/sensitiveWords/nicknameFilter",{
    //   method: "post",
    //   // headers:{
    //   //   token:"f4c902c9ae5a2a9d8f84868ad064e706"
    //   // },
    //   body: JSON.stringify({nickname:"1"})
    // }).then(result => {
    //   // console.log(result)
    //   return result.json()
    // }).then(data => {
    //   console.log(data)
    // })

    // get方法
    // fetch("/apis/riskAnalysis/bankData",{
    //   method: "get"
    // }).then(result => {
    //   return result.json()
    // }).then(data => {
    //   console.log(data);
    // })

    // axios

    // get方法
    // this.$axios.get("/apis/riskAnalysis/bankData").then(result => {
    //   console.log(result)
    // })

    // post方法
    // this.$axios.post("apis/sensitiveWords/nicknameFilter",{
    //   nickname:"草"
    // }).then(data => {
    //   console.log(data);
    // })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
