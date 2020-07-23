<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">北京</div>
      <dv-active-ring-chart :config="config1" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">上海</div>
      <dv-active-ring-chart :config="config2" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">深圳</div>
      <dv-active-ring-chart :config="config3" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">杭州</div>
      <dv-active-ring-chart :config="config4" />
    </div>

  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  data () {
    return {
      config1: {
        data: [
          {
            name: '一级医院',
            value: 356
          },
          {
            name: '二级医院',
            value: 215
          },
          {
            name: '三级医院',
            value: 90
          },
          {
            name: '私人诊所',
            value: 317
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: '一级医院',
            value: 615
          },
          {
            name: '一级医院',
            value: 322
          },
          {
            name: '一级医院',
            value: 198
          },
          {
            name: '一级医院',
            value: 80
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: '一级医院',
            value: 243234
          },
          {
            name: '一级医院',
            value: 512
          },
          {
            name: '一级医院',
            value: 23432
          },
          {
            name: '一级医院',
            value: 2343
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: '一级医院',
            value: 2343
          },
          {
            name: '一级医院',
            value: 32423
          },
          {
            name: '一级医院',
            value: 50
          },
          {
            name: '一级医院',
            value: 2000
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        data: ['收费站', '监控中心', '道路外场', '其他']
      }
    }
  }
}
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

  .decoration-1, .decoration-2, .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>
