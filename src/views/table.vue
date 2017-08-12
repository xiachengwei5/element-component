 <template>
  <div>
    <h3>基本crud</h3>
    <div>
      <el-button type="text" @click="add">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="地址">
        <template scope="scope">
          <el-button @click="look(scope)" type="text" size="small">查看</el-button>
          <el-button @click="modify(scope)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  
    <el-button @click="export2file">导出</el-button>


    <el-dialog title="查看信息" :visible.sync="isShowDetailInfo">
      <p>
        <!--{{item | json}}-->
        <div v-if="item!=null">
          {{item.date}} | {{item.name}} |{{item.address}}
        </div>
  
      </p>
    </el-dialog>
  
    <el-dialog title="编辑信息" :visible.sync="isShowEditInfo">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="日期" prop="date">
          <el-input v-model="ruleForm.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="isShowEditInfo = false">取 消</el-button>
          <el-button type="primary" @click="confirmEdit">确 定</el-button>
      </div>
    </el-dialog>
  
  </div>
</template>

  <script>

let arr = [{
  date: '2016-05-02',
  name: '小王',
  address: '清华信息港1518号'
}, {
  date: '2016-05-04',
  name: '小王',
  address: '清华信息港1517号'
}, {
  date: '2016-05-01',
  name: '小王',
  address: '清华信息港1519号'
}, {
  date: '2016-05-03',
  name: '小王',
  address: '清华信息港1516号'
}]


export default {
  data() {
    return {
      tableData: arr,
      item: null,
      current:null,
      isShowEditInfo: false,
      isShowDetailInfo: false,
      ruleForm: {
        date: '',
        name: '',
        address: ''
      }
    }
  },

  methods: {
    add() {
      this.tableData.push({
        date: '2016-06-01',
        name: '小王' + Math.ceil(Math.random() * 100),
        address: '清华信息港' + Math.ceil(Math.random() * 100) + "号"
      })
    },
    look(scope) {
      console.log("score", scope);
      this.isShowDetailInfo = true;
      this.item = scope.row;
    },
    modify(scope) {
      console.log("modify", scope);
      this.isShowEditInfo = true;
      // debugger;
      this.ruleForm = scope.row;
      let index  = scope.index;
      this.current = scope.row;


    },

    // 导出文件
    export2file(){
      
    },
    confirmEdit(){
      // 确定修改
      this.$message('修改成功');
      this.isShowEditInfo = false;
      this.ruleForm = this.current;
    },
    remove(scope) {
      let index = scope.$index;
      // debugger;
      this.tableData.splice(index, 1);
    }

  }



}
  </script>