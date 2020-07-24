<template>
  <div class="bdmapCenter">
    <baidu-map class="map" :center="center" :zoom="15" @ready="handler" :mapStyle="mapStyle">
      <!-- <bm-marker class="mappint" :position="point1">
      </bm-marker>
       <bm-marker class="mappint" :position="point2">
      </bm-marker>
       <bm-marker class="mappint" :position="point3">
      </bm-marker>
       <bm-marker class="mappint" :position="point4">
      </bm-marker>
       <bm-marker class="mappint"  :position="point5">
      </bm-marker>
       <bm-marker class="mappint"  :position="point6">
      </bm-marker> -->

    </baidu-map>
  </div>
</template>
<script>
import BMapGL from "vue-baidu-map";
export default {
  data() {
    return {
      center: { lng: 116.417246, lat: 39.888243 },
      point1: { lng: 116.426425, lat: 39.889983 },
      point2: { lng: 116.417246, lat: 39.888243 },
      point3: { lng: 116.40699, lat: 39.894039 },
      point4: { lng: 116.40699, lat: 39.880908 },
      point5: { lng: 116.41951, lat: 39.884433 },
      point6: { lng: 116.403963, lat: 39.915119 },
      // position: [
      //   {
      //     point: {
      //      lng: 116.40699, lat: 39.887334
      //     },
      //     name: ''
      //     // point: {
      //     //  lng: 116.427392, lat: 39.888497
      //     // }
      //   }
      //   ],
      show: false,
      mapStyle: {
        styleJson: [
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#021019"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#147a92"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.stroke",
            stylers: {
              color: "#0b3d51"
            }
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "land",
            elementType: "all",
            stylers: {
              color: "#08304b"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#08304b"
            }
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -70
            }
          },
          {
            featureType: "building",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#857f7f"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              color: "#062032"
            }
          },
          {
            featureType: "boundary",
            elementType: "all",
            stylers: {
              color: "#1e1c1c"
            }
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "scenicspotslabel",
            elementType: "labels.text.fill",
            stylers: {
              color: "#032a5aff",
              visibility: "on"
            }
          }
        ]
      }
    };
  },
  methods: {
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
    handler({ BMap, map }) {
      console.log(BMap, map + "地图api");
      // lng: 116.417246, lat: 39.888243
      var map = new BMapGL.Map("map");
      map.centerAndZoom(new BMapGL.Point(116.28019, 40.049191), 19); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      map.setHeading(64.5);
      map.setTilt(73);

      var marker = new BMapGL.Marker(new BMapGL.Point(116.28019, 40.049191)); // 创建点
      map.addOverlay(marker);
    }
  },
  mounted: function() {
    console.log("MOUNTED");
  }
};
</script>
<style>
.bdmapCenter {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.anchorBL {
  display: none;
}
</style>
