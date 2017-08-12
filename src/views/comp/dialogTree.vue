<template>
	<div class="demo-wrapper">
		<h1>人员部门选择器</h1>
		<el-form :model="form" :label-width="formLabelWidth">
			<el-form-item label="人员">
				<el-col :span="22">
			    	<el-input v-model="form.name">aa</el-input>
				</el-col>
				<el-col :span="1">
					<el-button type="text" @click="dialogFormVisible = true">选择</el-button>
				</el-col>
			</el-form-item>
		</el-form>
		<el-dialog title="人员选择" :visible.sync="dialogFormVisible">
			<el-form :model="dialogForm">
				<div style="text-align:left">
					<el-input placeholder="输入关键字进行搜索" v-model="filterText">
					</el-input>
		
					<el-tree class="filter-tree" :disabled="true" :data="treeData" show-checkbox default-expand-all @check-change="handleCheckChange" :filter-node-method="filterNode" ref="tree">
					</el-tree>
				</div>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="getCheckedNodes">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		
		data() {
			return {

				dialogFormVisible: false,
				form: {
					name: ''
				},
				dialogForm: {
					
				},
				formLabelWidth: '120px',
				
			    filterText: '',
				treeData: [{
					id: 1,
					label: '部门 1',
					children: [{
						id: 4,
						label: '部门 1-1',
						children: [{
							id: 9,
							label: '人员 1-1-1'
						}, {
							id: 10,
							label: '人员 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '部门 2',
					children: [{
						id: 5,
						label: '人员 2-1'
					}, {
						id: 6,
						label: '人员 2-2'
					}]
				}, {
					id: 3,
					label: '部门 3',
					children: [{
						id: 7,
						label: '人员 3-1'
					}, {
						id: 8,
						label: '人员 3-2'
					}]
				}],
			};
		},
		
		watch: {
	      	filterText(val) {
	        	this.$refs.tree.filter(val);
	      	}
	    },
	    methods: {
	    	filterNode(value, data) {
		        if (!value) return true;
		        return data.label.indexOf(value) !== -1;
		    },
		    handleCheckChange(data, checked, indeterminate) {
		    	console.log(data, checked, indeterminate);
		    },
		    getCheckedNodes() {
		        console.log(this.$refs.tree.getCheckedNodes());
		        const nodes = this.$refs.tree.getCheckedNodes();
		        if (nodes.length < 1) {
		        	this.$message.error('需要勾选人员才能确定哦');
		        } else if (nodes.length > 1) {
		        	this.$message.error('不能选择多个人员哦');
		        } else {
		    		this.dialogFormVisible = false;
		    		this.form.name = nodes[0].label;
		        }
		    },
	    },
		
	};
</script>