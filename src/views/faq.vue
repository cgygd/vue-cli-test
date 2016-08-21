<template>
    <h1 class="page-header">
        项目结构
    </h1>
    <ul class="list-group">
        <li class="list-group-item">webpack<span class="badge">构建工具(使用官方脚手架工具vue-cli构建)</span></li>
        <li class="list-group-item">vue<span class="badge">界面库(mvvm)</span></li>
        <li class="list-group-item">vue-router<span class="badge">路由控制</span></li>
        <li class="list-group-item">vue-resource<span class="badge">类似jquery的ajax请求</span></li>
        <li class="list-group-item">vuex<span class="badge">集中式状态管理架构</span></li>
        <li class="list-group-item">模块化<span class="badge">(管理代码维护，ES6语法)/非必须，不熟悉也可以用es5语法</span></li>
        <li class="list-group-item">组件化<span class="badge">单文件组件</span></li>
    </ul>


    <h3 class="text-primary">vuex</h3>
    <div class="well well-sm">
        Vuex 是一个专门为 Vue.js 应用所设计的集中式状态管理架构<br />
        在复杂的单页引用里面，使用vuex可以更好的管理状态
    </div>
    <h5 class="text-muted">如下：</h5>
    <textarea disabled="disabled" class="form-control" rows="5">
        State
        Mutations
        Actions
    </textarea>

    <hr />

    <h3 class="text-primary">组件化</h3>
    <div class="well well-sm">
        我们把界面拆分为多个小组件，每个组件在同一地方封装它的 CSS 样式，模板和 JavaScript 定义，这么做比较好。
    </div>
    <h5 class="text-muted">如下：</h5>
    <textarea disabled="disabled" class="form-control" rows="19">
        <style>
            csss code
        </style>

        <template>
            html code
        </template>

        <script>
            import {jianshaoCounter} from '../vuex/actions.js'
            export default{
                data(){
                    return{
                        list:[]
                    }
                }
            }
        </script>
    </textarea>

</template>
