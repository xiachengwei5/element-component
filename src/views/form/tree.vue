<template>
	<div class="demo-wrapper">
		<h2>title</h2>
		<h3>基本树型</h3>
		<div style="text-align:left">
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		</div>
		<h3>可选择的树</h3>
		<div style="text-align:left">
			<el-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"></el-tree>

		</div>

		<h3>默认展开的树</h3>
		<div style="text-align:left">
			<el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5, 8]" :props="defaultProps">
			</el-tree>

		</div>
		
		<h3>树节点过滤</h3>
		<div style="text-align:left">
			<el-input placeholder="输入关键字进行过滤" v-model="filterText">
			</el-input>

			<el-tree class="filter-tree" :data="data2" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2">
			</el-tree>

		</div>

	</div>
</template>
<script>
	// 测试数据
	// const cityOptions = ['上海', '北京', '广州', '深圳'];

	export default {
		data() {
			return {
				title: '树型控件',
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				regions: [{
					'name': 'region1'
				}, {
					'name': 'region2'
				}],
				props: {
					label: 'name',
					children: 'zones'
				},
				count: 1,
				filterText: '',
				data2: [{
					id: 1,
					label: '一级 1',
					children: [{
						id: 4,
						label: '二级 1-1',
						children: [{
							id: 9,
							label: '三级 1-1-1'
						}, {
							id: 10,
							label: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级 2',
					children: [{
						id: 5,
						label: '二级 2-1'
					}, {
						id: 6,
						label: '二级 2-2'
					}]
				}, {
					id: 3,
					label: '一级 3',
					children: [{
						id: 7,
						label: '二级 3-1'
					}, {
						id: 8,
						label: '二级 3-2'
					}]
				}],

			};
		},
		watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
		methods: {
			handleNodeClick(val) {
				console.log(val);
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			loadNode(node, resolve) {
				if(node.level === 0) {
					return resolve([{
						name: 'region1'
					}, {
						name: 'region2'
					}, {
						name: 'region3'
					}]);
				}
				if(node.level > 3) return resolve([]);

				var hasChild;
				if(node.data.name === 'region1' || node.data.name === 'region3') {
					hasChild = true;
				} else if(node.data.name === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}

				setTimeout(() => {
					var data;
					if(hasChild) {
						data = [{
							name: 'zone' + this.count++
						}, {
							name: 'zone' + this.count++
						}];
					} else {
						data = [];
					}

					resolve(data);
				}, 500);
			},
	    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }

		}
	};
</script>
<style>

</style>