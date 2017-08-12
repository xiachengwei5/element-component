<template>
	<div class="demo-wrapper">
		<h2>富文本编辑</h2>
		<div id="div1">
	        <p>请输入内容...</p>
	    </div>
	</div>
 </template>

 <script>

    export default {
		name: 'editor',
		mounted(){
			const wangEditor = require('wangEditor');
			const editor = new wangEditor('div1');
			console.log(editor);
			// 普通的自定义菜单
		    editor.config.menus = [
		        'source',
		        '|',
		        'bold',
		        'underline',
		        'italic',
		        'strikethrough',
		        'eraser',
		        'forecolor',
		        'bgcolor',
		        '|',
		        'quote',
		        'fontfamily',
		        'fontsize',
		        'head',
		        'unorderlist',
		        'orderlist',
		        'alignleft',
		        'aligncenter',
		        'alignright',
		        '|',
		        'link',
		        'unlink',
		        'table',
		        'emotion',
		        '|',
		        'img',
		        'video',
		        'location',
		        'insertcode',
		        '|',
		        'undo',
		        'redo',
		        'fullscreen'
		    ];
			editor.create();
		}
    }
 </script>
 
<style>
    #div1 {
        width: 100%;
        height: 500px;
    }
</style>