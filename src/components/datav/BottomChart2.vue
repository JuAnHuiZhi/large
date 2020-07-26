<template>
  <div class="bottom-chart">
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />  
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />    
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />    
    <dv-water-level-pond :config="config" style="width:150px;height:200px" />      
  </div>    
</template>
<script>
export default {
  data() {
    return {
      config: {
        data: [55],
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
  }
</style>
