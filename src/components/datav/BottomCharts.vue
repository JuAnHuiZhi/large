<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
    
      <dv-active-ring-chart :config="config1" />
      <!-- <Label-Tag :config="labelConfig" /> -->
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      
      <dv-active-ring-chart :config="config2" />
       <!-- <Label-Tag :config="labelConfig" /> -->
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <dv-active-ring-chart :config="config3" />
      <!-- <Label-Tag :config="labelConfig" /> -->
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <dv-active-ring-chart :config="config4" />
       <!-- <Label-Tag :config="labelConfig" /> -->
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
            value: 15
          },
          {
            name: "B社区",
            value: 15
          },
          {
            name: "C社区",
            value: 25
          },
          {
            name: "D社区",
            value: 45
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
            value: 50
          },
          {
            name: "B社区",
            value: 15
          },
          {
            name: "C社区",
            value: 25
          },
          {
            name: "D社区",
            value: 10
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        activeRadius: "70%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

      config3: {
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
            value: 15
          },
          {
            name: "D社区",
            value: 35
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        activeRadius: "70%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

      config4: {
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
        activeRadius: "70%",
        digitalFlopStyle: {
          fontSize: 16,
          fill: "#fff"
        }
      },

      labelConfig: {
        data: ["人口总和", "监控中心", "道路外场"]
      }
    };
  }
};
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 15%;
    height: 100%;
    box-sizing: border-box;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
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
  }
  .active-ring-name {
    position: absolute;
    top: 115px;
  }
}
</style>
