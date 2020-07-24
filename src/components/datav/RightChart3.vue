<template>
  <div class="right-chart-3">
    <div class="rc3-header">
      <div class="header-item">龙潭街道房屋统计</div> 
    </div>

    <div class="rc1-chart-container">
      <!-- <div class="left">
        <div class="number">262</div>
        <div>设备运行总数</div>
      </div> -->

      <dv-capsule-chart class="right" :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart3',
  data () {
    return {
      config: {
        data: [
          {
            name: '居民楼',
            value: 73
          },
          {
            name: '商品用房',
            value: 80
          },
          {
            name: '办公楼',
            value: 49
          },
          {
            name: '家属楼',
            value: 72
          },
          {
            name: '老城区',
            value: 99
          }
        ],
        unit: '套'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.right-chart-3 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc3-header {
    display: flex; 
    width: 100%;
    font-size: 18px;
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
