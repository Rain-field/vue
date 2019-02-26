<template>
  <div class="stp">
    <Steps :current="current" size="small">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <i-switch v-model="switch1" @on-change="change"/>
    <Button type="primary" @click="nextStep()">下一步</Button>
  </div>
</template>


<script>
export default {
  name: "Stp",
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
