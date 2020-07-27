<template>
  <div class="bottom-chart">
    <div class="botchart-header">龙潭街区社区人口分布</div> 
    <div class="chart-items">
      <dv-water-level-pond  class="bc-chart" :config="config" />  
      <dv-water-level-pond  class="bc-chart" :config="config4" />
      <dv-water-level-pond  class="bc-chart" :config="config2" />
      <dv-water-level-pond  class="bc-chart" :config="config3" />
    </div>   
    <div class="chart-title-wrapper">
      <div class="chart-title">A社区</div>
      <div class="chart-title">B社区</div>
      <div class="chart-title">C社区</div>
      <div class="chart-title">D社区</div>
    </div>
  </div>    
</template>
<script>
export default {
  data() {
    return {
      config: {
        data: [55],
          colors: ['#003B51'],
      },
       config2: {
        data: [67],
          colors: ['#003B51'],
      },
       config3: {
        data: [56],
          colors: ['#003B51'],
      },
       config4: {
        data: [34],
          colors: ['#003B51'],
      }      
    }    
  }    
}
</script>
<style lang="less" scoped>
  .bottom-chart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .botchart-header {
      width: 100%;
      display: flex; 
      font-size: 28px;
      font-weight: bold;
      text-indent: 155px;   
       
    }
    .chart-items {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;  
      
      .bc-chart {
        width: 15%;
        height: 100%; 
        margin-left: 5px;
        box-sizing: border-box; 
      }
    }
    .chart-title-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 10%;    

      .chart-title {
        width: 15%;
        height: 100%;
        box-sizing: border-box; 
        margin-left: 5px;
        text-indent: 50px; 
      }
    }
  }
</style>
