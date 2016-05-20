<template>
    <div class="main marginTop100">
        <h2>列表页,二级路由</h2>
        <ul>
            <li v-for="item in items">
                <a v-link='{ path: "/orderlist/details" }'>
                    点击查看三级路由[详情页]{{ $index }}
                </a>
            </li>
        </ul>

    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                items: 10
            }
        }
    }
</script>
<style media="screen">
    a{text-decoration: none;}
    li{margin-bottom: 10px;}
</style>
