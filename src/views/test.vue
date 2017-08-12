<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
    <!--<button @click="send">发送get请求获取数据</button>-->
    <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
      <el-table-column prop="area" label="区域" width="180">
      </el-table-column>
      <el-table-column prop="addTime" label="添加时间" width="180">
      </el-table-column>
      <el-table-column prop="executor" label="执行者">
      </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column prop="description" label="描述">
      </el-table-column>
      <el-table-column prop="useTime" label="用时">
      </el-table-column>
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <template scope="scope">
          <el-button @click="addItem(scope)" size="small" type="success">添加</el-button>
          <el-button @click="removeItem(scope, scope.row)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
  
    </el-table>
    <div v-show="true" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  
    <el-dialog title="添加记录" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <label for="">姓名:name</label>
          <el-input v-model="form.name" auto-complete="off"></el-input>
          <label for="">使用时间:userTime</label>
          <el-input v-model="form.userTime" auto-complete="off"></el-input>
          <label for="">描述:desc</label>
          <el-input v-model="form.desc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.area" placeholder="请选择活动区域">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
            <el-option label="深圳" value="shenzhen"></el-option>
            <el-option label="广州" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmAdd(form)">确 定</el-button>
      </div>
    </el-dialog>
  
  </div>
</template>
<script>
// 测试数据
import { fetchList, deleteItem, addItem, modifyItem } from '../api/test';
export default {
  data() {
    return {
      title: '测试接口页面',
      tableData: [],
      dialogFormVisible: false,
      form: {},
      data: [],
      listQuery: {
        page: 1,
        limit: 20,
        sort: '+id',
      },
      total: null,
      formLabelWidth: '120px'

    };
  },
  mounted() {
    this.send();
  },
  methods: {
    send() {
      let me = this;
      console.log("发送接口协议界面");

      let queryParams = {
        name: '',
        page: me.listQuery.page,
        size: me.listQuery.limit || 20
      }
      fetchList(queryParams).then(r => {
        console.log("response", r);
        me.tableData = r.data;
        // me.page = r.currentPageIndex;
        // me.total = r.total;


      })


    },
    removeItem(scope, item) {
      this.tableData.splice(scope.$index, 1);


    },
    addItem() {
      // todo 添加一个条目
      // 弹出一个框
      this.dialogFormVisible = true;
    },

    confirmAdd(form) {
      console.log(JSON.stringify(form));
    },

    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.send();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.send();
    },
  }
};
</script>
<style>

</style>