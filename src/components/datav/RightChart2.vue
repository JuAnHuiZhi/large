<template>
  <div class="right-chart-2">
   

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
              { name: "通州", value: 93 },
              { name: "朝阳", value: 66 },
              { name: "东城", value: 52 },
              { name: "西城", value: 34 },
              { name: "宣武", value: 22 }
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
  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
  }
  .rc1-chart-container {
    flex: 1;
    display: flex;
  }
  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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