<template>
	<div>
		<h3>提供统一的导入/导出功能（导出：word、excel、pdf、图片等）</h3>
		<div>
			<el-button type="text" @click="add">添加</el-button>
		</div>
		<el-table :data="tableData" style="width: 100%" id='test1'>
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

		<div id="export" style="padding: 20px;">
			<a data-type="json" class="el-button" href="javascript:;">导出json</a>
			<a data-type="txt" class="el-button" href="javascript:;">导出txt</a>
			<a data-type="csv" class="el-button" href="javascript:;">导出csv</a>
			<a data-type="xml" class="el-button" href="javascript:;">导出xml</a>
			<a data-type="xls" class="el-button" href="javascript:;">导出excel</a>
			<a data-type="doc" class="el-button" href="javascript:;">导出word</a>
			<a data-type="image" class="el-button" href="javascript:;">导出图片</a>
			<a data-type="pdf" class="el-button" href="javascript:;">导出pdf</a>
		</div>
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
				current: null,
				isShowEditInfo: false,
				isShowDetailInfo: false,
				ruleForm: {
					date: '',
					name: '',
					address: ''
				}
			}
		},
		mounted() {
			var tableExport = require('table-export');
			var $exportLink = document.getElementById('export');
			document.getElementById('test1').querySelector('.el-table__body').setAttribute('id', 'tableTest')
			$exportLink.addEventListener('click', function(e) {
				e.preventDefault();
				if(e.target.nodeName === "A") {
					tableExport('tableTest', '测试导出', e.target.getAttribute('data-type'));
				}
			}, false);
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
				let index = scope.index;
				this.current = scope.row;

			},
			confirmEdit() {
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