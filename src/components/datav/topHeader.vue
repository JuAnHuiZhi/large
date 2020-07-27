<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration"/>
    <div class="left-time">{{ gettime }}</div>  
    <div class="left-weater">多云转晴</div>
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">智慧龙潭监控大屏</div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      gettime: ''  
    }  
  },
  methods: {
    getTime:function() {
      var _this = this
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss; 
    },
    currentTime() {
      setInterval(this.getTime)  
    }  
  },
  created() {
    this.currentTime()  
  }
}
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration, .header-right-decoration {
    width: 25%;
    height: 60px;
  }
  
  .left-time {
    position: absolute;
    left: 5%;
    top: 5px;  
  }
  .left-weater {
    position: absolute;
    left: 20%;
    top: 1px;    
  }
  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
 
}
</style>
