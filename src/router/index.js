import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

/* layout */
import Layout from '../views/layout/Layout.vue';



/* login*/
import Login from '../views/login.vue';
import Home from '../views/home.vue';
import Err404 from '../views/404.vue';

/* 测试全局的导航页面 */

import Nav from '../views/nav.vue';

/* 测试接口页 */
import Test from '../views/test.vue';


/* 表单 */
import FormDemo from '../views/form/index.vue'
import CheckboxDemo from '../views/form/checkbox.vue';
import From1Demo from '../views/form/form1.vue';
import RadioDemo from '../views/form/radio.vue';
import SelectDemo from '../views/form/select.vue';
import TreeDemo from '../views/form/tree.vue';
import MainTableDemo from '../views/form/mainTable.vue';
import SonTableDemo from '../views/form/sonTable.vue';

import TimeDemo from '../views/form/time.vue';

/*人员部门选择器*/
import DialogTreeDemo from '../views/comp/dialogTree.vue';
/*选项卡*/
import TabsDemo from '../views/comp/tabs.vue';
/*分页*/
import PageDemo from '../views/comp/page.vue';
/*文件上传*/
import UploadDemo from '../views/comp/upload.vue';
/*全选反选*/
import BoxDemo from '../views/comp/box.vue';
/*富文本编辑器*/
import WangEditorDemo from '../views/editor/wangEditor.vue';
/*导出文档*/
import ExportFileDemo from '../views/comp/exportFile.vue';


/**demos */

import Demos from '../views/demos/demos.vue';
import Charts from '../views/chart1.vue';

/* 百度图表 */

import Chart1Demo from '../views/chart/chart1.vue';
import Chart2Demo from '../views/chart/chart2.vue';
import Chart3Demo from '../views/chart/chart3.vue';
import Chart4Demo from '../views/chart/chart4.vue';
import Chart5Demo from '../views/chart/chart5.vue';



/*弹出框 */
import DialogDemo from '../views/form/dialog.vue';

/*表格实例 */

import TableDemo from '../views/table.vue';


/** EnvirDemo */
import EnvirDemo from '../views/demos/envir.vue';

/* 切换主题皮肤 */
import Theme from '../views/theme/index'


Vue.use(Router);

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/login', component: Login, name: '登录', hidden: true },
        { path: '/404', component: Err404, name: '404页面', hidden: true },
        { path: '/nav', component: Nav, name: '导航页', hidden: true },
        {
            path: '/test',
            component: Test,
            name: '测试接口页面',
            hidden: true
        },
        {
            path: '/',
            component: Layout,
            name: '首页',
            hidden: false,
            redirect: '/home',
            noDropdown: true,
            children: [{ path: 'home', component: Home,name:'首页'}]
        },
        {
            path: '/theme',
            component: Layout,
            redirect: 'noredirect',
            name: '换皮肤',
            icon: 'theme',
            noDropdown: true,
            children: [{ path: 'index', component: Theme, name: '换肤' }]
        },
        {
            path: '/form',
            component: Layout,
            redirect: '/form/checkbox',
            name: '表单',
            noDropdown: false,
            children: [{ path: 'checkbox', name: '多选框', component: CheckboxDemo },
                { path: 'radio', name: '单选框', component: RadioDemo },
                { path: 'select', name: '下拉框', component: SelectDemo },
                { path: 'from1', name: '表单验证', component: From1Demo },
                { path: 'tree', name: '树形控件', component: TreeDemo },
                { path: 'time', name: '时间控件', component: TimeDemo }
            ]
        },
        {
            path: '/demos',
            component: Layout,
            redirect: '/demos/demos',
            name: '定制组件',
            noDropdown: false,
            children: [{ path: 'demos', name: '自定义组件', component: Demos },  { path: 'envir', component: EnvirDemo, name: '环境平台首页' },]
        },
         {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '人员部门选择器',
            noDropdown: true,
            children: [{ path: 'dialogTree', name: '', component: DialogTreeDemo }]
        },
        {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '选项卡',
            noDropdown: true,
            children: [{ path: 'tabs', name: '', component: TabsDemo }]
        },
        {
            path: '/dialog',
            component: Layout,
            redirect: 'noredirect',
            name: '弹出框',
            noDropdown: true,
            children: [{ path: 'dialog', name: '弹出框', component: DialogDemo }]
        },
        {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '分页',
            noDropdown: true,
            children: [{ path: 'page', name: '', component: PageDemo }]
        },
        {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '文件上传',
            noDropdown: true,
            children: [{ path: 'upload', name: '', component: UploadDemo }]
        },
        {
            path: '/form',
            component: Layout,
            redirect: '/form/mainTable',
            name: '网格',
            noDropdown: false,
            children: [{ path: 'mainTable', name: '主表', component: MainTableDemo },
                { path: 'sonTable', name: '子表', component: SonTableDemo },
                { path: 'table', component: TableDemo, name: '表格 增删改查' }
            ]
        },
        {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '全选/反选',
            noDropdown: true,
            children: [{ path: 'box', name: '', component: BoxDemo }]
        },
        {
            path: '/editor',
            component: Layout,
            redirect: 'noredirect',
            name: '富文本编辑器',
            noDropdown: true,
            children: [{ path: 'wangEditor', name: '', component: WangEditorDemo }]
        },
        {
            path: '/comp',
            component: Layout,
            redirect: 'noredirect',
            name: '导出文档',
            noDropdown: true,
            children: [{ path: 'exportFile', name: '', component: ExportFileDemo }]
        },
        {
            path: '/chart',
            component: Layout,
            redirect: '/chart/chart1',
            name: '图表',
            noDropdown: false,
            children: [{ path: 'chart1', name: '图表一', component: Chart1Demo },
                { path: 'chart2', name: '图表二', component: Chart2Demo },
                { path: 'chart3', name: '图表三', component: Chart3Demo },
                { path: 'chart4', name: '图表四', component: Chart4Demo },
                { path: 'chart5', name: '图表四', component: Chart5Demo }
            ]
        },
        { path: '*', redirect: '/nav', hidden: true }
    ]
});