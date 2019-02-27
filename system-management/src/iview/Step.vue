<template>
  <div class="sp">
    <Steps :current="current" size="small" class="marg">
      <Step title="第一步"></Step>
      <Step title="第二步"></Step>
      <Step title="第三步"></Step>
      <Step title="第四步"></Step>
    </Steps>
    <Button type="primary" @click="nextStep()">下一步</Button>
    <i-switch v-model="switch1" @on-change="change" class="swi"/>
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
.marg{
  margin: 20px 0;
}
.swi{
  display: block;
  margin: 20px 0;
}

</style>
