

<template>

<div class="main marginTop100">

    <h2>这是订单详情{{$route.params.orderid}}，三级路由</h2>
    <Display :orderid='$route.params.orderid'></Display>
    <button @click="setModal()">Show Modal</button>
    <Modaltest :showbox="ShowModal"></Modaltest>
    <h1 v-show="ShowModal">Hello!</h1>
    {{ShowModal}}
</div>

</template>

<script type="text/javascript">
import Display from '../../components/Display'
import Modaltest from './Modaltest'
import {getShowmodal} from '../../vuex/getters'
import {showModal} from '../../vuex/actions'
export default {
    components: {
        Display,
        Modaltest
    },
    created: function () {
        console.log('An instance of MyComponent has been created!')
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
