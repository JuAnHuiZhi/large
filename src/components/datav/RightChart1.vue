<template>
  <div class="right-chart-1">
    <div class="rc1-header">
      <div class="header-item">单位人员信息</div> 
    </div>

    <div class="rc1-chart-container">
      <dv-capsule-chart class="right" :config="config" />
    </div>
  </div>
</template>

<script>

export default {
  name: "RightChart1",
  data() {
    return {
      config: {
        data: [
          {
            name: "",
            value: 3213
          },
          {
            name: "预备党员",
            value: 2134
          },
          {
            name: "共青团员",
            value: 243
          },
          {
            name: "民革党员",
            value: 2342
          },
          {
            name: "民建会员",
            value: 1233
          }
        ],
        unit: "人"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    display: flex;
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    height: 30px;
    flex-direction: row;

    .header-item {
      flex: 1;
      text-align: center;
    }
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
  }
}
</style>
