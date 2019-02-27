<template>
  <div class="sp">
    <Steps :current="current" size="small">
      <Step title="第一步"></Step>
      <Step title="第二步"></Step>
      <Step title="第三步"></Step>
      <Step title="第四步"></Step>
    </Steps>
    <i-switch v-model="switch1" @on-change="change"/>
    <Button type="primary" @click="nextStep()">下一步</Button>
  </div>
</template>


<script>
export default {
  name: "Sp",
  data() {
    return {
      current: 0,
      switch1: false
    };
  },
  methods: {
    nextStep() {
      if (this.current < 4) {
        this.current++;
      } else {
        this.current = 0;
      }
    },
    change(status) {
      this.$Message.info("开关状态：" + status);
    }
  }
};
</script>

<style scoped>
button {
  float: right;
  margin: 400px 200px 0 0;
}
</style>
