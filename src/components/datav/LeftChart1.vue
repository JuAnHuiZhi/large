<template>
  <div class="left-chart-1"> 
      <div class="rc1-header">
        <div class="header-title">龙潭人口流动信息</div>   
      </div>
    <dv-charts class="lacharts" :option="option"/>        
  </div>      
</template>
<script>
export default {
  name: 'TopRightCmp',
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '青年人员',
              color: '#00baff'
            },
            {
              name: '壮年',
              color: '#ff5ca9'
            },
            {
              name: '高龄人员',
              color: '#3de7c9'
            },
            {
              name: '儿童',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '1/1', '2/2', '3/1', '4/1', '5/1', '6/6', '7/30'
          ],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 999
        },
        series: [
          {
            name: '青年人员',
            data: [
              100, 350, 650, 650, 750, 605, 1000
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            }
          },
          {
            name: '壮年',
            data: [
              100, 350, 789, 650, 666, 777, 999
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '高龄人员',
            data: [
             100, 350, 650, 650, 343, 789, 888
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          },
          {
            data: [
              1000, 650, 550, 450, 750, 605, 850
            ],
            type: 'line',
            name: '儿童',
            lineArea: {
              show: true,
              gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
            },
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
            }
          }
        ]
      }
    }
  }
}
</script>
<style lang="less">
  .left-chart-1 {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;  
    
    .rc1-header {
      display: flex;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
      width: 100%;
      height: 30px;
      position: absolute;


      .header-title{
        flex: 1;

      }
    }
     .city-dec {
       color: #07A6FF;
       height: 15px;
  }
  .lcharts {
    flex: 1;  
    box-sizing: border-box;
  }
  }  
</style>
