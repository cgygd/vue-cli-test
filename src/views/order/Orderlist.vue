<template>
    <div class="main marginTop100">
        <Display></Display>
        <h2>列表页,二级路由</h2>
        <button @click="setModal()">Show Modal</button>
        <Modaltest :showbox="ShowModal"></Modaltest>

        <h1 v-show="ShowModal">Hello!</h1>
        {{ShowModal}}
        <ul>
            <li v-for="item in items">
                <a v-link='{ path: "/orderlist/details/"+$index}'>
                    点击查看三级路由[详情页]{{ $index }}
                </a>
            </li>
        </ul>

    </div>
</template>
<script type="text/javascript">
    import Display from '../../components/Display'
    import Modaltest from './Modaltest'
    import {getShowmodal} from '../../vuex/getters'
    import {showModal} from '../../vuex/actions'
    export default{
        components:{
            Display,
            Modaltest
        },
        data(){
            return{
                items: 10
            }
        },
        vuex:{
            getters:{
                ShowModal:getShowmodal
            },
            actions:{
                showmodal:showModal
            }
        },
        methods:{
            setModal:function(){
                this.showmodal(true)
                console.log('这里是触发：'+this.ShowModal);
            }
        }
    }
</script>
<style media="screen">
    a{text-decoration: none;}
    li{margin-bottom: 10px;}
</style>
