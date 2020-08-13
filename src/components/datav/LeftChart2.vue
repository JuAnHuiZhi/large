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
     values: {
			   type: 'c',
			   table: 'tb_rules',
			   col:['id','title','type','content','img','time','user'],//列名
				 where:'',
				 extra:''	  
					},  
      ruleslist: [],
      config: {
       header:['标题','类型','时间'], 
       data: [
         ['<span style="color:#37a2da;">美学生开“新冠派对”</span>', '国际疫情', '2020-07-02 13:02:52'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '<span style="color:#32c5e9;">国际疫情</span>', '2020-07-02 13:02:52'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '疫情', '<span style="color:#67e0e3;">2020-07-02 13:02:52</span>'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '<span style="color:#9fe6b8;">国际疫情</span>', '2020-07-02 13:02:52'],
         ['<span style="color:#ffdb5c;">龙潭社区</span>', '疫情', '2020-07-02 13:02:52'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '<span style="color:#ff9f7f;">国际疫情</span>', '2020-07-02 13:02:52'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '疫情', '<span style="color:#fb7293;">行7列3</span>'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '<span style="color:#e062ae;">国际疫情</span>', '2020-07-02 13:02:52'],
         ['<span style="color:#e690d1;">小型货车</span>', '疫情', '2020-07-02 13:02:52'],
         ['北京：排查隐瞒新发地活动史 隐瞒密接史 不遵守医学观察规定人员', '<span style="color:#e7bcf3;">社会新闻</span>', '2020-07-02 13:02:52']
        ],
     index: true,
     columnWidth: [50],
     align: ['center']  
      }    
    }    
  },
 created() {
    console.log('created')
    getData(this.values,res=>{
      console.log(res.data)
      }) 
    console.log(this.config.data) 
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
