<template>
  <div class="bdmapCenter">
    <baidu-map class="map" @ready="handler" :mapStyle="mapStyle">
      <!-- <bm-marker class="mappint" :position="point1">
      </bm-marker> -->
    </baidu-map>
  </div>
</template>
<script>
import BMapGL from "vue-baidu-map";
import imgUrl from "./img/map.png"
export default {
  data() {
    return {
      point1: { lng: 116.441091, lat: 39.888372 },
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
      console.log(BMap, map + "地图api")
      // lng: 116.417246, lat: 39.888243
      var point = new BMap.Point(116.443507,39.890756)
      map.centerAndZoom(point,16)
      var icon = new BMap.Icon(imgUrl,new BMap.Size(49,49),{
        imgageOffset: new BMap.Size(0,0,) 
      })
      var marker = new BMap.Marker(new BMap.Point(116.446884,39.896898),{icon:icon})
      var marker1 = new BMap.Marker(new BMap.Point(116.447556,39.894219),{icon:icon}) 
      var marker2 = new BMap.Marker(new BMap.Point(116.441419,39.891592),{icon:icon}) 
      var marker3 = new BMap.Marker(new BMap.Point(116.44513,39.887256),{icon:icon}) 
      var marker4 = new BMap.Marker(new BMap.Point(116.444742,39.885848),{icon:icon}) 
      var marker5 = new BMap.Marker(new BMap.Point(116.450294,39.890634),{icon:icon}) 
      map.addOverlay(marker)
      map.addOverlay(marker1)
      map.addOverlay(marker2)
      map.addOverlay(marker3)
      map.addOverlay(marker4)
      map.addOverlay(marker5)
      // map.setHeading(64.5)
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
