<template>
  <div id="data-view">
    <dv-full-screen-container>
       <top-header />
      <dv-border-box-1 class="main-container">
         <div class="rmctc-right-container">
           <dv-border-box-6 class="rmctc-chart-1">
             <Left-Chart-1 />
           </dv-border-box-6>
           <dv-border-box-6 class="rmctc-chart-2" :reverse="true">
             <Left-Chart-2/>   
           </dv-border-box-6>
         </div>
        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-6 class="rmctc-left-container">
              <bdmapCenter/>
            </dv-border-box-6>
            <div class="rmctc-right-container">
              <dv-border-box-6 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-6>
              <dv-border-box-6 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-6>
              <dv-border-box-6 class="rmctc-chart-3">
                <Right-Chart-3 />  
              </dv-border-box-6>
            </div>
          </div>
          <dv-border-box-6 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-6>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
// import mapCenter from './mapCenter'
import topHeader from './topHeader'
import RightChart1 from './RightChart1'
import RightChart2 from './RightChart2'
import RightChart3 from './RightChart3'
import BottomCharts from './BottomCharts'
import LeftChart1 from './LeftChart1'
import LeftChart2 from './LeftChart2'
import bdmapCenter from './bdmapCenter'

export default {
  name: 'DataView',
  components: {
    topHeader,
    RightChart1,
    RightChart2,
    RightChart3,
    BottomCharts,
    // mapCenter,
    LeftChart1,
    LeftChart2,
    bdmapCenter
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1, .rmctc-chart-2 , .rmctc-chart-3{
    height: 50%;
  }
}
</style>
