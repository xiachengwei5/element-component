<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
    <h3>table 测试页面</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="基本属性" name="first">基本属性</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="运行状态" name="third">运行状态</el-tab-pane>
      <el-tab-pane label="控制管理" name="four">控制管理</el-tab-pane>
      <el-tab-pane label="定时任务" name="five">定时任务</el-tab-pane>
  
    </el-tabs>
  
   <hr>
    <div class="">
      <div style="margin-bottom: 20px;">
        <el-button size="small" @click="addTab(editableTabsValue2)">
          添加tab
        </el-button>
      </div>
      <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
          {{item.content}}
        </el-tab-pane>
      </el-tabs>
  
    </div>
  </div>
</template>
<script>
// 测试数据
// const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data() {
    return {
      title: '测试页面',
      activeName: 'second',
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    methodA() {
    },
    addTab(editableTabsValue2) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content' + newTabName
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    onTabClick(v) {
      console.log(v);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {
    options() {
      console.log('store', this.$store);
      //
      // this.$router.push({ path: '/login' });
      // this.$router.push({ path: '/form/checkbox'});
      return this.$store.state.options;
    }
  }
};
</script>
<style>

</style>