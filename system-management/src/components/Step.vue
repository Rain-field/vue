<template>
  <div class="stp">
    <Steps :current="current" size="small">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <Button type="primary" @click="nextStep()">下一步</Button>
  </div>
</template>


<script>
export default {
  name: "Stp",
  data() {
      return {
          current:0
      }
  },
  methods: {
      nextStep() {
          if(this.current <4){
              this.current ++;
          }else{
              this.current = 0;
          }
      }
  },
};
</script>

<style scoped>
    button{
        float: right;
        margin: 400px 200px 0 0;
    }
</style>
