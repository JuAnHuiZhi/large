<template>
  <div class="center-cmp">
   <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
   <!-- <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" /> -->
  </div>    
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('./img/map.png'),
      config: {
        points: [
          {
            name: "天安门",
            coordinate: [0.48, 0.35],
            icon: { 
              src: "./img/mapCenterPoint.png",
              width: 30,
              height: 30,
              halo: {
                show: true
              }
            },
            text: {
              color: "#fb7293"
            }
          },
          {
            name: "通州北苑",
            coordinate: [0.52, 0.23]
          },
          {
            name: "天坛",
            coordinate: [0.43, 0.29]
          },
          {
            name: "国贸",
            coordinate: [0.59, 0.35]
          },
          {
            name: "大望路",
            coordinate: [0.53, 0.47]
          },
          {
            name: "建国门",
            coordinate: [0.45, 0.54]
          },
          {
            name: "北京西",
            coordinate: [0.36, 0.38]
          },
          {
            name: "东单",
            coordinate: [0.62, 0.55]
          },
          {
            name: "西单",
            coordinate: [0.56, 0.56]
          },
          {
            name: "苹果园",
            coordinate: [0.37, 0.66]
          },
          {
            name: "东直门",
            coordinate: [0.55, 0.81]
          },
          {
            name: "八里桥",
            coordinate: [0.55, 0.67]
          },
          {
            name: "管庄",
            coordinate: [0.37, 0.29]
          },
          {
            name: "运河西",
            coordinate: [0.2, 0.36]
          },
          {
            name: "武夷花园",
            coordinate: [0.76, 0.41]
          },
          {
            name: "望京",
            coordinate: [0.59, 0.18]
          },
          {
            name: "望京西",
            coordinate: [0.68, 0.17]
          },
          {
            name: "将台",
            coordinate: [0.59, 0.1]
          }
        ],
        lines: [
          {
            source: "将台",
            target: "天安门"
          },
          {
            source: "望京",
            target: "天安门"
          },
          {
            source: "望京西",
            target: "天安门"
          },
          {
            source: "武夷花园",
            target: "天安门"
          },
          {
            source: "运河西",
            target: "天安门"
          },
          {
            source: "管庄",
            target: "天安门"
          },
          {
            source: "八里桥",
            target: "天安门"
          },
          {
            source: "东直门",
            target: "天安门"
          },
          {
            source: "苹果园",
            target: "天安门"
          },
          {
            source: "东单",
            target: "天安门"
          },
          {
            source: "西单",
            target: "天安门"
          },
          {
            source: "北京西",
            target: "天安门"
          },
          {
            source: "建国门",
            target: "天安门"
          },
          {
            source: "大望路",
            target: "天安门"
          },
          {
            source: "国贸",
            target: "天安门"
          },
          {
            source: "通州北苑",
            target: "天安门"
          },
          {
            source: "天坛",
            target: "天安门"
          }
        ],
        bgImgSrc: this.imgUrl,
        icon: {
          show: true,
          src: "./img/map.png"
        },
        text: {
          show: true
        }
      }
    };
  }
};
</script>
<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  background-size: 100% 100%;
}
</style>
