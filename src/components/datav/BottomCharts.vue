<template>
  <div class="bottom-charts">
    <div class="botchart-header">龙潭街道社区人口分布</div>
    <div class="item-wrapper">
      <div class="bc-chart-item">
    
      <dv-active-ring-chart :config="config1" />
    </div>

    <div class="bc-chart-item">
      
      <dv-active-ring-chart :config="config2" />
       <Label-Tag :config="labelConfig" />
    </div> 


    <div class="bc-chart-item">
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig" />
    </div> 


    <div class="bc-chart-item">
      <dv-active-ring-chart :config="config4" />
       <Label-Tag :config="labelConfig" />
    </div>  
    </div>

     </div>
</template>

<script>
import LabelTag from "./LabelTag";

export default {
  name: "BottomCharts",
  components: {
    LabelTag
  },
  data() {
    return {
      config1: {
        data: [
          {
            name: "A社区",
            value: 25
          },
          {
            name: "B社区",
            value: 25
          },
          {
            name: "C社区",
            value: 25
          },
          {
            name: "D社区",
            value: 25
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

       config2: {
        data: [
          {
            name: "A社区",
            value: 234
          },
          {
            name: "B社区",
            value: 673
          },
          {
            name: "C社区",
            value: 324
          },
          {
            name: "D社区",
            value: 178
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

       config3: {
        data: [
          {
            name: "A社区",
            value: 980
          },
          {
            name: "B社区",
            value: 777
          },
          {
            name: "C社区",
            value: 456
          },
          {
            name: "D社区",
            value: 200
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },
      config4: {
        data: [
          {
            name: "A社区",
            value: 324
          },
          {
            name: "B社区",
            value: 314
          },
          {
            name: "C社区",
            value: 678
          },
          {
            name: "D社区",
            value: 333
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

      // labelConfig: {
      //   data: ["人口总和", "监控中心", "道路外场"]
      // }
    };
  }
};
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 
  .item-wrapper{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;  
    .bc-chart-item {
      width: 15%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  .botchart-header {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    font-size: 28px;
    font-weight: bold;
    text-indent: 240px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1,
  .decoration-2,
  .decoration-3 {
    display: absolute;
    left: 0%;
  }
  .dv-digital-flop {
    position: absolute;
    // top: 50px
  }
  .active-ring-name {
    position: absolute;
    top: 100px;
  }
}
</style>
