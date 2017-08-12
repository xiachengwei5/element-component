<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content">{{title}}</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <el-input placeholder="搜索内容" icon="search" v-model="keyword" :on-icon-click="handleIconClick">
          </el-input>
        </div>
      </el-col>
    </el-row>

    <div class="main-back">
    </div>
    
<el-row :gutter="20"  type="flex" class="row-bg" justify="space-between">
  <el-col :span="24 / lists.lenght"  v-for="(item,index) in lists" :item="item" :index="index" :key="item.name" >
    <div class="grid-content bg-purple"  @click="gotoDetail(item)">
      <img :src="item.imgURL" :alt="item.desc" :title="item.desc">
      <div>
         {{item.name}}
      </div>
    </div>
  </el-col>
</el-row>

<el-row :gutter="20"  type="flex" class="row-bg" justify="space-between">
  <el-col :span="24 / lists.lenght"  v-for="(item,index) in lists2" :key="item.name" :item="item">
    <div class="grid-content bg-purple" @click="gotoDetail(item)">
      <img :src="item.imgURL" :alt="item.desc" :title="item.desc">
      <div>
         {{item.name}}
      </div>
    </div>
  </el-col>
  
</el-row>


    <el-row>


    </el-row>



  
  </div>
</template>
<script>
// 测试数据
// const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data() {
    return {
      title: '环境监测数据中心系统',
      keyword:'',
      lists:[
        {name:'1',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'2',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'3',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'4',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'5',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'6',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"}
      ],
      lists2:[
        {name:'7',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'8',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'9',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'10',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'11',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"},
        {name:'12',isOpen:true,imgURL:'http://via.placeholder.com/100x100',desc:"功能"}
      ]


    };
  },
  methods: {
    handleIconClick() {
      console.log("执行搜索--handleIconClick");
    },
    gotoDetail(item){
      // debugger;
      console.log(item);
       this.$message("调用功能" + item.name);
    }
  }
};
</script>
<style>

.main-back{
  max-width: 100%;
  width: 100%;
  height: auto;
  min-height: 286px;
  max-height: 400px;
  background-repeat:no-repeat;
  text-align: center;
  margin: 0 auto;
  background-size: cover;
  background-image: url(../../assets/img/bg_main.png)
}
</style>