<template>
	<div class="demo-wrapper">
		<h2>一对多，表格嵌套</h2>
		<el-table :data="tableData5">
			<el-table-column type="expand">
				<template scope="scope">
					<h2>子表格</h2>
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
				</template>
			</el-table-column>
			<el-table-column label="商品 ID" prop="id">
			</el-table-column>
			<el-table-column label="商品名称" prop="name">
			</el-table-column>
			<el-table-column label="描述" prop="desc">
			</el-table-column>
		</el-table>
	</div>
</template>

<style>
	.demo-table-expand {
		font-size: 0;
	}
	
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>

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
				tableData5: [{
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987123',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987125',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987126',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}],
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