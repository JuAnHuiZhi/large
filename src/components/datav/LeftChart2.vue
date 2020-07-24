<template>
  <div class="left-chart-2">
    <dv-scroll-board :config="config"/>
  </div>    
</template>
<script>
export default {
  name: '',
  data() {
    return {
      config: {
       header:['物业收费','路面养护','无照经营'], 
       data: [
         ['<span style="color:#37a2da;">龙潭社区</span>', '2878万', '2878万'],
         ['龙潭社区', '<span style="color:#32c5e9;">2878万</span>', '2878万'],
         ['龙潭社区', '2878万', '<span style="color:#67e0e3;">2878万</span>'],
         ['龙潭社区', '<span style="color:#9fe6b8;">2878万</span>', '2878万'],
         ['<span style="color:#ffdb5c;">龙潭社区</span>', '2878万', '2878万'],
         ['龙潭社区', '<span style="color:#ff9f7f;">2878万</span>', '2878万'],
         ['龙潭社区', '2878万', '<span style="color:#fb7293;">行7列3</span>'],
         ['龙潭社区', '<span style="color:#e062ae;">2878万</span>', '2878万'],
         ['<span style="color:#e690d1;">小型货车</span>', '2878万', '2878万'],
         ['龙潭社区', '<span style="color:#e7bcf3;">69.2</span>', '69.2']
        ],
  index: true,
  columnWidth: [50],
  align: ['center']  
      }    
    }    
  }    
}
</script>
<style lang="less">
  .left-chart-2 {
    width: 100%;
    height: 100;
    display: flex;
    flex-direction: column;
  }
</style>
