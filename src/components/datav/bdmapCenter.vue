<template>
  <div class="bdmapCenter">
    <baidu-map class="map" :center="{lng: 116.444742, lat: 39.885848}" :zoom="15" :mapStyle="mapStyle">
      <bm-marker :position="{lng: 116.442409, lat: 39.887113}" :dragging="true">
      </bm-marker>
      <bm-marker :position="{lng: 116.44513, lat: 39.887256}" :dragging="true">
      </bm-marker>
      <bm-marker :position="{lng: 116.448628, lat: 39.886165}" :dragging="true">
      </bm-marker>
      <bm-marker :position="{lng: 116.444453, lat: 39.883462}" :dragging="true">
      </bm-marker>
      <bm-marker :position="{lng: 116.446953, lat: 39.881624}" :dragging="true">
      </bm-marker>
      <bm-marker :position="{lng: 116.447685, lat: 39.87992}" :dragging="true">
      </bm-marker>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      mapStyle: {
        styleJson: [
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#021019"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#147a92"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#0b3d51"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -70
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#857f7f"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#062032"
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                              "color": "#1e1c1c"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "scenicspotslabel",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#032a5aff",
                              "visibility": "on"
                    }
          }
]
      }
    }
      },
      methods: {
        infoWindowClose() {
          this.show = false  
        },
        infoWindowOpen() {
          this.show = true  
    }  
  }
}
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
  .anchorBL{
    display:none;
}  
</style>
