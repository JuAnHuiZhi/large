<template>
  <div class="right-chart-2">
  <div class="rc3-header">
      <div class="header-item">龙潭街道年龄分布   </div> 
    </div>

    <!-- <div class="rc1-chart-container">
      <div class="left">
         <div>设备运行总数</div>
        <div class="number">267</div> 
      </div> -->

      <dv-charts class="right" :option="option" />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "RightChart2",
  data() {
    return {
      option: {
        series: [
          {
            type: "pie",
            data: [
              { name: "未成年人", value: 93 },
              { name: "青年", value: 66 },
              { name: "中壮年", value: 52 },
              { name: "老人", value: 34 },
              { name: "未成年人", value: 22 }
            ],
            radius: ["45%", "65%"],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: "{percent}%\n{name}",
              style: {
                fontSize: 14,
                fill: "#fff"
              }
            }
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"]
      }
    };
  }
};
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
    .rc3-header {
      display: flex; 
      width: 100%;
      font-size: 24px;
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
  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }
  .right {
    flex: 1;
    // padding-bottom: 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }
}
</style>