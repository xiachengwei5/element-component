<template>
	<div class="demo-wrapper">
		<h2>网格固定列，排序</h2>
		<el-table :data="tableData" border @sort-change="sortChange" :default-sort = "{prop: 'date', order: 'descending'}" style="width: 800px; margin:auto;">
			<el-table-column fixed prop="date" label="日期" sortable width="150">
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="120">
			</el-table-column>
			<el-table-column prop="province" label="省份" width="120">
			</el-table-column>
			<el-table-column prop="city" label="市区" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" width="300">
			</el-table-column>
			<el-table-column prop="zip" label="邮编" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template scope="scope">
					<el-button @click="handleClick" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				console.log(1);
			},
			sortChange(column, prop, order ) {
				// 排除未排序的触发
				if (column.column) 
					console.log(`${column.column.label}列在排序`);
			}
		},
		
		data() {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		}
	}
</script>